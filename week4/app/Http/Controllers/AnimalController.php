<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public array $animals = [
        'ayam',
        'kucing',
        'burung',
        'ikan',
        'semut'
    ];

    public function index()
    {
        $animals = $this->animals;
        $response = array_map(function($animals, $index){
            return [
                'id' => $index,
                'name' => $animals,
            ];
        }, $animals, array_keys($animals));
        return response()->json($response);

    }

    public function store(request $request)
    {
        $data = $request->name;
        $this->animals[] = $data;

        array_push($this->animals, $data);
        return $this->index();
    }

    public function update(Request $request, int $id)
    {
        $this->animals[$id] = $request->name;
        return $this->index();
    }

    public function destroy(int $id)
    {
        unset($this->animals[$id]);
        return $this->index();
    }
}

