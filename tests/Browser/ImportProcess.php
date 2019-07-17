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

class ImportProcessTestCase extends DuskTestCase
{
/*
    protected function driver()
    {
        return RemoteWebDriver::create(
            'https://' . env('SAUCELABS_USERNAME') . ':' . env('SAUCELABS_ACCESS_KEY') . '@ondemand.saucelabs.com:443/wd/hub',
            [
                //'platform' => env('SAUCELABS_PLATFORM'),
                //'browserName' => env('SAUCELABS_BROWSER'),
                //'version'=> env('SAUCELABS_BROWSER_VERSION'),
                'tags' => ['Process', 'Upload', 'Import'],
                'name' => ('Import Process'),
                'build' => env('BUILD_NAME')
            ]
        );
    }
*/
    public function boot()  //This should allow Dusk to scroll to a selector that's not on the page, but I can't make it work
    {
        Browser::macro('scrollTo', function($selector) {
            $this->script("$(\"html, body\").animate({scrollTop: $(\"$selector\").offset().top}, 0);");
            return $this;
        });
    }

    /**
     * @throws \Throwable
     */
    public function testLogin()
    {
        $this->browse(function ($browser) {
            //Login
            $browser->visit('/processes')
                ->assertSee('Username')
                ->type('#username', 'admin')
                ->type('#password', 'admin')
                ->press('.btn')
                ->assertMissing('.invalid-feedback');
        });
    }

    public function testProcessPage()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitFor('.vuetable-empty-result',10)
                ->assertSee('No Data Available');
        });
    }

    public function testImportProcess()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->press('.fa-file-import')
                ->assertVisible('.fa-exclamation-circle')
                ->attach('input.d-none','tests/Browser/dusk_test.json')
                ->press('#card-footer-pre-import > button.btn.btn-secondary.ml-2') //Import Button
                ->waitFor('.alert-success',20)
                ->press('.close') //Close Alert Banner
                ->assertSee('Successfully imported Process Category')
                ->assertSee('Successfully imported Process')
                ->assertSee('Successfully imported Scripts')
                ->assertSee('Successfully imported Screens');
        });
    }

    public function testAssignPermissions()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Assign Start Event Start Event
            $browser->click('#assignable-table > tbody > tr:nth-child(1) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Users',5)
                ->click('#assignable-table > tbody > tr:nth-child(1) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(2) > span > span');
            $browser->pause(200);

            //Assign task Click Button
            $browser->click('#assignable-table > tbody > tr:nth-child(2) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Special Assignments',5)
                ->click('#assignable-table > tbody > tr:nth-child(2) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span > span');
            $browser->pause(200);

            //Run script RunScript
            $browser->click('#assignable-table > tbody > tr:nth-child(3) > td.assignable-entity > div > div.multiselect__select');
            $browser->pause(500)
                ->waitForText('admin admin',5);
            $browser->click('#assignable-table > tbody > tr:nth-child(3) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li.multiselect__element > span > span');
            $browser->pause(200);

            //Assign Cancel Request
            $browser->click('#assignable-table > tbody > tr:nth-child(4) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Users',5);
            $browser->click('#assignable-table > tbody > tr:nth-child(4) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span > span');
            $browser->pause(200);

            //Assign Edit Data
            $browser->click('#assignable-table > tbody > tr:nth-child(5) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Users',5);
            $browser->click('#assignable-table > tbody > tr:nth-child(5) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span > span');

            //Assert Choices & Save
            $browser
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(1) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(2) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(3) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(4) > td.assignable-entity > div > div.multiselect__tags > div.multiselect__tags-wrap > span > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(5) > td.assignable-entity > div > div.multiselect__tags > div.multiselect__tags-wrap > span > span', 'admin admin')
                ->click('#card-footer-post-import > div > button'); //Save Button
        });
    }

    public function testVerifyImport()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitFor('.vuetable-body',10)
                ->waitUntilMissing('.vuetable-empty-result',10)
                ->assertSee('DuskTest');
        });
    }

    public function testStartProcess()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->click('#navbar-request-button')
                ->waitFor('.process-list',10)
                ->assertSee('DuskTest')
                ->click('.fa-caret-square-right')
                ->waitFor('.lds-gear',10)
                ->waitUntilMissing('.lds-gear',10)
                ->assertSee('DuskTest')
                ->assertSeeIn('.bg-success','1');  //In Progress
        });
    }

    public function testRunProcess()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->click('.fa-caret-square-right')
                ->waitUntilMissing('.vuetable-empty-result',10)
                ->waitFor('.vuetable-slot',10)
                //Click Button
                ->assertSeeIn('#pending > div > div > table > tbody > tr > td:nth-child(1)','Click Button')
                ->clickLink('Click Button')
                ->waitFor('.form-group',10)
                ->assertVisible('.btn-dark')
                ->click('.btn-dark');
        });
    }

    public function testVerifyProcessFinished()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitFor('.lds-gear',10)
                ->waitUntilMissing('.lds-gear',10)
                ->assertSee('You don\'t currently have any tasks assigned to you')
                ->clickLink('Requests')
                ->waitUntilMissing('.lds-gear',10)
                ->assertSee('No Results')
                ->assertSeeIn('.bg-primary','1')  //Completed
                ->clickLink('Completed')
                ->waitUntilMissing('.lds-gear',10)
                ->assertSee('DuskTest')
                ->click('.fa-caret-square-right')
                ->assertSeeIn('#summary > table > tbody > tr:nth-child(2)','47');
        });
    }
}