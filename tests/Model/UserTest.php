<?php
namespace Tests\Model;

use Tests\TestCase;
use ProcessMaker\Models\User;
use ProcessMaker\Models\Group;
use ProcessMaker\Models\Permission;
use ProcessMaker\Models\GroupMember;
use ProcessMaker\Models\PermissionAssignment;

class UserTest extends TestCase
{

    public function testPermissions() {
        $president_user = factory(User::class)->create(['password' => 'password']);
        $technician_user = factory(User::class)->create(['password' => 'password']);
        $mom_user = factory(User::class)->create(['password' => 'password']);

        $ln_permission = factory(Permission::class)->create([
            'guard_name' => 'launch.nukes',
        ]);
        $dn_permission = factory(Permission::class)->create([
            'guard_name' => 'disarm.nukes',
        ]);

        $nl_group = factory(Group::class)->create(['name' => 'Nuke Launchers']);
        $p_group = factory(Group::class)->create(['name' => 'Presidents']);

        factory(GroupMember::class)->create([
            'group_id' => $nl_group->id,
            'member_type' => Group::class,
            'member_id' => $p_group,
        ]);
        
        factory(GroupMember::class)->create([
            'group_id' => $nl_group->id,
            'member_type' => User::class,
            'member_id' => $technician_user,
        ]);
        
        factory(GroupMember::class)->create([
            'group_id' => $p_group->id,
            'member_type' => User::class,
            'member_id' => $president_user->id,
        ]);

        factory(PermissionAssignment::class)->create([
            'permission_id' => $ln_permission->id,
            'assignable_type' => Group::class,
            'assignable_id' => $p_group->id,
        ]);
        
        factory(PermissionAssignment::class)->create([
            'permission_id' => $dn_permission->id,
            'assignable_type' => Group::class,
            'assignable_id' => $nl_group->id,
        ]);
        
        $mom_user->giveDirectPermission('disarm.nukes');

        $this->assertTrue($president_user->hasPermission('launch.nukes'));
        $this->assertTrue($president_user->hasPermission('disarm.nukes'));

        $this->assertFalse($technician_user->hasPermission('launch.nukes'));
        $this->assertTrue($technician_user->hasPermission('disarm.nukes'));

        $this->assertTrue($mom_user->hasPermission('disarm.nukes'));
        $this->assertFalse($mom_user->hasPermission('launch.nukes'));
    }
}