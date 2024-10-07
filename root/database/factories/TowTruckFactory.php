<?php

namespace Database\Factories;

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
            'driver_name' => 'ანზორა ევაკუატორაშვილი',
            'truck_number' => 'AN-200-ZO',
            'availability_status' => 'ხელმისაწვდომი',
            'location' => 'თბილისი'
        ];
    }
}
