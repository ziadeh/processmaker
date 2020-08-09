<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;

class IntranetProject extends Model
{
    public function currency() { 
        return $this->hasOne(Currency::class, 'name', 'currency_name');
    }

    public function budgetline() { 
        return $this->hasMany(BudgetLine::class, 'project_id', 'id');
    }

    public function projectactivities() {
        return $this->hasMany(ProjectActivities::class, 'project_id', 'id');
    }
}
