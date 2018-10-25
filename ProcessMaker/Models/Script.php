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
        $datafname = config('app.bpm_scripts_home'). "/data.json";

        $tempData = fopen($datafname, 'w');
        fwrite($tempData, json_encode($data));
        fclose($tempData);
        chmod($datafname, 0777);

        $configfname = config('app.bpm_scripts_home') . "/config.json";
        $tempData = fopen($configfname, 'w');
        fwrite($tempData, json_encode($config));
        fclose($tempData);
        chmod($configfname, 0777);

        $scriptfname = config('app.bpm_scripts_home') . "/script";
        $tempData = fopen($scriptfname, 'w');
        fwrite($tempData, $code);
        fclose($tempData);
        chmod($scriptfname, 0777);

        $outputfname = config('app.bpm_scripts_home') . "/output.json";
        $tempData = fopen($outputfname, 'w');
        fwrite($tempData, '');
        fclose($tempData);
        chmod($outputfname, 0777);

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

        // So we have the files, let's execute the docker container
        switch (strtolower($language)) {
            case 'php':
                $cmd = config('app.bpm_scripts_docker') . " run " . $variablesParameter . " -v " . $datafname . ":/opt/executor/data.json -v " . $configfname . ":/opt/executor/config.json -v " . $scriptfname . ":/opt/executor/script.php -v " . $outputfname . ":/opt/executor/output.json processmaker/executor:php cat /opt/executor/data.json 2>&1";
                break;
            case 'lua':
                $cmd = config('app.bpm_scripts_docker') . " run " . $variablesParameter . " -v " . $datafname . ":/opt/executor/data.json -v " . $configfname . ":/opt/executor/config.json -v " . $scriptfname . ":/opt/executor/script.lua -v " . $outputfname . ":/opt/executor/output.json processmaker/executor:lua pwd 2>&1";
                break;
            default:
                throw new ScriptLanguageNotSupported($language);
        }
        
        $this->createContainer('scriptExecutor', 'processmaker/executor:php');
        $this->putInContainer('scriptExecutor', '/opt/executor/data.json', json_encode($data));
        dump($this->getFromContainer('scriptExecutor', '/opt/executor/data.json'));
        dump($this->execInContainer('scriptExecutor', 'cat /opt/executor/data.json'));
        

        //$response = exec($cmd, $output, $returnCode);
        //dump($cmd, $response, $output, $returnCode);
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

    private function createContainer($name, $image)
    {
        //    docker create -v /cfg --name configs alpine:3.4 /bin/true
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' create -v /opt/executor --name %s %s / 2>&1', $name, $image);
        $line = exec($cmd, $output, $returnCode);
        if ($returnCode) {
            throw new \Exception('Unable to create a docker container: ' . implode("\n", $output));
        }
    }

    private function putInContainer($container, $path, $content)
    {
        $source = tempnam(config('app.bpm_scripts_home'), 'put');
        file_put_contents($source, $content);
        //    docker cp path/in/your/source/code/app_config.yml configs:/cfg
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' cp %s %s:%s 2>&1', $source, $container, $path);
        $line = exec($cmd, $output, $returnCode);
        if ($returnCode) {
            throw new \Exception('Unable to send data to container');
        }
    }

    private function getFromContainer($container, $path)
    {
        $target = tempnam(config('app.bpm_scripts_home'), 'get');
        file_put_contents($target, '');
        //    docker cp app:/output /path/in/your/job/space
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' cp %s:%s %s 2>&1', $container, $path, $target);
        $line = exec($cmd, $output, $returnCode);
        return file_get_contents($target);
    }

    private function execInContainer($container, $command)
    {
        //    docker cp app:/output /path/in/your/job/space
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' exec -d %s %s 2>&1', $container, $command);
        $line = exec($cmd, $output, $returnCode);
        return compact('line', 'output', 'returnCode');
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
    
    private function runTest($command)
    {
        echo "\n$command\n";
        passthru($command. ' 2>&1');
    }
}
