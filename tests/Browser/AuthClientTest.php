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

class AuthClientTest extends DuskTestCase
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
                "tags" => ["Auth Client"],
                "name" => ("Auth Client Test"),
                "build" => env('BUILD_NAME')
            ]
        );
    }
*/
    /**
     * @throws \Throwable
     */
    public function testAuthClientCreation()
    {
        $this->markTestSkipped('Skipping Dusk tests temporarily');

        $this->browse(function ($browser) {
            //Login
            $browser->visit("/")
                ->assertSee("Username")
                ->type("#username", "admin")
                ->type("#password", "admin")
                ->press(".btn")
                ->assertMissing(".invalid-feedback")
                ->clickLink('Admin')
                ->waitUntilMissing(".vuetable-empty-result")
            //Add Auth Client
                ->press(".fa-key")
                ->press("#create_authclients")
                ->assertSee("Create An Auth-Client")
                ->type("#name", "foobar")
                ->type("#redirect", "https://foo.bar.com")
                ->press(".ml-2")
                ->pause(500)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText("foobar");
            //Edit Auth Client
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            $browser->pause(500)
                ->assertSee('Edit Auth Client')
                ->type("#name", "bar foo")
                ->type("#redirect", "https://bar.foo.com")
                ->press(".ml-2")
                ->pause(500)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText("bar foo");
            //Delete Auth Client
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor("#confirmModal")
                ->press("#confirm")
                ->pause(750)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertDontSee("bar foo");
        });

    }
}
