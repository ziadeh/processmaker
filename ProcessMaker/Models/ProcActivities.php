<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;

class ProcActivities extends Model
{
    public function procmethod() {
        return $this->hasOne(ProcMethod::class, 'id', 'proc_method_id');
    }
}
