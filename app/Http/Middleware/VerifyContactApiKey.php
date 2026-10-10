<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyContactApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // return $request->all();
        $apiKey = $request->header('X-Contact-Api-Key');
        // $configApiKey = config('services.contact.api_key');

        // return response()->json(['api_key' => 'API Key: ' . $apiKey, 'config_api_key' => 'Config API Key: ' . $configApiKey], 200);

        if ($apiKey !== config('services.contact.api_key')) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        
        return $next($request);
    }
}
