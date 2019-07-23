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

class CategoryCreationTest extends DuskTestCase
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
                "tags" => ["Category"],
                "name" => ("Category Test"),
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
            $browser->visit("/processes/categories");
            $browser->assertSee("Username")
                ->type("#username", "admin")
                ->type("#password", "admin")
                ->press(".btn")
                ->assertMissing(".invalid-feedback");
        });
    }

    public function testCategoryCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitFor('#createProcessCategory',10)
                ->assertVisible('#createProcessCategory .ml-2')
                ->assertSee('Create Category')
                ->type('#name', 'Foobar')
                ->press('#createProcessCategory .ml-2')
                ->waitFor('#editProcessCategory',10)
                ->clickLink('Categories')
                ->waitForText('Foobar',10);
        });
    }

    public function testCategoryEdit()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Edit Environment Variable
            $browser->press('.fa-pen-square')
                ->waitFor('#editProcessCategory',10)
                ->assertSee('Category Name')
                ->type('#name', 'Barfoo')
                ->press('#editProcessCategory .ml-2')
                ->waitForText('Barfoo',10);
        });
    }

    public function testCategoryDelete()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            //Delete Environment Variable
            $browser->press('.fa-trash-alt')
                ->waitFor('#confirmModal',10)
                ->press('#confirm')
                ->waitFor('#createProcessCategory',10)
                ->visit('/processes/categories') //Reload the page, to make sure everything is cleared out
                ->waitFor('#createProcessCategory',10)
                ->assertDontSee('Barfoo');
        });
    }
}