<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Validation\Rule;
use ProcessMaker\Models\Script;
use ProcessMaker\Traits\HideSystemCategories;

class ScriptCategory extends Model
{
    use HideSystemCategories;
    
    protected $connection = 'processmaker';

    public function scripts()
    {
        return $this->hasMany(Script::class);
    }
}
