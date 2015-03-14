<?php

/*
|---------------------------------------------------------------------------
| Get the application started
|---------------------------------------------------------------------------
*/


/**
* Bring in the Composer autoloader
*/
require_once dirname(__FILE__) . '/../vendor/autoload.php';


/**
 * Bootstrap WordPress
 */
define('WP_USE_THEMES', true);

require dirname(__FILE__) . '/wp/wp-blog-header.php';
