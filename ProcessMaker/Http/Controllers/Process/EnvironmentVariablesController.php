<?php

namespace ProcessMaker\Http\Controllers\process;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\EnvironmentVariable;

class EnvironmentVariablesController extends Controller
{
    /**
     * Get the list of environment variables
     *
     * @return \Illuminate\View\View|\Illuminate\Contracts\View
     */
    public function index()
    {
        return view('processes.environment-variables.index');
    }

    public function edit(EnvironmentVariable $environmentVariable)
    {
        return view('processes.environment-variables.edit', ['EnvironmentVariable' => $environmentVariable]);
    }

}
