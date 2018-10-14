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
    $groups = array();
    $groups_from_DB = Group::all()->toArray();
    foreach( $groups_from_DB as $group){
      $group_uuid = $group['uuid'];
      $group_name = $group['name'];
      array_push($groups, array('label' => $group_name, 'id' => $group_uuid));
    };
    
    return view('admin.users.index', compact('groups'));
  }
  
  public function edit(User $user)
  {
    $user = User::find($user->uuid_text);
    return view('admin.users.edit', compact('user'));
  }

  public function update(User $user, Request $request)
  {
    $user_uuid = User::find($user->uuid_text);
    $request->validate(User::rules());
    $user->fill($request->input());
    return view('admin.users.show', compact('user'));
  }
  
  public function destroy(User $user)
  {
      $user->delete();
      return response([], 204);
  }
  public function show(User $user)
  {
    // $user = User::find($user->uuid_text);
    return view('admin.users.show', compact('user'));
  }
}
