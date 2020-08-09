<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('description')->nullable();
            $table->string('acronym')->nullable();
            $table->string('address_a')->nullable();
            $table->string('address_b')->nullable();
            $table->string('city')->nullable();
            $table->integer('postcode')->nullable();
            $table->string('province')->nullable();
            $table->string('country_id')->nullable();
            $table->string('email')->nullable();
            $table->integer('regno')->nullable();
            $table->integer('taxno')->nullable();
            $table->string('naturalperson')->nullable();
            $table->timestamps();

            $table->index('acronym');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entities');
    }
}
