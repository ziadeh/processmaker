<?php

namespace ProcessMaker\Http\Controllers\Api;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\ProcType;

class ProcTypeController extends Controller
{
    public function index() { 
        $ProcTypes = ProcType::all();
        return $ProcTypes;
    }
}
