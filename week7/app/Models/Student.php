<?php

namespace App\Models;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'nama',
        'nim',
        'email',
        'jurusan',
    ];
    public static function getAllStudents()
    {
        $students = DB::select('select * from students');
        return $students;
    }
}
