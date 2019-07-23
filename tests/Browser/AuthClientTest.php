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
    public function testLogin()
    {
        $this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Login
            $browser->visit("/admin/auth-clients");
            $browser->assertSee("Username")
                ->type("#username", "admin")
                ->type("#password", "admin")
                ->press(".btn")
                ->assertMissing(".invalid-feedback");
        });
    }

    public function testAuthClientCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitUntilMissing(".vuetable-empty-result")
            //Add Auth Client
                ->press("#create_authclients")
                ->assertSee("Create An Auth-Client")
                ->type("#name", "foobar")
                ->type("#redirect", "https://foo.bar.com")
                ->press("#createEditAuthClient .ml-2")
                ->waitFor('#authClients > div.px-3.page-content > div.data-table > div > table > tbody > tr:nth-child(2)',10) //Hacky workaround to verify that a second auth client has appeared on the page
                ->waitForText("foobar",10);
        });
    }

    public function testAuthClientEdit()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Edit Auth Client
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            $browser->waitFor('#createEditAuthClient',10)
                ->assertSee('Edit Auth Client')
                ->type("#name", "bar foo")
                ->type("#redirect", "https://bar.foo.com")
                ->press("#createEditAuthClient .ml-2")
                ->waitUntilMissing('#createEditAuthClient',10) //Wait for modal to go away
                ->assertMissing(".invalid-feedback")
                ->waitForText("bar foo",10);
        });
    }

    public function testAuthClientDelete()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Delete Auth Client
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor("#confirmModal",10)
                ->press("#confirm")
                ->waitUntilMissing('#authClients > div.px-3.page-content > div.data-table > div > table > tbody > tr:nth-child(2)',10) //Hacky workaround, make sure there only one auth client displayed on the page
                ->assertDontSee("bar foo");
        });
    }
}