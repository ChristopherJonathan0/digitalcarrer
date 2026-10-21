<?php

namespace App\Http\Controllers;

use App\Models\Portofolio;
use Illuminate\Http\Request;

class PortofolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Portofolio::orderBy('urutan')->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'subjudul' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'gambar' => 'required|string',
            'link' => 'nullable|string',
            'urutan' => 'integer',
        ]);

        $portofolio = Portofolio::create($validated);
        return response()->json($portofolio, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Portofolio $portofolio)
    {
        return response()->json($portofolio);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Portofolio $portofolio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Portofolio $portofolio)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'subjudul' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
            'gambar' => 'required|string',
            'link' => 'nullable|string',
            'urutan' => 'integer',
        ]);

        $portofolio->update($validated);
        return response()->json($portofolio);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portofolio $portofolio)
    {
        $portofolio->delete();
        return response()->json(['message' => 'Berhasil dihapus']);
    }
}
