<?php

namespace Tests\Feature\Api\Cases;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use ProcessMaker\Model\DbSource;
use ProcessMaker\Model\InputDocument;
use ProcessMaker\Model\Process;
use ProcessMaker\Model\ProcessVariable;
use ProcessMaker\Model\User;
use Tests\TestCase;

class InputDocumentControllerTest extends TestCase
{
    use DatabaseTransactions;

    public $user;

    public function testIndex()
    {
        // Create a new element for the test
        $inputDocument = factory(InputDocument::class)->create();

        $url = "api/1.0/process/{$inputDocument->process->uid}/input-documents";

        // Calling and asserting that the created element is listed in the index
        $response = $this->actingAs($this->user, 'api')->json('GET', $url);
        $response->assertStatus(200);
        $response->assertJsonCount(1, 'data.*.data');
    }

    public function testShow()
    {
        // Create a new element for the test
        $inputDocument = factory(InputDocument::class)->create();

        $url = "api/1.0/process/{$inputDocument->process->uid}/input-document/{$inputDocument->uid}";

        // Calling and asserting that the created element is returned
        $response = $this->actingAs($this->user, 'api')->json('GET', $url);
        $response->assertStatus(200);
        $response->assertJsonFragment(['uid' => $inputDocument->uid]);
    }

    public function testStore()
    {
        // Create a new process for the test
        $process = factory(Process::class)->create();

        $url = "api/1.0/process/{$process->uid}/input-document";

        $newInputDocument = ['title' => 'test title',
            'description' => 'test description',
            'form_needed' => 'this value generates error',
            'original' => InputDocument::DOC_ORIGINAL_TYPE[0],
            'published' => InputDocument::DOC_PUBLISHED_TYPE[0],
            'versioning' => 0,
            'destination_path' => '/test/path',
            'tags' => InputDocument::DOC_TAGS_TYPE[0]
        ];

        // Wrong parameters should generate an error
        $response = $this->actingAs($this->user, 'api')
            ->json('POST', $url, $newInputDocument);
        $response->assertStatus(422);

        // Correct parameters should create an input document
        $newInputDocument['form_needed'] = array_keys(InputDocument::FORM_NEEDED_TYPE)[0];
        $response = $this->actingAs($this->user, 'api')
            ->json('POST', $url, $newInputDocument);
        $response->assertStatus(201);
    }

    public function testUpdate()
    {
        // Create a new element for the test
        $inputDocument = factory(InputDocument::class)->create();

        $url = "api/1.0/process/{$inputDocument->process->uid}/input-document/{$inputDocument->uid}";

        $updateInputDocument = ['title' => 'test title',
            'description' => 'test description',
            'form_needed' => array_keys(InputDocument::FORM_NEEDED_TYPE)[0],
            'original' => InputDocument::DOC_ORIGINAL_TYPE[0],
            'published' => InputDocument::DOC_PUBLISHED_TYPE[0],
            'versioning' => 0,
            'destination_path' => '/test/path',
            'tags' => InputDocument::DOC_TAGS_TYPE[0]
        ];

        // Calling and asserting that the created element is returned
        $response = $this->actingAs($this->user, 'api')
            ->json('PUT', $url, $updateInputDocument);

        $response->assertStatus(200);

        //Asserting that the input document has been modified
        $modInputDocument = InputDocument::find($inputDocument->id);
        $this->assertTrue($modInputDocument->title === 'test title');
    }

    public function testDelete()
    {
        // Create a new element for the test
        $inputDocument = factory(InputDocument::class)->create();

        $url = "api/1.0/process/{$inputDocument->process->uid}/input-document/{$inputDocument->uid}";

        // Calling and asserting that the created element is returned
        $response = $this->actingAs($this->user, 'api')
            ->json('DELETE', $url);

        $response->assertStatus(204);

        $url = "api/1.0/process/{$inputDocument->process->uid}/input-documents";

        // Asserting that the created input document has been deleted
        $this->assertCount(0, InputDocument::all());
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
