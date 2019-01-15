<?php
  
namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
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
        factory(User::class, 100)->create();
        $this->browse(function ($browser) {
            dd(\ProcessMaker\Models\User::all());
            $browser->visit("https://bpm4.local.processmaker.com/admin/users")
                    ->type("#username","admin")
                    ->type("#password","admin")
                    ->click(".btn-success")
                    ->assertMissing(".invalid-feedback");
            $browser->assertSeeIn("#users-listing", "1 - 10 of 101 Users")
                    ->click(".fa-angle-right")
                    ->pause(750)
                    ->assertSeeIn("#users-listing", "11 - 20 of 101 Users")
                    ->assertVisible(".fa-angle-left")
                    ->assertVisible(".fa-angle-right");
        });
    }
}