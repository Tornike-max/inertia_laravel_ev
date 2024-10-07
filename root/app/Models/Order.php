<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'pickup_location',
        'dropoff_location',
        'order_details',
        'order_date',
        'completion_date',
        'price',
        'status',
        'user_id',
        'tow_truck_id',
        'vehicle_id'
    ];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
