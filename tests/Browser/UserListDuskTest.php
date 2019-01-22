<?php
  
namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use ProcessMaker\Models\User;

class loginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testExample()
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
            $browser->visit("https://bpm4.local.processmaker.com/admin/users")
                    ->type("#username","admin")
                    ->type("#password","admin")
                    ->click(".btn-success")
                    ->assertMissing(".invalid-feedback")
                    ->waitUntilMissing('.vuetable-empty-result');
            $browser->assertSeeIn("#users-listing", "1 - 10 of 101 Users")
                    ->click(".fa-angle-right")
                    ->pause(750)
                    ->assertSeeIn("#users-listing", "11 - 20 of 101 Users")
                    ->assertVisible(".fa-angle-left")
                    ->assertVisible(".fa-angle-right");
        });
    }
}