<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimoni extends Model
{
    protected $fillable = [
        'nama',
        'jabatan',
        'isi_testimoni',
        'rating',
        'foto',
    ];
}
