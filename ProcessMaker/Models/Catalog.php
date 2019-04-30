<?php

namespace ProcessMaker\Models;

use Illuminate\Database\Eloquent\Model;
use ProcessMaker\Traits\SerializeToIso8601;

/**
 * Represents a catalog definition.
 *
 * @property string $id
 * @property string $value
 * @property string $label
 * @property string $type
 * @property string $description
 * @property \Carbon\Carbon $updated_at
 * @property \Carbon\Carbon $created_at
 *
 * @OA\Schema(
 *   schema="catalogEditable",
 *   @OA\Property(property="id", type="string", format="id"),
 *   @OA\Property(property="value", type="string"),
 *   @OA\Property(property="label", type="string"),
 *   @OA\Property(property="type", type="string"),
 *   @OA\Property(property="description", type="string"),
 * ),
 * @OA\Schema(
 *   schema="catalog",
 *   allOf={
 *      @OA\Schema(ref="#/components/schemas/catalogEditable"),
 *      @OA\Schema(
 *          type = "object",
 *          @OA\Property(property="created_at", type="string", format="date-time"),
 *          @OA\Property(property="updated_at", type="string", format="date-time"),
 *      )
 *   }
 * )
 *
 */
class Catalog extends Model
{
    use SerializeToIso8601;

    protected $fillable = [
        'value',
        'label',
        'type',
        'description',
    ];

    public static function rules()
    {
        return [
            'value' => ['required', 'string', 'max:255'],
            'label' => ['required', 'string', 'max:255'],
            'type' => ['required', 'string', 'max:255']
        ];
    }
}
