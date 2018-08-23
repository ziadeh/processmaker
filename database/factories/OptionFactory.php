<?php

use Faker\Generator as Faker;

$factory->define(Option::class, function (Faker $faker) {
    return [
      'key' => $faker->sentence,
      'value' => $faker->sentence,
      'description' => $faker->paragraph
    ];
});
