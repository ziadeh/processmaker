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

class UserAvatarTestCase extends DuskTestCase
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
                'tags' => ['Avatar', 'Upload'],
                'name' => ('User Avatar Upload Check'),
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

    public function testUserProfile()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->waitUntilMissing('.lds-gear',10)
                ->press('#userMenu')
                ->clickLink('Profile')
                ->waitFor('.card-body',10)
                ->assertSee('Contact Information');
        });
    }

    public function testUploadAvatar()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->press('#profileForm > div > div.col-4 > div > div:nth-child(1) > span > a > button');
            $browser->whenAvailable('#exampleModal', function ($modal) { //A funky work-around to let me click the save modal button 
                $modal->assertSee('Upload Avatar')
                    ->assertVisible('.no-avatar')
                    ->attach('input.custom-file-input','tests/Browser/processmaker.jpg')
                    ->press('div > div > div.modal-footer > div > button.btn.btn-secondary.ml-2'); //Continue Button
            });
            $browser->waitUntilMissing('#exampleModal',20)
                ->press('#profileForm > div > div.col-8 > div > div.text-right > button.btn.btn-secondary.ml-2') //Save Button
                ->assertVisible('.image'); //Make sure the image is actually displaying
        });
    }

    public function testVerifyAvatar()
    {
        //$this->markTestSkipped('Skipping Dusk tests temporarily');
        $this->browse(function ($browser) {
            $browser->press('#userMenu')
                ->clickLink('Profile')
                ->waitFor('.card-body',10)
                ->assertSee('Contact Information')
                ->assertVisible('#avatarMenu > a > img') //Assert the avatar loads on the user menu
                ->assertVisible('.image'); //Assert the avatar loads on the right side menu
        });
    }
}