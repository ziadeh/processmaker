<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

/**
 * @todo Determine if we really need app delays anymore. We may be able to just query off of application 
 * status of PAUSED
 */
class CreateAppDelaysTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('app_delays', function(Blueprint $table)
		{
			$table->increments('id');
			$table->timestamps();
			$table->uuid('uid')->unique();
			// Application id points to the application and the application points to the process id
			$table->unsignedInteger('application_id');
			$table->integer('number')->default(0);
			$table->integer('thread_index')->default(0);
			$table->integer('delay_index')->default(0);

			// @todo Change this to an enum when types are determined
			$table->string('type')->default('');
			// @todo Change this to an enum when types are determined
			$table->string('status')->default('');
			$table->string('APP_NEXT_TASK', 32)->nullable()->default('0');
			$table->string('APP_DELEGATION_USER', 32)->nullable()->default('0');
			$table->string('APP_ENABLE_ACTION_USER', 32)->default('0');
			$table->dateTime('APP_ENABLE_ACTION_DATE');
			$table->string('APP_DISABLE_ACTION_USER', 32)->nullable()->default('0');
			$table->dateTime('APP_DISABLE_ACTION_DATE')->nullable();
			$table->dateTime('APP_AUTOMATIC_DISABLED_DATE')->nullable();
			$table->integer('APP_DELEGATION_USER_ID')->nullable()->default(0)->index('INDEX_USR_ID');
			$table->integer('PRO_ID')->nullable()->default(0)->index('INDEX_PRO_ID');
			$table->index(['PRO_UID','APP_UID','APP_THREAD_INDEX','APP_DEL_INDEX','APP_NEXT_TASK','APP_DELEGATION_USER','APP_DISABLE_ACTION_USER'], 'indexAppDelay');

			// Foreign key on application. If application deleted, we should delete any related delays
			$table->foreign('application_id')->references('id')->on('applications')->onDelete('cascade');
	
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('APP_DELAY');
	}

}
