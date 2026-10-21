<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('testimonis', function (Blueprint $table) {
        $table->id();
        $table->string('nama');                  // "Christopher Jonathan"
        $table->string('jabatan');               // "COO KOSKU"
        $table->text('isi_testimoni');           // teks testimoni
        $table->integer('rating')->default(5);   // 1-5 bintang
        $table->string('foto')->nullable();      // path foto
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonis');
    }
};
