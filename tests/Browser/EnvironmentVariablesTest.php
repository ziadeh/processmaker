<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Artisan;
use ProcessMaker\Models\User;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\Remote\RemoteWebDriver;

class EnvironmentVariablesCreationTest extends DuskTestCase
{
/*
    protected function driver()
    {
        return RemoteWebDriver::create(
            "https://" . env('SAUCELABS_USERNAME') . ":" . env('SAUCELABS_ACCESS_KEY') . "@ondemand.saucelabs.com:443/wd/hub",
            [
                "platform" => env('SAUCELABS_PLATFORM'),
                "browserName" => env('SAUCELABS_BROWSER'),
                "version"=> env('SAUCELABS_BROWSER_VERSION'),
                "tags" => ["Environment Variable"],
                "name" => ("Environment Variable Test"),
                "build" => env('BUILD_NAME')
            ]
        );
    }
*/
    /**
     * @throws \Throwable
     */
    public function testLogin()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Login
            $browser->visit("/processes/environment-variables");
            $browser->assertSee("Username")
                ->type("#username", "admin")
                ->type("#password", "admin")
                ->press(".btn")
                ->assertMissing(".invalid-feedback");
        });
    }

    public function testEnvironmentVariablesCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Add Environment Variable
            $browser->press("#create_envvar")
                ->assertVisible("#createEnvironmentVariable .ml-2")
                ->type("#name", "foobar")
                ->type("#description", "Bars of Foo.")
                ->type("#value", "foobar")
                ->press("#createEnvironmentVariable .ml-2")
                ->assertMissing(".invalid-feedback")
                ->waitForText("foobar",10);

        });
    }

    public function testEnvironmentVariablesEdit()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Edit Environment Variable
            $browser->press(".fa-pen-square")
                ->assertSee("Value")
                ->type("#name", "barfoo")
                ->type("#description", "Foos of Bar.")
                ->type("#value", "barfoo")
                ->press("#editEnvironmentVariable .ml-2")
                ->waitForText("barfoo",10);

        });
    }

    public function testEnvironmentVariablesDelete()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Delete Environment Variable
            $browser->press(".fa-trash-alt")
                ->waitFor(".modal-content",10)
                ->waitForText("Are you sure you want to delete the environment variable barfoo?",10)
                ->press("#confirm")
                ->waitFor(".vuetable-empty-result",10)
                ->assertDontSee("barfoo");
        });
    }
}