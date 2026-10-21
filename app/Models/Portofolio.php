<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portofolio extends Model
{
    protected $fillable = [
        'judul',
        'subjudul',
        'kategori',
        'deskripsi',
        'gambar',
        'link',
        'urutan',
    ];
}
