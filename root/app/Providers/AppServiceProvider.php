<?php

namespace App\Providers;

use App\Models\FeedBack;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Broadcast;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        $feedbacks = Cache::remember('feedbacks', 60 * 3, function () {
            return FeedBack::query()->with('author')->latest()->take(5)->get();
        });

        Inertia::share('feedbacks', $feedbacks);

        Gate::define('is-admin', function (User $user) {
            return $user->status === 'admin';
        });

        Broadcast::routes();

        require base_path('routes/web.php');
    }
}
