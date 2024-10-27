<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TowTruck>
 */
class TowTruckFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'driver_name' => fake()->name(),
            'truck_number' => fake()->randomElement(['AA-111-ZZ', 'NN-222-BB', 'CC-333-CC', 'QQ-222-AA', 'GG-444-GG', 'WW-111-WW', 'RR-333-RR', 'FF-444-FF', 'PP-222-PP', 'OO-111-ZZ']),
            'availability_status' => fake()->randomElement(['ხელმისაწვდომი', 'დაკავებული']),
            'location' => fake()->randomElement(['თბილისი', 'ქუთაისი', 'ბათუმი', 'გორი', 'თელავი', 'ზუგდიდი', 'სიხუმი', 'ცხინვალი', 'მესტია', 'დედოფლისწყარო', 'ოზურგეთი', 'ფოთი', 'სიღნაღი']),
            'driver_phone' => fake()->phoneNumber(),
            'image' => fake()->imageUrl(),
            'user_id' => User::factory(),
        ];
    }
}
