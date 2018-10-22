<?php

namespace Tests\Feature\Processes;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\Feature\Shared\RequestHelper;
use ProcessMaker\Models\EnvironmentVariable;

class EnvironmentVariablesTest extends TestCase
{
    use RequestHelper;

    /**
     * Test to make sure the controller and route work with the view
     *
     * @return void
     */
    public function testIndexRoute()
    {

      // get the URL
      $response = $this->webCall('GET', '/processes/environment-variables');
      // check the correct view is called
      $response->assertViewIs('processes.environment-variables.index');

      $response->assertStatus(200);

      $response->assertSee('Environment Variables');
    }

      /**
     * Test to make sure the controller and route work with the view
     *
     * @return void
     */
    public function testEditRoute()
    {

        $envvar_uuid = factory(EnvironmentVariable::class)->create()->uuid_text;
        // get the URL
        $response = $this->webCall('GET', '/processes/environment-variables/' . $envvar_uuid . '/edit');

        $response->assertStatus(200);
        // check the correct view is called
        $response->assertViewIs('processes.environment-variables.edit');
        // $response->assertSee('Edit Environment Variables');
    }
}
