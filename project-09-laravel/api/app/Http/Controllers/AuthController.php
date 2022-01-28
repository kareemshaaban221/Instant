<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\User;

class AuthController extends Controller
{
    function register(Request $request){
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        // create new user
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('myToken')->plainTextToken;

        $response = ['user' => $user, 'token' => $token];

        return response($response, 201); // 201 http code = created
    }

    function logout(){
        if(auth()->user()->tokens()->delete()){
            return 'logged out';
        }

        return 'Something went wrong';
    }

    function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if($user){
            if( !Hash::check($fields['password'], $user->password) ){
                return 'Wrong Password';
            }

            $token = $user->createToken('myToken')->plainTextToken;

            $response = ['user' => $user, 'token' => $token];

            return response($response, 200); // 201 http code = created
        }

        return 'Not Found User';
    }
}
