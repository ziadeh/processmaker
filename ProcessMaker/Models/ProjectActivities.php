<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;

class ProjectActivities extends Model
{
	protected $fillable = ['project_id', 'project_activity_title'];

    public function procactivities() {
        return $this->hasMany(ProcActivities::class, 'project_activity_id', 'id');
    }
}
