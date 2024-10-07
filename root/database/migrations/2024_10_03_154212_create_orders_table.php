<?php

use App\Models\Evacuator;
use App\Models\TowTruck;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(TowTruck::class);
            $table->foreignIdFor(Vehicle::class)->constrained()->cascadeOnDelete();
            $table->string('pickup_location');
            $table->string('dropoff_location');
            $table->longText('order_details');
            $table->timestamp('order_date')->nullable();
            $table->timestamp('completion_date')->nullable();
            $table->float('price');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
