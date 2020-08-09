<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proc_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('proc_request_id');
            $table->string('item');
            $table->integer('quantity');
            $table->text('specs');
            $table->string('file_id');
            $table->timestamps();
            
            $table->index('proc_request_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proc_items');
    }
}
