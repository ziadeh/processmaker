<?php

namespace Tests\Browser;

use Illuminate\Support\Facades\Artisan;
use ProcessMaker\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class LoginTest extends DuskTestCase
{
    /**
     * @throws \Throwable
     */
    public function testLogin()
    {
        Artisan::call('migrate:fresh', []);
        $user = factory(User::class)->create([
            'username' => 'admin',
            'password' => 'admin',
            'email' => 'any@gmail.com',
            'firstname' => 'admin',
            'lastname' => 'admin',
            'timezone' => null,
            'datetime_format' => null,
            'status' => 'ACTIVE',
            'is_administrator' => true,
        ]);
        factory(User::class, 99)->create();
        // Test login
        //app('debugbar')->disable();
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                ->assertSee('Username')
                ->type('#username', 'admin')
                ->type('#password', 'admin')
                ->press('.btn')
                ->clickLink('Admin')
                ->pause(5000)
                ->waitFor('.vuetable-body', 5)
                ->assertSee('1 - 10 of 100 Users')
                ->script("$('html, body').animate({ scrollTop: $('.table-hover').offset().top }, 0);")
                ->click('div.icon:nth-child(8)')
                ->pause(1000)
                ->assertSee('11 - 20 of 100 Users');
        });
    }
}
