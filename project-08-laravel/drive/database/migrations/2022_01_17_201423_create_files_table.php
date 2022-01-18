<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    
    public function up()
    {
        Schema::create('files', function (Blueprint $table){
            $table->id();
            $table->text('uploader_email');
            $table->text('file_name');
            $table->text('description');
            $table->integer('download_count')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('files');
    }
}
