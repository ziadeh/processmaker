<?php

namespace Tests\Traits\Fixtures;
use ProcessMaker\Traits\MakeHttpRequests;
use ProcessMaker\Models\ProcessRequest;

class MakeHttpRequestsFixture {

    use MakeHttpRequests;

    public $endpoints = [
        'test' => [
            'method' => 'POST',
            'url' => 'http://localhost/test',
            'body' => '{"foo":"{{ foo }}", "bar":"{{ bar }}"}',
            'body_type' => null,
            'files' => [
                'myfile'
            ]
        ]
    ];

    public $credentials = [];
    public $authtype = 'NONE';
    public $process_request_id = null;

    private function files() {
        return ProcessRequest::find($this->process_request_id)
            ->firstOrFail()
            ->getMedia();
    }
}