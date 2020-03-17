<?php

namespace ProcessMaker\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class Test implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    private $account;
    public function __construct()
    {
        //$this->account=$account;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // \Log::info($this->account->CompanyName);
        // return 0;
        // $email = new WelcomeEmail($this->account);
        // Mail::to('elver@shipede.com')->send($email);
        $url='http://etaintegration.shipedge.com/btnClientCaller.php?idStore=394&enterprise=Shopify&service=orders&server=demo1';
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $data = curl_exec($ch);
        curl_exec($ch);
        if (curl_errno($ch)) {
            /*$error_msg = curl_error($ch);
            Log::debug(json_encode($error_msg));*/
        }
        curl_close($ch);

        if (isset($error_msg)) {
            // TODO - Handle cURL error accordingly
        }

        //Log::debug(json_encode($data));

        Log::info('...................');
    }

}
