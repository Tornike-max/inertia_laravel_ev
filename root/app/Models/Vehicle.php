<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    // 'user_id' => Auth::user()->id,
    //         'model' => $validatedData['model'],
    //         'make' => $validatedData['make'],
    //         'year' => $validatedData['year'],
    //         'kg' => $validatedData['kg'],
    //         'color' => $validatedData['color'] ?? '',
    //         'license_plate' => $validatedData['license_plate']

    protected $fillable = [
        'user_id',
        'model',
        'make',
        'year',
        'kg',
        'color',
        'license_plate'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
