<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drive extends Model
{
    protected $table = 'files';
    protected $fillable = ['file_name', 'description'];
}
