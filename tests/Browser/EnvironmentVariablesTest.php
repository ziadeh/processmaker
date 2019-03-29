<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Hash;
use ProcessMaker\Models\User;
use Facebook\WebDriver\WebDriverBy;
use Facebook\WebDriver\Remote\RemoteWebDriver;
use Artisan;

class EnvironmentVariablesCreationTest extends DuskTestCase
{
    /**
     * @throws \Throwable
     */
    public function testEnvironmentVariablesCreation()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');

        $this->browse(function ($browser) {
            //Login
            $browser->visit("/")
                ->assertSee("Username")
                ->type("#username", "admin")
                ->type("#password", "admin")
                ->press(".btn")
                ->assertMissing(".invalid-feedback")
                ->clickLink("Processes")
                ->press(".fa-cogs");
            //Add Environment Variable
            $browser->driver->findElement(WebDriverBy::xpath("//*[@id='process-variables-listing']/div[1]/div[2]/button"))
                ->click();  //The add button lacks a unique ID
            //    ->press(".btn-secondary") //We can use this line and remove the previous two once the add button is updated
            $browser->type("#name", "foobar")
                ->type("#description", "Bars of Foo.")
                ->type("#value", "foobar")
                ->press(".ml-2")
                ->pause(500)   //No choice here, we have to pause for either the error message or the success alert.
                ->assertMissing(".invalid-feedback")
                ->waitForText('foobar', 10);
            //Edit Environment Variable
            $browser->press(".fa-pen-square")
                ->assertSee('Value')
                ->type("#name", "barfoo")
                ->type("#description", "Foos of Bar.")
                ->type("#value", "barfoo")
                ->press(".ml-2")
                ->waitFor(".vuetable-empty-result")
                ->waitForText('barfoo', 10);
            //Delete Environment Variable
            $browser->press(".fa-trash-alt")
                ->waitFor('.modal-content', 10)
                ->waitForText('Are you sure you want to delete the environment variable barfoo?', 10)
                ->press("#confirm")
                ->waitFor(".vuetable-empty-result")
                ->assertDontSee("barfoo");
        });
    }
}
