<?php

namespace ProcessMaker\Traits;

use ProcessMaker\Models\CategoryAssignment;
use ProcessMaker\Models\ProcessCategory;

trait HasCategories
{
    public function assignable()
    {
        return $this->morphedByMany(CategoryAssignment::class, 'assignable');
    }

    public function category()
    {
        return $this->hasOneThrough(ProcessCategory::class, CategoryAssignment::class, 'assignable_id', 'id', null,'category_id')->where('assignable_type', static::class);
    }

    public function categories()
    {
        $categories = $this->morphedByMany(ProcessCategory::class, 'category', 'category_assignments', 'assignable_id', 'category_id');
        $categories->withPivotValue('assignable_type', static::class);
        return $categories;
    }
}
