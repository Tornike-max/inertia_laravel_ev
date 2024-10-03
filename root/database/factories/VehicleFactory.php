<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'user_id' => User::factory(),
            'make' => fake()->randomElement(['Toyota', 'Mazda', 'Jeep', 'Audi', 'Mercedes Benz', 'BMW', 'Ferarri', 'Porche']),
            'model' => fake()->word(),
            'year' => fake()->numberBetween(2000, 2024),
            'color' => fake()->colorName(),
            'license_plate' => fake()->randomElement(['OZ-777-BE', 'AP-007-TS', 'BA-111-GI', 'DA-999-TO', 'LU-666-KA']),
        ];
    }
}
