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
    /**
     * @throws \Throwable
     */
    public function testAuthClientCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
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
                ->press(".fa-key");
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[1]/div/button"))
                ->click();  //The add button lacks a unique ID
            //    ->press(".btn-secondary") //We can use this line and remove the previous two once the add button is updated
            $browser->type("#name", "foobar")
                ->type("#redirect", "https://foo.bar.com")
                ->press(".ml-2")
                ->pause(500)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText('foobar', 10);
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
                ->waitForText('bar foo', 10);
            //Delete Auth Client
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='authClients']/div[2]/div[2]/div/table/tbody/tr[1]/td[5]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor('#confirmModal', 10)
                ->press("#confirm")
                ->pause(750)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertDontSee("bar foo");
        });
    }

    public function testCategoryCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Login
            $browser->clickLink("Processes")
                ->clickLink("Categories");
            //Add Environment Variable
            $browser->press(".btn-secondary")
                ->type("#name", "!It is a Foobar")
                ->press(".ml-2")
                ->waitFor("#editProcessCategory")
                ->clickLink("Categories")
                ->waitFor(".vuetable-empty-result")
                ->waitForText('!It is a Foobar', 10);
            //Edit Environment Variable
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='process-categories-listing']/div[2]/div/table/tbody/tr[1]/td[6]/div/div/button[1]/i"))
                ->click();  //This is a really awful hacky workaround, because there is not a unique ID for each edit icon
            $browser->type("#name", "!It is a Barfoo")
                ->press(".ml-2")
                ->waitFor(".vuetable-empty-result")
                ->waitForText('!It is a Barfoo', 10);
            //Delete Environment Variable
            $browser->press(".fa-trash-alt")
                ->waitFor('.modal-content', 10)
                ->press("#confirm")
                ->waitFor(".vuetable-empty-result")
                ->assertDontSee("!It is a Barfoo");
        });
    }

    public function testGroupCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Login
            $browser->clickLink('Admin')
                ->waitUntilMissing(".vuetable-empty-result");
            //Add User Group
            $browser->clickLink('Groups')
                ->press(".btn-secondary")
                ->waitFor('#createGroup', 10)
                ->pause(250)
                ->type("#name", "!foobar")
                ->type("#description", "Group for Foo Bar")
                ->press(".ml-2")
                ->pause(800)
                ->assertMissing(".invalid-feedback")
                ->waitFor('#nav-home-tab', 10);
            //Add User to User Group
            $browser->click("#nav-profile-tab")
                ->waitFor(".btn-action", 10)
                ->press(".btn-action")
                ->waitFor("#addUser", 10)
                ->click(".multiselect__select")
                ->pause(2000);  //For some reason, the selector will not immediately populate like it does under normal usage. This is a work-around
            $browser->driver->findElement(WebDriverBy::xpath("//span[text()='admin admin']"))   //To ensure the correct user is chosen
                ->click();
            $browser->whenAvailable(".modal-footer", function ($modal) { //A funky work-around to let me click the save modal button 
                $modal->press(".ml-2");
            });
            $browser->pause(1000)   //No choice.
                ->waitForText('admin admin', 10)
                ->press(".fa-users")
                ->waitUntilMissing(".vuetable-empty-result")
                ->waitForText('!foobar', 10);
            //Edit User Group
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='listGroups']/div[2]/div/div/table/tbody/tr[1]/td[7]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            $browser->assertSee('Edit !foobar')
                ->type("#name", "!bar foo")
                ->type("#description", "Group for Bar Foo")
                ->select('select[name="status"]', 'INACTIVE')
                ->press(".ml-2")
                ->pause(800)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText('!bar foo', 10);
            //Delete User Group
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='listGroups']/div[2]/div/div/table/tbody/tr[1]/td[7]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor('#confirmModal', 10)
                ->press("#confirm")
                ->waitFor('.alert-dismissible', 10)
                ->pause(700)
                ->assertDontSee("!bar foo");
        });
    }

    public function testUserAddEditDelete()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Login
            $browser->clickLink('Users')
                ->waitUntilMissing(".vuetable-empty-result");
            //Add User
            $browser->press("#addUserBtn")
                ->type("#username", "user1")
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
                ->waitFor(".alert-dismissible", 10)
                ->assertSee("successfully created");
            //Edit User
            $browser->clickLink("Admin")
                ->waitUntilMissing(".vuetable-empty-result");
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='users-listing']/div[2]/div/div/table/tbody/tr[2]/td[7]/div/div/button[1]/i"))
                ->click();  //The edit button lacks a unique ID
            $browser->waitFor("#navbar-request-button",10) //when this loads, the whole page is loaded
                ->type("#firstname","foo")
                ->type("#lastname","bar")
                ->press(".ml-2")
                ->waitFor(".vuetable-body", 10)
                ->waitUntilMissing(".vuetable-empty-result", 10)
                ->assertSee("foo bar");
            //Delete User
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='users-listing']/div[2]/div/div/table/tbody/tr[2]/td[7]/div/div/button[2]/i"))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor('#confirmModal', 10)
                ->press("#confirm")
                ->waitFor("#alertBox", 10)
                ->assertSee("The user was deleted");
        });

    }
}
