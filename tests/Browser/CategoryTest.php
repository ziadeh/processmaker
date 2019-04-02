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
    public function testCategoryCreation()
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
                ->waitFor(".vuetable-empty-result")
                ->clickLink("Processes")
                ->press(".fa-sitemap");
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
}
