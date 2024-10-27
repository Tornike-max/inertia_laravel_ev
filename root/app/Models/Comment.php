<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['author_id', 'tow_truck_id', 'content'];

    public function towTruck()
    {
        return $this->belongsTo(TowTruck::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class);
    }
}
