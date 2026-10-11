<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin User',
<<<<<<< HEAD
            'email' => 'admin@example.com',
=======
            'email' => 'admin@admin.com',
>>>>>>> eb0788ef6825bef663cd8ff2a7cb40fe967ad862
        ]);
    }
}
