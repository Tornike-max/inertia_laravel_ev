<?php

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
        Schema::create('tow_trucks', function (Blueprint $table) {
            $table->id();
            $table->string('driver_name')->default('მძღოლი');
            $table->string('truck_number')->unique();
            $table->enum('availability_status', ['ხელმისაწვდომი', 'დაკავებული'])->default('ხელმისაწვდომი');
            $table->string('location')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tow_trucks');
    }
};
