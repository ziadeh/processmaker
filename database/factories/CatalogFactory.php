<?php

use Faker\Generator as Faker;
use ProcessMaker\Models\Catalog;

/**
 * Model factory for a catalog.
 */
$factory->define(Catalog::class, function (Faker $faker) {
    return [
        'value' => $faker->unique()->sentence(),
        'label' => $faker->unique()->sentence(),
        'type' => $faker->unique()->sentence(),
        'description' => 'ACTIVE'
    ];
});


