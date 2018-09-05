<?php

namespace ProcessMaker\Http\Controllers\Api\Designer;

use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use ProcessMaker\Exception\DoesNotBelongToProcessException;
use ProcessMaker\Model\OutputDocument;
use ProcessMaker\Model\Process;
use ProcessMaker\Transformers\OutputDocumentTransformer;

class OutputDocumentController
{
    /**
     * Get a list of Output Documents in a process.
     *
     * @param Process $process
     * @param Request $request
     *
     * @return ResponseFactory|Response
     */
    public function index(Process $process, Request $request)
    {
        $options = [
            'filter' => $request->input('filter', ''),
            'current_page' => $request->input('page', 1),
            'per_page' => $request->input('per_page', 10),
            'sort_by' => $request->input('order_by', 'title'),
            'sort_order' => $request->input('order_direction', 'ASC'),
        ];

        $query = OutputDocument::where('process_id', $process->id);
        $filter = $options['filter'];
        if (!empty($filter)) {
            $filter = '%' . $filter . '%';
            $query->where(function ($query) use ($filter) {
                $query->Where('title', 'like', $filter)
                    ->orWhere('description', 'like', $filter)
                    ->orWhere('filename', 'like', $filter)
                    ->orWhere('report_generator', 'like', $filter)
                    ->orWhere('type', 'like', $filter)
                    ->orWhere('versioning', 'like', $filter)
                    ->orWhere('current_revision', 'like', $filter)
                    ->orWhere('tags', 'like', $filter);
            });
        }
        $response =  $query->orderBy($options['sort_by'], $options['sort_order'])
            ->paginate($options['per_page'])
            ->appends($options);

        return fractal($response, new OutputDocumentTransformer())->respond();
    }

    /**
     * Get a single Output Document in a process.
     *
     * @param Process $process
     * @param OutputDocument $outputDocument
     *
     * @return ResponseFactory|Response
     * @throws DoesNotBelongToProcessException
     */
    public function show(Process $process, OutputDocument $outputDocument)
    {
        $this->belongsToProcess($process, $outputDocument);
        return fractal($outputDocument, new OutputDocumentTransformer())->respond(200);
    }

    /**
     * Create a new Output Document in a process.
     *
     * @param Process $process
     * @param Request $request
     *
     * @return ResponseFactory|Response
     */
    public function store(Process $process, Request $request)
    {
        $data = [
            'report_generator' => $request->input('report_generator', 'HTML2PDF'),
            'generate' => $request->input('generate', 'BOTH'),
            'type' => $request->input('type', 'HTML'),
            'current_revision' => $request->input('current_revision', 0),
            'open_type' => $request->input('open_type', 0),
            'versioning' => $request->input('versioning', 0),
            'properties' => $this->addDefaultDocumentProperties($request->input('properties', [])),
            'process_id' => $process->id
        ];

        $data = array_merge($data, $this->formatData($request, ['title', 'description', 'filename', 'template',
            'type', 'tags']));


        $outputDocument = new OutputDocument();
        $outputDocument->fill($data);
        $outputDocument->saveOrFail();
        $response = $outputDocument->refresh();
        return fractal($response, new OutputDocumentTransformer())->respond(201);
    }

    /**
     * Update a Output Document in a process.
     *
     * @param Process $process
     * @param OutputDocument $outputDocument
     * @param Request $request
     *
     * @return ResponseFactory|Response
     * @throws DoesNotBelongToProcessException
     */
    public function update(Process $process, OutputDocument $outputDocument, Request $request)
    {
        $this->belongsToProcess($process, $outputDocument);
        $data = $this->formatData($request, ['title', 'description', 'filename', 'template', 'report_generator',
            'type', 'versioning', 'current_revision', 'tags', 'open_type', 'generate', 'properties']);

        if ($data) {
            $data['process_id'] = $process->id;
            $data['properties'] = $this->addDefaultDocumentProperties(array_merge($outputDocument->properties, $data['properties']));

            $outputDocument->fill($data);
            $outputDocument->saveOrFail();
        }
        return response([], 200);
    }

    /**
     * Delete a Output Document in a process.
     *
     * @param Process $process
     * @param OutputDocument $outputDocument
     *
     * @return ResponseFactory|Response
     * @throws DoesNotBelongToProcessException
     */
    public function remove(Process $process, OutputDocument $outputDocument)
    {
        $this->belongsToProcess($process, $outputDocument);
        $outputDocument->delete();
        return response([], 204);
    }

    /**
     * Validate if Output Document belong to process.
     *
     * @param Process $process
     * @param OutputDocument $outputDocument
     *
     * @throws DoesNotBelongToProcessException|void
     */
    private function belongsToProcess(Process $process, OutputDocument $outputDocument)
    {
        if ($process->id !== $outputDocument->process_id) {
            Throw new DoesNotBelongToProcessException(__('The Output Document does not belong to this process.'));
        }
    }

    /**
     * Format in capital letters to send information.
     *
     * @param Request $request
     * @param array $fields
     *
     * @return array
     */
    private function formatData(Request $request, array $fields): array
    {
        $data = [];
        foreach ($fields as $field) {
            if ($request->has($field)) {
                $data[$field] = $request->input($field);
            }
        }
        return $data;
    }


    /**
     * Adds default pdf document properties
     *
     * @param array $properties
     *
     * @return array
     */
    private function addDefaultDocumentProperties($properties): array
    {
        $properties['landscape'] = isset($properties['landscape']) ? $properties['landscape'] : 0;
        $properties['media'] = isset($properties['media']) ? $properties['media'] : 'letter';
        $properties['left_margin'] = isset($properties['left_margin']) ? $properties['left_margin'] : 30;
        $properties['right_margin'] = isset($properties['right_margin']) ? $properties['right_margin'] : 15;
        $properties['top_margin'] = isset($properties['top_margin']) ? $properties['top_margin'] : 15;
        $properties['bottom_margin'] = isset($properties['bottom_margin']) ? $properties['bottom_margin'] : 15;
        $properties['field_mapping'] = isset($properties['field_mapping']) ? $properties['field_mapping'] : null;
        $properties['destination_path'] = isset($properties['destination_path']) ? $properties['destination_path'] : null;
        $properties['pdf_security_enabled'] = isset($properties['pdf_security_enabled']) ? $properties['pdf_security_enabled'] : 0;
        $properties['pdf_security_open_password'] = isset($properties['pdf_security_open_password']) ? $properties['pdf_security_open_password'] : '';
        $properties['pdf_security_owner_password'] = isset($properties['pdf_security_owner_password']) ? $properties['pdf_security_owner_password'] : '';
        $properties['pdf_security_permissions'] = isset($properties['pdf_security_permissions']) ? $properties['pdf_security_permissions'] : null;

        return $properties;
    }

}
