<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeedBack extends Model
{
    protected $table = 'feedback';
    use HasFactory;

    public function author()
    {
        return $this->belongsTo(User::class);
    }
}
