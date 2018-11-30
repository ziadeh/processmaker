<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class LoginTest extends DuskTestCase
{
    /**
     * @throws \Throwable
     */
    public function testLogin()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')
                    ->assertSee('Username');
        });
    }
}
