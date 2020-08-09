<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBudgetLineOwnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budget_line_owners', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('budget_line_id');
            $table->unsignedBigInteger('user_id');
            $table->decimal('value', 13, 3);
            $table->decimal('spent', 13, 3);
            $table->decimal('commited', 13, 3);
            $table->decimal('balance', 13, 3);
            $table->decimal('available', 13, 3);

            $table->timestamps();

            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('budget_line_owners');
    }
}
