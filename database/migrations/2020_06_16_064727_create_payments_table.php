<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('contract_id');
            $table->string('payment_value');
            $table->string('value_date');
            $table->string('milestone');
            $table->unsignedBigInteger('res_user_id');
            $table->enum('status', ['ACTIVE', 'INACTIVE', 'PLANNED', 'EXECUTED', 'CANCELLED'])->default('PLANNED');
            $table->timestamps();

            $table->index('contract_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
