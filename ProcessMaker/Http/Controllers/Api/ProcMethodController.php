<?php

namespace ProcessMaker\Http\Controllers\Api;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\ProcMethod;

class ProcMethodController extends Controller
{
    public function index() { 
        $ProcMethods = ProcMethod::all();
        return $ProcMethods;
    }
}
