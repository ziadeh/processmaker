<?php

namespace Tests\Browser;

use Tests\Browser\Pages\AboutPage;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use ProcessMaker\Models\User;
use Illuminate\Support\Facades\Hash;
use Tests\Browser\Pages\RequestsPage;

class AboutTest extends DuskTestCase
{

    use DatabaseMigrations;

    private function setuser()
    {

        $user = User::where('username', 'testuser')->first();

        if (!$user) {

            $user = factory(User::class)->create([
                'username' => 'testuser',
                'password' => Hash::make('secret'),
                'status' => 'ACTIVE'
            ]);
        }

        return $user;
    }


    public function test_route_protected()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/requests')
                ->assertPathIs('/login');
        });
    }

    public function test_index()
    {
        $user = $this->setuser();

        $this->browse(function ($first) use ($user) {
            $first->loginAs($user)
                ->visit(new AboutPage())
                ->waitFor('#navbar')
                ->assertSee('All Rights Reserved')
                ->assertSee('Documentation');
            ;
        });
    }
}
