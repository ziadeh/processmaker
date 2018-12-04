<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class Permission extends Model
{
    const TYPE_ROUTE = 'route';
    const TYPE_RESOURCE = 'resource';

    protected $fillable = [
        'name',
        'guard_name',
        'description',
    ];

    static public function byGuardName($name)
    {
        try {
            return self::where('guard_name', $name)->firstOrFail();
        } catch(ModelNotFoundException $e) {
            throw new ModelNotFoundException($name . " permission does not exist");
        }
    }
}
