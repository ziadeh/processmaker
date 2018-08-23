<?php

use Illuminate\Database\Seeder;

class OptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaults = [
          [
            'key' => 'timezone',
            'value' => 'America/Los_Angeles',
            'description' => 'Default timezone',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'language',
            'value' => 'en',
            'description' => 'Default language file',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'format_date',
            'value' => 'm/d/Y',
            'description' => 'Default date formate',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'format_name',
            'value' => 'firstname lastname',
            'description' => 'Default formatting for the user name',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'smpt_server',
            'value' => '',
            'description' => 'Server hostname for sending email',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'smtp_username',
            'value' => '',
            'description' => 'Default username for sending email',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'smtp_password',
            'value' => '',
            'description' => 'Default username for sending email',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'smtp_port',
            'value' => '',
            'description' => 'Default port for sending email',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'smtp_tslssl',
            'value' => '',
            'description' => 'Default protocol for sending email',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'smtp_authentication',
            'value' => '',
            'description' => 'Default authentication for sending email',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'theme_logo',
            'value' => '/img/processmaker-logo-white-sm.png',
            'description' => 'Default logo shown on the menu',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],
          [
            'key' => 'theme_icon',
            'value' => '/img/processmaker_icon_logo-md.png',
            'description' => 'Default icon shown on the menu',
            'created_at' => date("Y-m-d H:i:s"),
            'updated_at' => date("Y-m-d H:i:s")
          ],

        ];

        foreach($defaults as $default){
          DB::table('options')->insert($default);
        }
    }
}
