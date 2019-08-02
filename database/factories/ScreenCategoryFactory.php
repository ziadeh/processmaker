<?php

use Faker\Generator as Faker;
use ProcessMaker\Models\ScreenCategory;

/**
 * Model factory for a screen category.
 */
$factory->define(ScreenCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->sentence(),
        'status' => 'ACTIVE',
        'is_system' => false,
    ];
});
