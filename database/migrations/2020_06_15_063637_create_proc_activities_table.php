<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProcActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proc_activities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('project_activity_id');
            $table->unsignedBigInteger('bl_owner_id');
            $table->unsignedBigInteger('proc_type_id');
            $table->unsignedBigInteger('proc_method_id');
            $table->integer('num_contracts');
            $table->decimal('est_contract_value', 13, 3);
            $table->date('proc_start');
            $table->date('proc_end');
            $table->unsignedBigInteger('assigned_user_id');
            $table->unsignedBigInteger('rsp_user_id');
            $table->unsignedBigInteger('entity_id');
            $table->text('notes');
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('task_id');
            $table->enum('status', ['ACTIVE', 'INACTIVE', 'PLANNED', 'EXECUTED', 'CANCELLED'])->default('ACTIVE');
            $table->timestamps();
            
            $table->index('project_activity_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proc_activities');
    }
}
