<?php

use Illuminate\Database\Seeder;
use ProcessMaker\Models\Catalog;
use ProcessMaker\Models\Screen;

class CatalogSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //data for screen types
        factory(Catalog::class)->create([
            'value' => 'FORM',
            'label' => 'Form',
            'description' => 'screen type by default',
            'type' => Screen::class
        ]);

        //data for screen types
        factory(Catalog::class)->create([
            'value' => 'DISPLAY',
            'label' => 'Display',
            'description' => 'screen type by default',
            'type' => Screen::class
        ]);



    }
}

