<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;
use ProcessMaker\Models\EnvironmentVariable;
use Spatie\BinaryUuid\HasBinaryUuid;
use ProcessMaker\Exception\ScriptLanguageNotSupported;

/**
 * Represents an Eloquent model of a Script
 *
 * @package ProcessMaker\Model
 *
 * @property string uuid
 * @property string title
 * @property text description
 * @property string language
 * @property text code
 *
 *   @OA\Schema(
 *   schema="scriptsEditable",
 *   @OA\Property(property="uuid", type="string", format="uuid"),
 *   @OA\Property(property="title", type="string"),
 *   @OA\Property(property="description", type="string"),
 *   @OA\Property(property="language", type="string"),
 *   @OA\Property(property="code", type="string"),
 * ),
 * @OA\Schema(
 *   schema="scripts",
 *   allOf={@OA\Schema(ref="#/components/schemas/scriptsEditable")},
 *   @OA\Property(property="created_at", type="string", format="date-time"),
 *   @OA\Property(property="updated_at", type="string", format="date-time"),
 * )
 *
 */
class Script extends Model
{
    use HasBinaryUuid;

    public $incrementing = false;

    protected $guarded = [
        'uuid',
        'created_at',
        'updated_at',
    ];

    private static $scriptFormats = [
        'application/x-php' => 'php',
        'application/x-lua' => 'lua',
    ];

    /**
     * Validation rules
     *
     * @param $existing
     *
     * @return array
     */
    public static function rules($existing = null)
    {
        $rules = [
            'title' => 'required|unique:scripts,title',
            'language' => 'required|in:php,lua'
        ];
        if ($existing) {
            // ignore the unique rule for this uuid
            $rules['title'] = [
                'required',
                'string',
                Rule::unique('scripts')->ignore($existing->uuid, 'uuid')
            ];
        }
        return $rules;
    }

    /**
     * Executes a script given a configuration and data input.
     *
     * @param array $data
     * @param array $config
     */
    public function runScript(array $data, array $config)
    {
        $code = $this->code;
        $language = $this->language;
        // Create the temporary files to feed into our docker container
        $datafname = tempnam(config('app.bpm_scripts_home'), "data.json");

        $tempData = fopen($datafname, 'w');
        fwrite($tempData, json_encode($data));
        fclose($tempData);
        chmod($datafname, 0666);

        $configfname = tempnam(config('app.bpm_scripts_home'), "config.json");
        $tempData = fopen($configfname, 'w');
        fwrite($tempData, json_encode($config));
        fclose($tempData);
        chmod($configfname, 0666);

        $scriptfname = tempnam(config('app.bpm_scripts_home'), "script");
        $tempData = fopen($scriptfname, 'w');
        fwrite($tempData, $code);
        fclose($tempData);
        chmod($scriptfname, 0666);

        $outputfname = tempnam(config('app.bpm_scripts_home'), "output.json");
        $tempData = fopen($outputfname, 'w');
        fwrite($tempData, '');
        fclose($tempData);
        chmod($outputfname, 0666);

        $variablesParameter = [];
        EnvironmentVariable::chunk(50, function ($variables) use (&$variablesParameter) {
            foreach ($variables as $variable) {
                $variablesParameter[] = $variable['name'] . '=' . $variable['value'];
            }
        });

        if ($variablesParameter) {
            $variablesParameter = "-e " . implode(" -e ", $variablesParameter);
        } else {
            $variablesParameter = '';
        }

        dump(file_exists($datafname), file_exists($configfname), file_exists($scriptfname), file_exists($outputfname));
        dump(file_get_contents($datafname), file_get_contents($configfname), file_get_contents($scriptfname), file_get_contents($outputfname));
        // So we have the files, let's execute the docker container
        switch (strtolower($language)) {
            case 'php':
                $cmd = config('app.bpm_scripts_docker') . " run " . $variablesParameter . " -v " . $datafname . ":/opt/executor/data.json -v " . $configfname . ":/opt/executor/config.json -v " . $scriptfname . ":/opt/executor/script.php -v " . $outputfname . ":/opt/executor/output.json processmaker/executor:php ls -l /opt/executor 2>&1";
                break;
            case 'lua':
                $cmd = config('app.bpm_scripts_docker') . " run " . $variablesParameter . " -v " . $datafname . ":/opt/executor/data.json -v " . $configfname . ":/opt/executor/config.json -v " . $scriptfname . ":/opt/executor/script.lua -v " . $outputfname . ":/opt/executor/output.json processmaker/executor:lua ll /opt/executor 2>&1";
                break;
            default:
                throw new ScriptLanguageNotSupported($language);
        }

        $response = exec($cmd, $output, $returnCode);
        dump($cmd, $response, $output, $returnCode);
        if ($returnCode) {
            // Has an error code
            unlink($datafname);
            unlink($configfname);
            unlink($scriptfname);
            unlink($outputfname);
            return [
                'output' => implode($output, "\n")
            ];
        } else {
            // Success
            $output = json_decode(file_get_contents($outputfname), true);
            unlink($datafname);
            unlink($configfname);
            unlink($scriptfname);
            unlink($outputfname);
            return [
                'output' => $output
            ];
        }
    }

    /**
     * Get the language from a script format string.
     *
     * @param string $format
     *
     * @return string
     */
    public static function scriptFormat2Language($format)
    {
        return static::$scriptFormats[$format];
    }
}
