<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    public function index()
    {
        return response()->json(Work::orderBy('urutan')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|string',
            'link' => 'nullable|string',
            'urutan' => 'integer',
        ]);
        return response()->json(Work::create($validated), 201);
    }

    public function show(Work $work)
    {
        return response()->json($work);
    }

    public function update(Request $request, Work $work)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|string',
            'link' => 'nullable|string',
            'urutan' => 'integer',
        ]);
        $work->update($validated);
        return response()->json($work);
    }

    public function destroy(Work $work)
    {
        $work->delete();
        return response()->json(['message' => 'Berhasil dihapus']);
    }
}