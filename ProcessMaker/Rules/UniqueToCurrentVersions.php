<?php

namespace ProcessMaker\Rules;

use Illuminate\Contracts\Validation\Rule;
use ProcessMaker\Models\ScriptVersion;
use Illuminate\Support\Facades\DB;

class UniqueToCurrentVersions implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($class)
    {
        $this->table_name = (new $class())->getTable();
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        // https://stackoverflow.com/a/28090544/176751
        $result = DB::Select("
            SELECT sv1.* from {$script_versions} sv1
            LEFT JOIN script_versions sv2
                ON sv1.script_id = sv2.script_id
                AND sv1.created_at < sv2.created_at
                OR (
                    -- tiebreaker if same created_at
                    sv1.created_at = sv2.created_at
                    AND sv1.id < sv2.id
                )
            WHERE sv2.created_at IS NULL
            AND sv1.{$attribute} = ?
        ", [$value]);
        eval(\Psy\sh());
        return count($result) == 0;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'This :attribute has already been used.';
    }
}
