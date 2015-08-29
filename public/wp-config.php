<?php

/*
|---------------------------------------------------------------------------
| WordPress Configuration file
|---------------------------------------------------------------------------
*/


/**
 * Bring in the Composer autoloader
 */
require_once __DIR__ . '/../vendor/autoload.php';


/**
 * Set our environment variables
 */
(new Dotenv\Dotenv(__DIR__ . '/..'))->load();


/**
 * Custom content directory
 */
define('WP_CONTENT_DIR', __DIR__ . '/app');
define('WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/app');


/**
 * Environment specific configuration
 */
define('DB_NAME', env('DB_NAME'));
define('DB_USER', env('DB_USER'));
define('DB_PASSWORD', env('DB_PASSWORD'));
define('DB_HOST', env('DB_HOST'));

define('WP_DEBUG', env('APP_DEBUG'));

if (WP_DEBUG === true) {
    $whoops = new \Whoops\Run;
    $whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
    $whoops->register();
}


/**
 * I highly doubt you'll want to change these
 */
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');


/**
 * Keys and salts, for security
 *
 * @url https://api.wordpress.org/secret-key/1.1/salt/
 */
define('AUTH_KEY', env('AUTH_KEY'));
define('SECURE_AUTH_KEY', env('SECURE_AUTH_KEY'));
define('LOGGED_IN_KEY', env('LOGGED_IN_KEY'));
define('NONCE_KEY', env('NONCE_KEY'));
define('AUTH_SALT', env('AUTH_SALT'));
define('SECURE_AUTH_SALT', env('SECURE_AUTH_SALT'));
define('LOGGED_IN_SALT', env('LOGGED_IN_SALT'));
define('NONCE_SALT', env('NONCE_SALT'));


/**
 * WordPress database table prefix
 */
$table_prefix = 'wp_';


/**
 * Define the path to the WordPress directory
 */
if ( ! defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/wp/');
}

require_once(ABSPATH . 'wp-settings.php');
