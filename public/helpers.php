<?php

/*
|--------------------------------------------------------------------------
| Global helper functions
|--------------------------------------------------------------------------
*/

if ( ! function_exists('env')) {
    /**
     * Gets the value of an environment variable. Supports boolean, empty and
     * null
     *
     * @param string $key
     * @param mixed $default
     *
     * @return mixed
     */
    function env($key, $default = null)
    {
        $value = getenv($key);

        if ($value === false) {
            return $default instanceof Closure ? $default() : $default;
        }

        switch (strtolower($value)) {
            case 'true':
                return true;

            case 'false':
                return false;

            case 'null':
                return null;
        }

        return $value;
    }
}
