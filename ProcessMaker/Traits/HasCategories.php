<?php
namespace ProcessMaker\Traits;

use ProcessMaker\Models\CategoryAssignment;

trait HasCategories {
    public function categoryAssignments()
    {
        return $this->morphMany(CategoryAssignment::class, 'assignable');
    }

    public function categories()
    {
        return $this->categoryAssignments->map(function($ca) { return $ca->category; });
    }
}