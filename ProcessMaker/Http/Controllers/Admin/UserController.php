<?php

namespace ProcessMaker\Http\Controllers\Admin;

use Illuminate\Http\Request;
use ProcessMaker\Http\Controllers\Controller;
use ProcessMaker\Models\User;
use ProcessMaker\Models\Group;

class UserController extends Controller
{
  /**
   * Get the list of users.
   *
   * @return \Illuminate\View\View|\Illuminate\Contracts\View
   */
  public function index()
  {
    $groups = [];
    $groups_from_DB = Group::all()->toArray();
    foreach( $groups_from_DB as $group){
      $group_uuid = $group['uuid'];
      $group_name = $group['name'];
      $groups[$group_uuid] = $group_name;
    };
    
    return view('admin.users.index', compact('groups'));
  }

  public function store(Request $request)
  {
    $user = User::create($request->all());
    return redirect('admin/users/'.$user->uuid_text);
  }

  public function edit(User $user)
  {
    return view('admin.users.edit', compact('user'));
  }

  public function show(User $user)
  {
    return view('admin.users.show', compact('user'));
  }
}
