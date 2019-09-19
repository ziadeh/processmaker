<?php

namespace Tests\Feature;

use ProcessMaker\Mustache;
use Tests\TestCase;

class MustacheTest extends TestCase
{
    public function testMus()
    {
        $mustache = new Mustache();
        $mustache->addHelper('case', [
            'lower' => function ($value) {
                return strtolower((string)$value);
            },
            'upper' => function ($value) {
                return strtoupper((string)$value);
            },
        ]);
        $data = ['hola' => 'hola mundo'];
        //dump($mustache->render('{{%FILTERS}}{{hola|case.upper}}', $data));

        $mustache = new Mustache();
        /*$mustache->addHelper('number', [
            '2' => function ($value) {
                dump('..................');
                return strtolower((string)$value);
            },
            'upper' => function ($value) {
                return strtoupper((string)$value);
            },
        ]);*/
        $mustache->addHelper('case', [
            'lower' => function ($value) {
                return strtolower((string)$value);
            },
            'upper' => function ($value) {
                return strtoupper((string)$value);
            },
        ]);

        $mustache->addHelper('!!', function ($value) {
            return $value . '!!';
        });


        dump($mustache->getTokenizer()->scan('{{aaa|function:USD,3}}'));

        dump($mustache->render('{{%FILTERS}}{{hola|case.xxxx}}', $data));
        dump($mustache->render('{{%FILTERS}}{{hola|format.number:USD,3}}', $data));
//cadena=aaa|function:"USD",2,".",","
//aaa, function, USD, 3
//function = function
//parameters = USD, 3
//addHelper(cadena, function ($value) use($function, $parameters) {return $this->$function($value, ...$parameters);});

        $tpl = <<<TPL
{{%FILTERS}}
{{ greeting|format.number:USD,2 }}, {{ planet|case.upper | !! }}
{{ greeting|number:2 }}, {{ planet|case.upper | !! }}
TPL;

        dump($mustache->render($tpl, [
            'greeting' => 'Hello',
            'planet' => 'world',
        ]));
    }

    public function xxxx($value)
    {
        return 'veamos' . $value;
    }

    public function number($value, $precition)
    {
        return number_format($value, $precition);
    }

}
