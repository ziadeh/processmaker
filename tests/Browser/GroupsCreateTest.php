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

class GroupCreationTest extends DuskTestCase
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
                "tags" => ["Groups"],
                "name" => ("Group Test"),
                "build" => env('BUILD_NAME')
            ]
        );
    }
*/
    /**
     * @throws \Throwable
     */
    public function testGroupCreation()
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
                ->clickLink("Admin")
                ->waitUntilMissing(".vuetable-empty-result")
            //Add User Group
                ->press(".fa-users")
                ->press("#create_group")
                ->waitFor("#createGroup")
                ->pause(250)
                ->type("#name", "!foobar")
                ->type("#description", "Group for Foo Bar")
                ->press(".ml-2")
                ->pause(800)
                ->assertMissing(".invalid-feedback")
                ->waitFor("#nav-home-tab");
            //Add User to User Group
            $browser->click("#nav-profile-tab")
                ->waitFor(".btn-action")
                ->press(".btn-action")
                ->waitFor("#addUser")
                ->click(".multiselect__select")
                ->pause(2000);  //For some reason, the selector will not immediately populate like it does under normal usage. This is a work-around
            $browser->driver->findElement(WebDriverBy::xpath("//span[text()='admin admin']"))   //To ensure the correct user is chosen
                ->click();
            $browser->whenAvailable(".modal-footer", function ($modal) { //A funky work-around to let me click the save modal button 
                $modal->press(".ml-2");
            });
            $browser->pause(1000)   //No choice.
                ->waitForText("admin admin")
                ->press(".fa-users")
                ->waitUntilMissing(".vuetable-empty-result")
                ->waitForText("!foobar");
            //Edit User Group
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='listGroups']/div[2]/div/div/table/tbody/tr[1]/td[7]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            $browser->assertSee("Edit !foobar")
                ->type("#name", "!bar foo")
                ->type("#description", "Group for Bar Foo")
                ->select("select[name='status']", "INACTIVE")
                ->press(".ml-2")
                ->pause(800)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText("!bar foo");
            //Delete User Group
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='listGroups']/div[2]/div/div/table/tbody/tr[1]/td[7]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor("#confirmModal")
                ->press("#confirm")
                ->waitFor(".alert-dismissible")
                ->pause(700)
                ->assertDontSee("!bar foo");
        });

    }
}