<?php

namespace ProcessMaker;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
  /**
   * Returns the validation rules for this model.
   * If this is an update validation rule, pass in the existing
   * user to avoid unique rules clashing.
   */
  public static function rules() {
      return [
      'key' => 'required|unique:option|max:255',
      'value' => 'required|max:255'
      ];
  }
}
