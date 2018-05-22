<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDelegationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('delegations', function(Blueprint $table)
		{
			$table->increments('id');
			$table->timestamps();
			$table->unsignedInteger('application_id');
			$table->integer('index')->default(0);
			$table->integer('previous')->nullable();
			$table->integer('last_index')->nullable();
			$table->unsignedInteger('task_id');
			// @todo Add additional delegation types
			$table->enum('type', ['NORMAL'])->default('NORMAL');
			$table->integer('thread')->default(0);
			// @todo Add additional thread status types
			$table->enum('thread_status', ['OPEN'])->default('OPEN');
			// @todo Determine why this priority is set to a string? Was it a uid pointing to something?
			$table->string('priority')->default('3');
			$table->dateTime('init_date')->nullable();
			$table->dateTime('finish_date')->nullable();
			$table->dateTime('due_date')->nullable();
			$table->dateTime('risk_date')->nullable();
			$table->float('duration', 10, 0)->nullable()->default(0);
			$table->float('queue_duration', 10, 0)->nullable()->default(0);
			$table->float('delay_duration', 10, 0)->nullable()->default(0);
			$table->boolean('started')->default(false);
			$table->boolean('finished')->default(false);
			$table->boolean('delayed')->default(false);

			// @todo What the heck is overdue percentage represented for?  Can this instead be calculated?
			$table->float('overdue_percentage', 10, 0)->default(0);
			$table->unsignedInteger('user_id')->nullable()->default(null)->index('idx_user_id');
			$table->index(['application_id','index']);

			// Foreign key on application. If application deleted, we should delete any related delegations
			$table->foreign('application_id')->references('id')->on('applications')->onDelete('cascade');

			// Foreign key on task. If task is deleted, we should delete any related delegations
			$table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');

			// Foreign key on user. If a user is deleted, we should set this to null, to have this delegation unassigned
			$table->foreign('user_id')->references('id')->on('users')->onDelete('set null');


		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('APP_DELEGATION');
	}

}
