<?php
namespace Tests\Traits;

use Mockery as m;
use Tests\TestCase;
use Tests\Traits\Fixtures\MakeHttpRequestsFixture;
use ProcessMaker\Models\ProcessRequest;

class UserTest extends TestCase
{
    public function mockGuzzle() {
        $body = m::mock();
        $body->shouldReceive('getContents')->andReturn('{"foo":true}');
        $response = m::mock();
        $response->shouldReceive('getStatusCode')->andReturn(200);
        $response->shouldReceive('getBody')->andReturn($body);

        $expect = function($request, $options) {
            // TBD
            // $request->getBody()->getContents();
            return true;
        };

        $client = m::mock('overload:GuzzleHttp\Client');
        $client->shouldReceive('send')->once()->withArgs($expect)->andReturn($response);
    }

    public function testSendingFiles()
    {
        // Add some files that are available to send
        $path = tempnam(sys_get_temp_dir(), 'test');
        file_put_contents($path, 'test');
        $processRequest = factory(ProcessRequest::class)->create();
        $processRequest
            ->addMedia($path)
            ->withCustomProperties(['data_name' => 'myfile'])
            ->toMediaCollection();


        $this->mockGuzzle();

        $fixture = new MakeHttpRequestsFixture();
        $fixture->process_request_id = $processRequest->id;

        $config = [
            'endpoint' => 'test',
            'method' => 'GET',
        ];
        $data = [
            'foo' => 'bar',
        ];
        $result = $fixture->request($data, $config);
        dd($result);
    }
}