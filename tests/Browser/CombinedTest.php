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

class CombinedTestCase extends DuskTestCase
{
/*
    protected function driver()
    {
        return RemoteWebDriver::create(
            "https://" . env('SAUCELABS_USERNAME') . ":" . env('SAUCELABS_ACCESS_KEY') . "@ondemand.saucelabs.com:443/wd/hub",
            [
                //"platform" => env('SAUCELABS_PLATFORM'),
                //"browserName" => env('SAUCELABS_BROWSER'),
                //"version"=> env('SAUCELABS_BROWSER_VERSION'),
                "tags" => ["Auth Client", "Groups", "Category", "Users"],
                "name" => ("Combined Auth/Group/Category/User/EnvVar Test"),
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
        $this->browse(function ($browser) {
            //Login
            $browser->visit("/");
            if ($browser->waitFor('.phpdebugbar') == TRUE){   // Minimize the Laravel debug bar (if exists)
                $browser->press(".phpdebugbar-close-btn");
            }
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
            $browser->clickLink("Admin")
                ->waitUntilMissing(".vuetable-empty-result")
            //Add Auth Client
                ->press(".fa-key")
                ->press("#create_authclients")
                ->assertSee("Create An Auth-Client")
                ->assertVisible("#createEditAuthClient .ml-2")
                ->type("#name", "foobar")
                ->type("#redirect", "https://foo.bar.com")
                ->press("#createEditAuthClient .ml-2");
            $browser->waitUntilMissing("#createEditAuthClient")
                //->pause(500)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText("foobar");
            //Edit Auth Client
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            $browser->pause(500)
                ->assertSee("Edit Auth Client")
                ->assertVisible("#createEditAuthClient .ml-2")
                ->type("#name", "bar foo")
                ->type("#redirect", "https://bar.foo.com")
                ->press("#createEditAuthClient .ml-2");
            $browser->waitUntilMissing("#createEditAuthClient")
                //->pause(500)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText("bar foo");
            //Delete Auth Client
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor("#confirmModal")
                ->press("#confirm")
                ->waitUntilMissing("#createEditAuthClient")
                ->pause(750)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertDontSee("bar foo");
        });
    }

    public function testGroupCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Navigate
            $browser->clickLink("Admin")
                ->clickLink("Groups")
                ->waitUntilMissing(".vuetable-empty-result")
            //Add User Group
                ->press("#create_group")
                ->waitFor("#createGroup")
                ->pause(250)
                ->assertVisible("#createGroup .ml-2")
                ->type("#name", "!foobar")
                ->type("#description", "Group for Foo Bar")
                ->press("#createGroup .modal-dialog .modal-content .modal-footer .ml-2")
                ->pause(800)
                ->assertMissing(".invalid-feedback")
                ->waitFor("#nav-home-tab");
            //Add User to User Group
            $browser->click("#nav-profile-tab")
                ->waitFor(".btn-action")
                ->press(".btn-action")
                ->waitFor("#addUser")
                ->assertVisible("#addUser .ml-2")
                ->click(".multiselect__select")
                ->pause(2000);  //For some reason, the selector will not immediately populate like it does under normal usage. This is a work-around
            $browser->driver->findElement(WebDriverBy::xpath("//span[text()='admin admin']"))   //To ensure the correct user is chosen
                ->click();
            $browser->whenAvailable("#addUser", function ($modal) { //A funky work-around to let me click the save modal button 
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
                ->assertVisible("#nav-home .ml-2")
                ->type("#name", "!bar foo")
                ->type("#description", "Group for Bar Foo")
                ->select("select[name='status']", "INACTIVE")
                ->press("#nav-home .ml-2")
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

    public function testUserAddEditDelete()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Navigate
            $browser->clickLink("Admin")
                ->waitUntilMissing(".vuetable-empty-result")
            //Add User
                ->press("#addUserBtn")
                ->assertVisible("#addUser .ml-2")
                ->type("#username", "1user")
                ->type("#firstname", "user1")
                ->type("#lastname", "last1")
                ->select("select[name='size']", "ACTIVE")
                ->type("#email", "user1@hotmail.com")
                ->type("#password", "password123")
                ->type("#confpassword", "password123");
            $browser->whenAvailable("#addUser", function ($modal) { //A funky work-around to let me click the save modal button 
                $modal->press(".ml-2");
            })
                ->pause(750)   //No choice here, we have to pause here to wait for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitFor(".alert-dismissible")
                ->assertSee("successfully created");
            //Edit User
            $browser->clickLink("Admin")
                ->waitUntilMissing(".vuetable-empty-result")
                ->waitForText("1user")
                ->press(".fa-pen-square");
            //This has to happen because SauceLabs is not able to click the edit icon via XPath, I don't know why.
            /*$browser->driver->findElement(WebDriverBy::xpath("//*[@id='users-listing']/div[2]/div/div/table/tbody/tr[2]/td[7]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            */
            $browser->waitFor("#navbar-request-button") //when this loads, the whole page is loaded
                ->assertVisible("#nav-home .ml-2")
                ->type("#firstname","foo")
                ->type("#lastname","bar")
                ->press("#nav-home .ml-2")
                ->waitFor(".vuetable-body")
                ->waitUntilMissing(".vuetable-empty-result")
                ->assertSee("foo bar")
            //Delete User
                ->press(".fa-trash-alt");
            //This has to happen because SauceLabs is not able to click the edit icon via XPath, I don't know why.
            /*$browser->driver->findElement(WebDriverBy::xpath("//*[@id='users-listing']/div[2]/div/div/table/tbody/tr[2]/td[7]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            */
            $browser->waitFor("#confirmModal")
                ->press("#confirm")
                ->waitFor(".alertBox")
                ->assertSee("The user was deleted");
        });
    }

    public function testCategoryCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Navigate
            $browser->clickLink("Processes")
                ->clickLink("Categories")
            //Add Environment Variable
                ->press("#create_category")
                ->assertVisible("#createProcessCategory .ml-2")
                ->type("#name", "!It is a Foobar")
                ->press("#createProcessCategory .ml-2")
                ->waitFor("#editProcessCategory")
                ->clickLink("Categories")
                ->waitForText("!It is a Foobar");
            //Edit Environment Variable
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='process-categories-listing']/div[2]/div/table/tbody/tr[1]/td[6]/div/div/button[1]/i"))
                ->click();  //This is a really awful hacky workaround, because there is not a unique ID for each edit icon
            $browser->type("#name", "!It is a Barfoo")
                ->press("#editProcessCategory .ml-2")
                //->waitFor(".vuetable-empty-result")
                ->waitForText("!It is a Barfoo");
            //Delete Environment Variable
            $browser->press(".fa-trash-alt")
                ->waitFor(".modal-content")
                ->press("#confirm")
                ->waitFor(".vuetable-empty-result")
                ->assertDontSee("!It is a Barfoo");
        });
    }

    public function testEnvironmentVariablesCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
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