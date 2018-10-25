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
                $config = [
                    'image' => 'processmaker/executor:php',
                    'command' => 'php /opt/executor/bootstrap.php',
                    'parameters' => $variablesParameter,
                    'inputs' => [
                        '/opt/executor/data.json' => json_encode($data),
                        '/opt/executor/config.json' => json_encode($config),
                        '/opt/executor/script.php' => $code
                    ],
                    'outputs' => [
                        'response' => '/opt/executor/output.json'
                    ]
                ];
                break;
            case 'lua':
                $config = [
                    'image' => 'processmaker/executor:php',
                    'command' => 'lua5.3 /opt/executor/bootstrap.lua',
                    'parameters' => $variablesParameter,
                    'inputs' => [
                        '/opt/executor/data.json' => json_encode($data),
                        '/opt/executor/config.json' => json_encode($config),
                        '/opt/executor/script.php' => $code
                    ],
                    'outputs' => [
                        'response' => '/opt/executor/output.json'
                    ]
                ];
                break;
            default:
                throw new ScriptLanguageNotSupported($language);
        }
        
        $response = $this->execDocker($config);
        $returnCode = $response['returnCode'];
        $errorContent = $response['output'];
        $output = $response['outputs']['response'];

        if ($returnCode) {
            // Has an error code
            return [
                'output' => implode($errorContent, "\n")
            ];
        } else {
            // Success
            $response = json_decode($output, true);
            return [
                'output' => $response
            ];
        }
    }

    private function execDocker($options)
    {
        $container = $this->createContainer($options['image'],
            $options['command']);
        foreach ($options['inputs'] as $path => $data) {
            $this->putInContainer($container, $path, $data);
        }
        $response = $this->startContainer($container);
        $outputs = [];
        foreach ($options['outputs'] as $name => $path) {
            $outputs[$name] = $this->getFromContainer($container, $path);
        }
        exec(config('app.bpm_scripts_docker') . ' rm ' . $container);
        $response['outputs'] = $outputs;
        return $response;
    }

    private function createContainer($image, $command, $parameters = '')
    {
        $cidfile = tempnam(config('app.bpm_scripts_home'), 'cid');
        unlink($cidfile);
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' create %s --cidfile %s %s %s &', $parameters, $cidfile,
                $image, $command);
        $line = exec($cmd, $output, $returnCode);
        if ($returnCode) {
            throw new \Exception('Unable to create a docker container: ' . implode("\n",
                $output));
        }
        $cid = file_get_contents($cidfile);
        unlink($cidfile);
        return $cid;
    }

    private function putInContainer($container, $path, $content)
    {
        $source = tempnam(config('app.bpm_scripts_home'), 'put');
        file_put_contents($source, $content);
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' cp %s %s:%s 2>&1', $source, $container, $path);
        $line = exec($cmd, $output, $returnCode);
        unlink($source);
        if ($returnCode) {
            throw new \Exception('Unable to send data to container: ' . implode("\n",
                $output));
        }
    }

    private function getFromContainer($container, $path)
    {
        $target = tempnam(config('app.bpm_scripts_home'), 'get');
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' cp %s:%s %s 2>&1', $container, $path, $target);
        $line = exec($cmd, $output, $returnCode);
        $content = file_get_contents($target);
        unlink($target);
        return $content;
    }

    private function startContainer($container)
    {
        $cmd = config('app.bpm_scripts_docker')
            . sprintf(' start %s -a 2>&1', $container);
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
