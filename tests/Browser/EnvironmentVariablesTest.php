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
        $this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Login
            $browser->visit("/");
            if ($browser->assertVisible(".phpdebugbar") == TRUE){   // Minimize the Laravel debug bar (if exists)
                $browser->press(".phpdebugbar-close-btn");
            }
            $browser->assertSee("Username")
                ->type("#username", "admin")
                ->type("#password", "admin")
                ->press(".btn")
                ->assertMissing(".invalid-feedback");
        });
    }

    public function testEnvironmentVariablesCreation()
    {
        $this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Navigate
            $browser->clickLink("Processes")
                ->clickLink("Environment Variables")
            //Add Environment Variable
                ->press("#create_envvar") //We can use this line and remove the previous two once the add button is updated
                ->assertVisible("#createEnvironmentVariable .ml-2")
                ->type("#name", "foobar")
                ->type("#description", "Bars of Foo.")
                ->type("#value", "foobar")
                ->press("#createEnvironmentVariable .ml-2")
                ->pause(500)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText("foobar");
            //Edit Environment Variable
            $browser->press(".fa-pen-square")
                ->assertSee("Value")
                ->type("#name", "barfoo")
                ->type("#description", "Foos of Bar.")
                ->type("#value", "barfoo")
                ->press("#editEnvironmentVariable .ml-2")
                //->waitFor(".vuetable-empty-result")
                ->waitForText("barfoo");
            //Delete Environment Variable
            $browser->press(".fa-trash-alt")
                ->waitFor(".modal-content")
                ->waitForText("Are you sure you want to delete the environment variable barfoo?")
                ->press("#confirm")
                ->waitFor(".vuetable-empty-result")
                ->assertDontSee("barfoo");
        });
    }
}
