<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proc_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('proc_activity_id');
            $table->integer('num_contracts');
            $table->decimal('est_contract', 13, 3);
            $table->timestamps();

            $table->index('proc_activity_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proc_requests');
    }
}
