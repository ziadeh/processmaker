<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGsParametersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gs_parameters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('proc_request_id');
            $table->unsignedBigInteger('entity_id');
            $table->string('currency_name');
            $table->date('submission_deadline');
            $table->date('deadline_delivery');
            $table->string('eligibility');
            $table->string('method_submission_offers');
            $table->string('origin_goods');
            $table->integer('origin_goods_value_based');
            $table->string('evaluation_criteria');
            $table->string('vat_exemption');
            $table->string('offer_validity');
            $table->string('payment_terms');
            $table->string('guarantees');
            $table->string('bid_guarantee_requirement');
            $table->string('financial_guarantee');
            $table->string('performance_guarantee_requirement');
            $table->string('competition_waiver');
            $table->string('competition_waiver_justification');

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
        Schema::dropIfExists('gs_parameters');
    }
}
