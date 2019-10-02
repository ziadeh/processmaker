<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use ProcessMaker\Models\Process;
use ProcessMaker\Models\Screen;
use ProcessMaker\Models\Script;

class RemoveCategoryIdColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('processes', function (Blueprint $table) {
            $table->dropForeign(['process_category_id']);
            $table->dropColumn('process_category_id');
        });
        Schema::table('screens', function (Blueprint $table) {
            $table->dropForeign(['screen_category_id']);
            $table->dropColumn('screen_category_id');
        });
        Schema::table('scripts', function (Blueprint $table) {
            $table->dropColumn('script_category_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('processes', function (Blueprint $table) {
            $table->unsignedInteger('process_category_id')->nullable();
            $table->foreign('process_category_id')->references('id')->on('process_categories')->onDelete('cascade');
        });
        Schema::table('screens', function (Blueprint $table) {
            $table->dropColumn('screen_category_id');
            $table->unsignedInteger('screen_category_id')->nullable();
            $table->foreign('screen_category_id')->references('id')->on('screen_categories')->onDelete('cascade');
        });
        Schema::table('scripts', function (Blueprint $table) {
            $table->dropColumn('script_category_id');
            $table->unsignedInteger('script_category_id')->nullable();
            $table->foreign('script_category_id')->references('id')->on('script_categories')->onDelete('cascade');
        });
        foreach(Process::all() as $process) {
            $process->screen_category_id = $process->categories()->first()->id;
        }
        foreach(Screen::all() as $screen) {
            $screen->process_category_id = $process->categories()->first()->id;
        }
        foreach(Script::all() as $script) {
            $script->script_category_id = $process->categories()->first()->id;
        }
    }
}
