<?php

/*
|---------------------------------------------------------------------------
| WordPress Configuration file
|---------------------------------------------------------------------------
*/


/**
 * Bring in the Composer autoloader
 */
require_once dirname(__FILE__) . '/../vendor/autoload.php';


/**
 * Set our environment variables
 */
Dotenv::load(dirname(__FILE__) . '/..');

/**
 * Custom content directory
 */

define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');
define('WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/content');


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
define('AUTH_KEY',         'unique_phrase_here');
define('SECURE_AUTH_KEY',  'unique_phrase_here');
define('LOGGED_IN_KEY',    'unique_phrase_here');
define('NONCE_KEY',        'unique_phrase_here');
define('AUTH_SALT',        'unique_phrase_here');
define('SECURE_AUTH_SALT', 'unique_phrase_here');
define('LOGGED_IN_SALT',   'unique_phrase_here');
define('NONCE_SALT',       'unique_phrase_here');


/**
 * WordPress database table prefix
 */
$table_prefix  = 'wp_';


/**
 * WordPress localized language, defaults to American English.
 */
define('WPLANG', '');


/**
 * Define the path to the WordPress directory
 */
if ( ! defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/wp/');
}

require_once(ABSPATH . 'wp-settings.php');
