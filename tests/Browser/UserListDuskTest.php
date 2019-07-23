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

class MultiUserTest extends DuskTestCase
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
                "tags" => ["Users", "User Listing"],
                "name" => ("101 User Test"),
                "build" => env('BUILD_NAME')
            ]
        );
    }
*/
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function test101UserTest()
    {
        Artisan::call('migrate:fresh', []);
        $user = factory(User::class)->create([
            'username' => 'admin',
            'password' => Hash::make('admin'),
            'email' => 'any@gmail.com',
            'firstname' => 'admin',
            'lastname' => 'admin',
            'timezone' => null,
            'datetime_format' => null,
            'status' => 'ACTIVE',
            'is_administrator' => true,
        ]);
        factory(User::class, 100)->create();

        $this->browse(function ($browser) {
            $browser->visit("/admin")
                    ->type("#username","admin")
                    ->type("#password","admin")
                    ->click(".btn-success")
                    ->assertMissing(".invalid-feedback")
                    ->waitUntilMissing('.vuetable-empty-result');
            $browser->assertSeeIn("#users-listing", "1 - 10 of 101 Users")
                    ->press(".data-table .fa-angle-right")
                    ->pause(750)
                    ->assertSeeIn("#users-listing", "11 - 20 of 101 Users")
                    ->assertVisible(".data-table .fa-angle-left")
                    ->assertVisible(".data-table .fa-angle-right");
        });
    }
}