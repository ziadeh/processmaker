<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class ScreensPage extends Page
{
    /**
     * Get the URL for the page.
     *
     * @return string
     */
    public function url()
    {
        return '/designer/screens';
    }

    /**
     * Assert that the browser is on the page.
     *
     * @param  Browser  $browser
     * @return void
     */
    public function assert(Browser $browser)
    {
        $browser->assertPathIs($this->url());
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array
     */
    public function elements()
    {
        return [
            '@name' => '#name',
            '@saveCategory' => '.modal-footer .btn.btn-secondary.ml-2',
            '@vuetable' => '.data-table',
        ];
    }
}
