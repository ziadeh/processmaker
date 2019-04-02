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

class UserAddEditDeleteTest extends DuskTestCase
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
                "tags" => ["Auth Client", "Groups", "Category", "Users"],
                "name" => ("Combined Auth/Group/Category/User Test"),
                "build" => env('BUILD_NAME')
            ]
        );
    }
*/
    /**
     * @throws \Throwable
     */
    public function testUserAddEditDelete()
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
                ->waitUntilMissing(".vuetable-empty-result");
            //Add User
            $browser->press("#addUserBtn")
                ->type("#username", "1user")
                ->type("#firstname", "user1")
                ->type("#lastname", "last1")
                ->select("select[name='size']", "ACTIVE")
                ->type("#email", "user1@hotmail.com")
                ->type("#password", "password123")
                ->type("#confpassword", "password123");
            $browser->whenAvailable(".modal-footer", function ($modal) { //A funky work-around to let me click the save modal button 
                $modal->press(".ml-2");
            })
                ->pause(750)   //No choice here, we have to pause here to wait for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitFor(".alert-dismissible")
                ->assertSee("successfully created");
            //Edit User
            $browser->clickLink("Admin")
                ->waitUntilMissing(".vuetable-empty-result")
                ->waitForText('1user')
                ->press(".fa-pen-square");
            //This has to happen because SauceLabs is not able to click the edit icon via XPath, I don't know why.
            /*$browser->driver->findElement(WebDriverBy::xpath("//*[@id='users-listing']/div[2]/div/div/table/tbody/tr[2]/td[7]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            */
            $browser->waitFor("#navbar-request-button") //when this loads, the whole page is loaded
                ->type("#firstname","foo")
                ->type("#lastname","bar")
                ->press(".ml-2")
                ->waitFor(".vuetable-body")
                ->waitUntilMissing(".vuetable-empty-result")
                ->assertSee("foo bar")
            //Delete User
                ->press(".fa-trash-alt");
            //This has to happen because SauceLabs is not able to click the edit icon via XPath, I don't know why.
            /*$browser->driver->findElement(WebDriverBy::xpath("//*[@id='users-listing']/div[2]/div/div/table/tbody/tr[2]/td[7]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            */
            $browser->waitFor('#confirmModal')
                ->press("#confirm")
                ->waitFor("#alertBox")
                ->assertSee("The user was deleted");
        });

    }
}