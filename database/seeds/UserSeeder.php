<?php

use Illuminate\Database\Seeder;
use ProcessMaker\Models\User;
use ProcessMaker\Models\Group;
use ProcessMaker\Models\GroupMember;
use Laravel\Passport\ClientRepository;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(ClientRepository $clients)
    {
        //Create default All Users group
        // $all_permissions_group = factory(Group::class)->create([
        //     'name' => 'All Permissions',
        //     'status' => 'ACTIVE'
        // ]);
        
        $start_process_group = factory(Group::class)->create([
            'name' => 'Start Processes',
            'status' => 'ACTIVE'
        ]);

        //Create admin user
        $admin_user = factory(User::class)->create([
            'username' => 'admin',
            'password' => 'admin',
            'firstname' => 'admin',
            'lastname' => 'admin',
            'timezone' => null,
            'datetime_format' => null,
            'status' => 'ACTIVE',
            'is_administrator' => true,
        ]);
        
        $noraml_user = factory(User::class)->create([
            'username' => 'normal',
            'password' => 'password',
            'firstname' => 'Normal',
            'lastname' => 'User',
            'status' => 'ACTIVE',
            'is_administrator' => false,
        ]);
        $noraml_user->giveDirectPermission(['home']);

        // factory(GroupMember::class)->create([
        //   'member_id' => $admin_user->id,
        //   'member_type' => User::class,
        //   'group_id' => $all_permissions_group->id,
        // ]);
        
        factory(GroupMember::class)->create([
          'member_id' => $noraml_user->id,
          'member_type' => User::class,
          'group_id' => $start_process_group->id,
        ]);

        $clients->createPersonalAccessClient(
            null, 'PmApi', 'http://localhost'
        );
    }
}
