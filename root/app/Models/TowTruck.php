<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TowTruck extends Model
{
    use HasFactory;
    protected $fillable = ['driver_name', 'truck_number', 'availability_status', 'location', 'user_id'];
    protected $table = 'tow_trucks';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
