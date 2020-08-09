<?php

namespace ProcessMaker\Http\Controllers\Api;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\IntranetProject;
use ProcessMaker\Models\ProjectActivities;

class IntranetProjectController extends Controller
{
    public function index() { 
        $projects = IntranetProject::all();

        foreach($projects as $key => $project) {
            $project->currency;
            $project->budgetline;
            foreach($project->budgetline as $bl) {
                $bl->budgetlineowner;
            }
            
            foreach($project->projectactivities as $act) {
                foreach($act->procactivities as $proc) {
                    $proc->procmethod;
                }
            }
        }

        return $projects;
    }

    public function getprojects() {
        $projects = IntranetProject::all();
        foreach($projects as $key => $project) {
            $project->currency;
        }
        return $projects;
    }
    
    public function budgetLines($id) {
        $project = IntranetProject::findOrFail($id);
        return $project->budgetline;
    } 

    public function saveProcurement(Request $request) {
        $ProjectActivities = new ProjectActivities();
        $ProjectActivities->project_id = 1;
        $ProjectActivities->project_activity_title = "Test Title new";
        $ProjectActivities->save();
        //return back();

        dd($ProjectActivities->id);
    }
}
