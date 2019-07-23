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
    public function testLogin()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Login
            $browser->visit('admin/groups');
            $browser->assertSee('Username')
                ->type('#username', 'admin')
                ->type('#password', 'admin')
                ->press('.btn')
                ->assertMissing('.invalid-feedback');
        });
    }

    public function testGroupCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitUntilMissing('.vuetable-empty-result')
            //Add User Group
                ->press('#create_group')
                ->waitFor('#createGroup',10)
                ->pause(250)
                ->assertVisible('#createGroup .ml-2')
                ->type('#name', '!foobar')
                ->type('#description', 'Group for Foo Bar')
                ->press('#createGroup .modal-dialog .modal-content .modal-footer .ml-2')
                ->pause(800)
                ->assertMissing('.invalid-feedback')
                ->waitFor('#nav-home-tab',10);
        });
    }

    public function testGroupAddUser()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Add User to User Group
            $browser->click('#nav-profile-tab')
                ->waitFor('.btn-action',10)
                ->press('.btn-action')
                ->waitFor('#addUser',10)
                ->assertVisible('#addUser .ml-2')
                ->click('.multiselect__select')
                ->waitFor('#addUser .option__title',10) //Wait for the data to populate the multi-user select drop-down
                ->click('#addUser .option__title')
                ->waitUntilMissing('#addUser .multiselect--active',10) //Ensure the multi-user select drop-down is not displaying on the page 
                ->pause(500)   //Out of ideas why I can only proceed with a pause here.
                ->press('#addUser .ml-2')
                ->waitFor(".vuetable-empty-result",10)
                ->waitUntilMissing(".vuetable-empty-result",10)
                ->waitForText('admin admin',10);
        });
    }

    public function testGroupDeleteUser()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Edit User Group
            $browser->press('.fa-minus-circle')
                ->waitFor('#confirmModal',10)
                ->assertSee('Are you sure you want to delete admin admin?')
                ->press('#confirm')
                ->waitFor(".vuetable-empty-result",10)
                ->assertDontSee('admin admin');
        });
    }

    public function testGroupEdit()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Edit User Group
            $browser->press('#nav-home-tab')
                ->waitFor('#name',10)
                ->type('#name', '!bar foo')
                ->type('#description', 'Group for Bar Foo')
                ->select('select[name="status"]', 'INACTIVE')
                ->press('#nav-home .ml-2')
                ->assertMissing('.invalid-feedback')
                ->waitFor(".vuetable-empty-result",10)
                ->waitUntilMissing(".vuetable-empty-result",10)
                ->waitForText('!bar foo',10);
        });
    }

    public function testGroupDelete()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Delete User Group
            $browser->driver->findElement(WebDriverBy::xpath('//*[@id="listGroups"]/div[2]/div/div/table/tbody/tr[1]/td[7]/div/div/button[2]/i'))
                ->click();  //The delete button lacks a unique ID
            $browser->waitFor('#confirmModal')
                ->press('#confirm')
                ->waitFor('.alert-dismissible',10)
                ->waitUntilMissing('#listGroups > div.container-fluid > div > div > table > tbody > tr:nth-child(4)',10)
                ->assertDontSee('!bar foo');
        });
    }
}