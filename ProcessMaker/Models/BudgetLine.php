<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;

class BudgetLine extends Model
{
    public function budgetlineowner() {
        return $this->hasMany(BudgetLineOwner::class, 'budget_line_id', 'id');
    }
}
