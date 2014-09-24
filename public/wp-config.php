<?php

    /*
    |---------------------------------------------------------------------------
    | WordPress Configuration file
    |---------------------------------------------------------------------------
    */

    /**
     * Custom content directory
     */

    define('WP_CONTENT_DIR', dirname(__FILE__) . '/content');
    define('WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/content');


    /**
     * Environment specific details
     *
     * Based on the hostname of the server
     */

    switch (gethostname()) {

        # Development details
        case 'ubuntu':
            define('DB_NAME', 'wordpress_dev');
            define('DB_USER', 'root');
            define('DB_PASSWORD', 'root');
            define('DB_HOST', 'localhost');

            define('WP_DEBUG', true);
            break;

        # Production details
        default:
            # Settings go here
            break;
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
     * Bootstrap WordPress
     */

    if (!defined('ABSPATH')) {
        define('ABSPATH', dirname(__FILE__) . '/wp/');
    }

    require_once(ABSPATH . 'wp-settings.php');
