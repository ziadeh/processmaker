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

class RequestsNoResultTestCase extends DuskTestCase
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
                'tags' => ['Requests', 'API'],
                'name' => ('Requests API Page Check'),
                'build' => env('BUILD_NAME')
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
            $browser->visit('/')
                ->assertSee('Username')
                ->type('#username', 'admin')
                ->type('#password', 'admin')
                ->press('.btn')
                ->assertMissing('.invalid-feedback');
        });
    }

    public function testMyRequests()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitUntilMissing('.lds-gear',20)  //Wait for animated gear icon to go away
                ->assertMissing('.fa-exclamation-triangle') //Assert no error triangle
                ->assertMissing('.alert-wrapper')   //Assert no warning banner appears
                ->assertDontSee('timeout of 5000ms exceeded')   //Assert this text does not appear
                ->assertDontSee('Error: timeout of 5000ms exceeded')    //Assert this text does not appear
                ->assertDontSee('No Data Available')
                ->assertSee('No Results');
        });
    }

    public function testInProgress()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->driver->findElement(WebDriverBy::xpath('//h6[contains(.,"In Progress")]'))
                ->click();  //The link lacks a unique ID
            $browser->waitUntilMissing('.lds-gear',20)
                ->assertMissing('.fa-exclamation-triangle')
                ->assertMissing('.alert-wrapper')
                ->assertDontSee('timeout of 5000ms exceeded')
                ->assertDontSee('Error: timeout of 5000ms exceeded')
                ->assertDontSee('No Data Available')
                ->assertSee('No Results');
        });
    }

    public function testCompleted()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->driver->findElement(WebDriverBy::xpath('//h6[contains(.,"Completed")]'))
                ->click();  //The link lacks a unique ID
            $browser->waitUntilMissing('.lds-gear',20)
                ->assertMissing('.fa-exclamation-triangle')
                ->assertMissing('.alert-wrapper')
                ->assertDontSee('timeout of 5000ms exceeded')
                ->assertDontSee('Error: timeout of 5000ms exceeded')
                ->assertDontSee('No Data Available')
                ->assertSee('No Results');
        });
    }

    public function testAllRequests()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->driver->findElement(WebDriverBy::xpath('//h6[contains(.,"All Requests")]'))
                ->click();  //The link lacks a unique ID
            $browser->waitUntilMissing('.lds-gear',20)
                ->assertMissing('.fa-exclamation-triangle')
                ->assertMissing('.alert-wrapper')
                ->assertDontSee('timeout of 5000ms exceeded')
                ->assertDontSee('Error: timeout of 5000ms exceeded')
                ->assertDontSee('No Data Available')
                ->assertSee('No Results');
        });
    }
}