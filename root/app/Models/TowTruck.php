<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TowTruck extends Model
{
    use HasFactory;
    protected $fillable = ['driver_name', 'driver_phone', 'truck_number', 'availability_status', 'location', 'user_id', 'image'];
    protected $table = 'tow_trucks';

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
