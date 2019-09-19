<?php

namespace ProcessMaker;

use Mustache_Engine;

class Mustache extends Mustache_Engine
{
    const variableType = '_v';

    /**
     * @param string $tpl
     * @param array|mixed $values
     * @return string
     */
    public function render($tpl, $values = [])
    {

        $this->registerHelpers($tpl);
        return parent::render($tpl, $values);
    }

    /**
     * @param $tpl
     */
    private function registerHelpers($tpl)
    {
        $tokens = $this->getTokenizer()->scan($tpl);
        foreach ($tokens as $token) {
            $token['type'] === self::variableType ? $this->registerHelperFromToken($token['name']) : null;
        }
    }

    /**
     * @param $token
     */
    private function registerHelperFromToken($token)
    {
        [$variable, $function] = explode('|', $token, 2);
        $parameters = explode(':', trim($function), 2);
        if (count($parameters) === 2) {
            $function ? list($function, $parameters) = explode(':', $function, 2) : null;
            $tokens = explode('.', trim($function));
            if (count($tokens) === 2) {
                [$token, $option] = explode('.', trim($function));
                $parameters ? $parameters = json_decode('[' . $parameters . ']') : null;
                $variable = trim($variable);
                $function = trim($function);
                $this->registerHelperForVariable($token, $option, $variable, $option, $parameters);
            }

        }

    }

    /**
     * @param $token
     * @param $variable
     * @param $function
     * @param $parameters
     */
    private function registerHelperForVariable($token, $option, $variable, $function, $parameters)
    {
        $this->addHelper($token, [$option => function ($value) use ($variable, $function, $parameters) {
            return call_user_func($function, $value, ...$parameters);
        }]);
        dump($this->getHelpers());
    }
}
