<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fighter extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'weight_class', 'entrance_song', 'organization',
        'youtube_link', 'image', 'image_source', 'birthday', 'height'
    ];
}
