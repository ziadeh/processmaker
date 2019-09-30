<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;
use ProcessMaker\Models\Process;

class CategoryAssignment extends Model
{
    protected $guarded = ['id'];

    public function category()
    {
        return $this->morphTo();
    }
}
