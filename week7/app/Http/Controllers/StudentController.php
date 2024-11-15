<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        $students = Student::all();
        if ($students) {
            $data = [
                'message' => 'get all student',
                'data' => $students
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student is empty'
            ];
            return response()->json($data, 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "nama" => "required",
            "nim" => "numeric|required",
            "email" => "email|required",
            "jurusan" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "Validation Errors",
                "error" => $validator->errors()
            ], 422);
        }
        $student = Student::create($request->all());

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student,
        ];
        return response()->json($data, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];

            $student->update($input);

            $data = [
                'message' => 'Student is updated',
                'data' => $student
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data not found'
            ];
            return response()->json($data, 404);
        }
    }


    public function show($id)
    {
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'get data details',
                'data' => $student
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'data not found'
            ];
            return response()->json($data, 404);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $student = Student::find($id);
        if ($student) {
            $student->delete();

            $data = [
                'message' => 'student is deleted'
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'data not found'
            ];
            return response()->json($data, 404);
        }
    }
}
