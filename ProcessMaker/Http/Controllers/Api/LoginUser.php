<?php

namespace ProcessMaker\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use ProcessMaker\Http\Controllers\Controller; 
use ProcessMaker\Models\User;
use Validator;

class LoginUser extends Controller
{
    public $successStatus = 200;

    public function login() {  
        if(Auth::attempt(['username' => request('username'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $data['user'] = Auth::user();
            $data['user']['roles'] = ['admin'];
            $data['user']['rights'] = ['can_view_profiles'];

            $data['user']['token'] = $user->createToken('MyApp')-> accessToken; 
            return response()->json(['success' => true, 'user' => $data['user']], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }

    public function details() 
    { 
        $user = Auth::user(); 
        return response()->json(['success' => $user], $this-> successStatus); 
    } 
    
}
