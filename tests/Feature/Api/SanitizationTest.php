<?php

namespace Tests\Feature\Api;

use Tests\TestCase;
use Faker\Factory as Faker;
use ProcessMaker\Models\Script;
use Tests\Feature\Shared\RequestHelper;

class SanitizationTest extends TestCase
{
    use RequestHelper;

    /**
     * Test our sanitization middleware using a script as our guinea pig.
     * This allows us to test fields that should be sanitized and
     * those that should not, all within one model.
     */
    public function testSanitizationMiddleware()
    {
        // Create our fake data
        $title = "Best Script Ever";
        $description = "This is the <b>best</b> script ever!";
        $code = "<?php echo 'Hello world.';";

        // Create the process
        $faker = Faker::create();
        $script = factory(Script::class)->make([
            'title' => $title,
            'description' => $description,
            'code' => $code,
        ]);

        // Post the process to the API
        $response = $this->apiCall('POST', '/scripts', $script->toArray());

        //Validate the header status code
        $response->assertStatus(422);
        $this->assertArrayHasKey('message', $response->json());

        //Field with error
        $this->assertArrayHasKey('description', $response->json(['errors']));

    }
}