<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        return response()->json(Contact::orderBy('id', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'layanan' => 'required|string|max:255',
            'ideproyek' => 'required|string',
        ]);

        $contact = Contact::create($validated);
        return response()->json([
            'success' => true,
            'message' => 'Pesan berhasil dikirim!',
            'data' => $contact,
        ], 201);
    }

    public function show(Contact $contact)
    {
        return response()->json($contact);
    }

    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'layanan' => 'required|string|max:255',
            'ideproyek' => 'required|string',
            'dibaca' => 'boolean',
        ]);
        $contact->update($validated);
        return response()->json($contact);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json(['message' => 'Berhasil dihapus']);
    }
}