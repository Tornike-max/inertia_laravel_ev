<?php

namespace Database\Seeders;

use App\Models\Evacuator;
use App\Models\Order;
use App\Models\TowTruck;
use App\Models\User;
use App\Models\Vehicle;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory(20)->create();

        Vehicle::factory(10)->create();

        Order::factory(1)->create([
            'user_id' => User::factory(),
            'vehicle_id' => Vehicle::factory(),
            'tow_truck_id' => TowTruck::factory(),
            'order_details' => 'მინდა რაც შეიძლება მალე მოხვიდეთ და აუცილებელია თან იქონიოთ ხურდა, რადგან ზუსტად არ მაქვს თანხა.',
            'pickup_location' => 'Tbilisi,Niko muskhelishvili street-2',
            'dropoff_location' => 'Batumi,Rustaveli street-5',
            'status' => 'completed',
            'order_date' => fake()->date(),
            'completion_date' => fake()->date(),
            'price' => '500',
        ]);
    }
}
