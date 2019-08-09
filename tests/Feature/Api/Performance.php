<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\WithFaker;
use ProcessMaker\Models\Group;
use ProcessMaker\Models\Process;
use Tests\Feature\Shared\ResourceAssertionsTrait;
use Tests\TestCase;
use Tests\Feature\Shared\RequestHelper;
use Illuminate\Database\Eloquent\Factory as EloquentFactory;
use ReflectionObject;
use Illuminate\Support\Facades\DB;

/**
 * Tests routes related to processes / CRUD related methods
 *
 * @group process_tests
 */
class ProcessTest extends TestCase
{
    use WithFaker;
    use RequestHelper;
    use ResourceAssertionsTrait;

    // Speed of model Group creation (records/unit_time):
    // u=71.48 σ=22.16 => Min Speed of distribution = 27.16
    // Maximum allowed payload per creation: 2 times the creation
    const MIN_SPEED = 27 / (1 + 2 * 71 / 27);

    private $exceptions = [
        // Hi payload because of password hash
        //'ProcessMaker\Models\User' => 27*6/100,
    ];

    /**
     * List the factories
     *
     * @return array
     */
    public function CaseProvider()
    {
        $factories = app(EloquentFactory::class);
        $reflection = new ReflectionObject($factories);
        $property = $reflection->getProperty('definitions');
        $property->setAccessible(true);
        $definitions = $property->getValue($factories);

        $model = 'ProcessMaker\Models\Group';
        $t = microtime(true);
        factory($model, 100)->create();
        $baseTime = microtime(true) - $t;
        $model::getQuery()->delete();

        $models = [];
        foreach ($definitions as $model => $definition) {
            //if ($model==='ProcessMaker\Models\Notification') {
            $models[] = [$model, $baseTime];
            //}
        }
        return $models;
    }

    /**
     *
     *
     * @param [type] $model
     * @param [type] $baseCount
     * @param [type] $baseTime
     *
     * @dataProvider CaseProvider
     */
    public function testFactories($model, $baseTime)
    {
        $baseCount = $this->getTotalRecords();
        $t = microtime(true);
        factory($model)->create();
        $time = microtime(true) - $t;
        $count = $this->getTotalRecords();
        $speed = ($count - $baseCount) / ($time / $baseTime);

        $minSpeed = isset($this->exceptions[$model]) ? $this->exceptions[$model] : self::MIN_SPEED;
        error_log('['.$speed / $minSpeed.']');
        $this->assertGreaterThanOrEqual($minSpeed, $speed);
    }

    /**
     * Get total count of records in the databases
     *
     * @return int
     */
    private function getTotalRecords()
    {
        $tables = [];
        foreach (config('database.connections') as $name => $config) {
            $connection = DB::connection($name);
            $list = $connection->getDoctrineSchemaManager()->listTableNames();
            foreach ($list as $table) {
                if (!isset($tables[$table])) {
                    $tables[$table] = $connection->table($table)->count();
                }
            }
        }
        return array_sum($tables);
    }
}
