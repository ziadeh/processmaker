<?php

namespace ProcessMaker\Traits;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

trait HideSystemCategories
{
    protected static function boot()
    {
        parent::boot();

        if (substr(static::class, -8) === 'Category') {
            static::addGlobalScope('non_system', function (Builder $builder) {
                $builder->where('is_system', false);
            });

        } else {
            static::addGlobalScope('non_system', function (Builder $builder) {
                $prefix = Str::singular($builder->getModel()->getTable());
                $builder
                    ->where($prefix . '_category_id', null)
                    ->orWhereHas('category', function($q){
                        $q->withoutGlobalScopes()->where('is_system', false);
                    });
            });
        }
    }
}