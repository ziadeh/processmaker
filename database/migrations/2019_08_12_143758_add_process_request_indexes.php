<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddProcessRequestIndexes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('process_requests', function (Blueprint $table) {
            $table->index(['user_id', 'status']);
            $table->index(['status']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('process_requests', function (Blueprint $table) {
            $table->dropIndex('process_requests_user_id_status_index');
            $table->dropIndex('process_requests_status_index');
        });
    }
}
