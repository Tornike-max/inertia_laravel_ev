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
        Schema::table('tow_trucks', function (Blueprint $table) {
            $table->dropUnique(['truck_number']); // ჩასვით column_name-ის სახელი
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tow_trucks', function (Blueprint $table) {});
    }
};
