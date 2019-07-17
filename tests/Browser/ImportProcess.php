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
                ->attach('input.d-none','tests/Browser/qa_test-start_event.json')
                ->press('#card-footer-pre-import > button.btn.btn-secondary.ml-2') //Import Button
                ->waitFor('.alert-success',20)
                ->press('.close') //Close Alert Banner
                ->assertSee('Successfully imported Process Category')
                ->assertSee('Successfully imported Process')
                ->assertSee('Successfully imported Process')
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

            //Assign task Choose Your Path
            $browser->click('#assignable-table > tbody > tr:nth-child(2) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Special Assignments',5)
                ->click('#assignable-table > tbody > tr:nth-child(2) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span > span');
            $browser->pause(200);

            //Assign task Submit Numbers
            $browser->click('#assignable-table > tbody > tr:nth-child(3) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Special Assignments',5)
                ->click('#assignable-table > tbody > tr:nth-child(3) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span > span');
            $browser->pause(200);

            //Run script Timing and Scoring
            $browser->click('#assignable-table > tbody > tr:nth-child(4) > td.assignable-entity > div > div.multiselect__select');
            $browser->pause(500)
                ->waitForText('admin admin',5);
            $browser->click('#assignable-table > tbody > tr:nth-child(4) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li.multiselect__element > span > span');
            $browser->pause(200);

            //Run script Compound Interest Calculator - LUA
            $browser->click('#assignable-table > tbody > tr:nth-child(5) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('admin admin',5);
            $browser->click('#assignable-table > tbody > tr:nth-child(5) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li.multiselect__element > span > span');
            $browser->pause(200);

            //Assign Cancel Request
            $browser->click('#assignable-table > tbody > tr:nth-child(6) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Users',5);
            $browser->click('#assignable-table > tbody > tr:nth-child(6) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span > span');
            $browser->pause(200);

            //Assign Edit Data
            $browser->click('#assignable-table > tbody > tr:nth-child(7) > td.assignable-entity > div > div.multiselect__select')
                ->waitForText('Users',5);
            $browser->click('#assignable-table > tbody > tr:nth-child(7) > td.assignable-entity > div > div.multiselect__content-wrapper > ul > li:nth-child(5) > span > span');

            //Assert Choices & Save
            $browser
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(1) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(2) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(3) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(4) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(5) > td.assignable-entity > div > div.multiselect__tags > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(6) > td.assignable-entity > div > div.multiselect__tags > div.multiselect__tags-wrap > span > span', 'admin admin')
                ->assertSeeIn('#assignable-table > tbody > tr:nth-child(7) > td.assignable-entity > div > div.multiselect__tags > div.multiselect__tags-wrap > span > span', 'admin admin')
                ->click('#card-footer-post-import > div > button'); //Save Button
        });
    }

    public function testVerifyImport()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitFor('.vuetable-body',5)
                ->waitUntilMissing('.vuetable-empty-result',5)
                ->assertSee('QA Test-Start Event');
        });
    }
}