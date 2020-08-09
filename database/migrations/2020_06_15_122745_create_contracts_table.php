<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('proc_request_id');
            $table->unsignedBigInteger('contract_type_id');
            $table->string('vendor');
            $table->integer('value');
            $table->string('currency_name');
            $table->string('payment_type');
            $table->integer('frequency');
            $table->string('contracting_entity');
            $table->date('start_date');
            $table->date('end_date');
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
        Schema::dropIfExists('contracts');
    }
}
