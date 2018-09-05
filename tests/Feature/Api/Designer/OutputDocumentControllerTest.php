<?php

namespace Tests\Feature\Api\Cases;

use Faker\Factory as Faker;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Output;
use ProcessMaker\Model\OutputDocument;
use ProcessMaker\Model\Process;
use ProcessMaker\Model\User;
use Tests\TestCase;

class OutputDocumentControllerTest extends TestCase
{
    use DatabaseTransactions;

    public $user;

    public function testIndex()
    {
        // Create a new element for the test
        $outputDocument = factory(OutputDocument::class)->create();

        $url = "api/1.0/process/{$outputDocument->process->uid}/output-document";

        // Calling and asserting that the created element is listed in the index
        $response = $this->actingAs($this->user, 'api')->json('GET', $url);
        $response->assertStatus(200);
        $response->assertJsonCount(1, 'data.*.data');
    }

    public function testShow()
    {
        // Create a new element for the test
        $outputDocument = factory(OutputDocument::class)->create();

        $url = "api/1.0/process/{$outputDocument->process->uid}/output-document/{$outputDocument->uid}";

        // Calling and asserting that the created element is returned
        $response = $this->actingAs($this->user, 'api')->json('GET', $url);
        $response->assertStatus(200);
        $response->assertJsonFragment(['uid' => $outputDocument->uid]);
    }

    public function testStore()
    {
        // Create a new process for the test
        $process = factory(Process::class)->create();

        $url = "api/1.0/process/{$process->uid}/output-document";

        $faker = Faker::create();
        $newOutputDocument = [
            'title' => $faker->sentence(3),
            'description' => $faker->sentence(3),
            'filename' => $faker->sentence(3),
            'report_generator' => 'wrong report generator type',
            'generate' => $faker->randomElement(OutputDocument::DOC_GENERATE_TYPE),
            'type' => $faker->randomElement(OutputDocument::DOC_TYPE),
            'properties' => [
                'pdf_security_permissions' => $faker->randomElements(OutputDocument::PDF_SECURITY_PERMISSIONS_TYPE, 2, false),
                'pdf_security_open_password' => 'test open password',
                'pdf_security_owner_password' => 'test owner password',
                'landscape' => true,
                'media' => 'pdf',
                'left_margin' => 0,
                'right_margin' => 0,
                'top_margin' => 0,
                'bottom_margin' => 0,
                'pdf_security_enabled' => false
            ]
        ];

        // Wrong parameters should generate an error
        $response = $this->actingAs($this->user, 'api')
            ->json('POST', $url, $newOutputDocument);
        $response->assertStatus(422);

        // Correct parameters should create an output document
        $newOutputDocument['report_generator'] = $faker->randomElement(OutputDocument::DOC_REPORT_GENERATOR_TYPE);
        $response = $this->actingAs($this->user, 'api')
            ->json('POST', $url, $newOutputDocument);
        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        $faker = Faker::create();

        // Create a new element for the test
        $outputDocument = factory(OutputDocument::class)->create();

        $url = "api/1.0/process/{$outputDocument->process->uid}/output-document/{$outputDocument->uid}";

        $updateOutputDocument = [
            'title' => 'test title',
            'description' => $faker->sentence(2),
            'filename' => $faker->sentence(2),
            'report_generator' => $faker->randomElement(OutputDocument::DOC_REPORT_GENERATOR_TYPE),
            'generate' => $faker->randomElement(OutputDocument::DOC_GENERATE_TYPE),
            'type' => $faker->randomElement(OutputDocument::DOC_TYPE),
            'properties' => [
                'pdf_security_permissions' => []
            ]
        ];

        // Calling and asserting that the created element is returned
        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', $url, $updateOutputDocument);

        $response->assertStatus(200);

        //Asserting that the output document has been modified
        $modOutputDocument = OutputDocument::find($outputDocument->id);
        $this->assertTrue($modOutputDocument->title === 'test title');
    }

    public function testDelete()
    {
        // Create a new element for the test
        $outputDocument = factory(OutputDocument::class)->create();

        $url = "api/1.0/process/{$outputDocument->process->uid}/output-document/{$outputDocument->uid}";

        // Calling and asserting that the created element is returned
        $response = $this->actingAs($this->user, 'api')
            ->json('DELETE', $url);

        $response->assertStatus(204);

        // Asserting that the created output document has been deleted
        $this->assertCount(0, OutputDocument::all());
    }

    /**
     * Overwrite of the setup method that authenticates and fills the default connection data
     */
    protected function setUp()
    {
        parent::setUp();

        // we need an user and authenticate him
        $this->user = factory(User::class)->create([
            'password' => Hash::make('password')
        ]);

    }
}
