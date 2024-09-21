<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\LoginRequest;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Http\Resources\Api\User\UserResource;
use App\Models\User;
use App\Traits\ApiResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    use ApiResponses;

    // Auth Check
    public function auth()
    {
        return response()->json([
            'isAuthenticated' => auth('web')->check(),
            'user' => new UserResource(auth('web')->user())
        ]);
    }

    // Register User
    public function register(RegisterRequest $request)
    {
        User::create($request->validated());

        return $this->success('Registration Successful');
    }

    // Login User
    public function login(LoginRequest $request)
    {
        if (Auth::attempt($request->only('email', 'password'), $request->remember)) {

            $request->session()->regenerate();

            return $this->success('Login Successful');
        }

        throw ValidationException::withMessages([
            'email' => trans('auth.failed'),
        ]);
    }

    // Logout User
    public function logout(Request $request)
    {
        Auth::guard("web")->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return $this->success('You are now logged out');
    }
}
