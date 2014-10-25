WordPress-Skeleton
==================

My base WordPress installation. This is meant as a simple starting point for a WordPress project. Feel free to grab the repo and use it for your projects :)

## Requirements

### Base
- composer
- vagrant
- puppet

### Puppet modules
- puppetlabs/apache
- puppetlabs/mysql
- example42/php


## .htaccess

I have to give credit to [HTML5 Boilerplate][h5bp] for the rules in my .htaccess file. Aside from the WordPress rewrite, all rules came from [here][h5bp.htaccess]. HTML5 Boilerplate is a brilliant resource, and you should definitely check it out!

<<<<<<< HEAD
## wp-config.php

My config file contains all that you would expect, with a few additions/changes.

### Custom content directory

As is the standard nowadays, WordPress lies within its own directory (public/wp) while the actual site content (what would be wp-content) lies within public/content.

### Development and production environments

It gets very tedious very quickly if you are using separate wp-config files for production/development environments. So, next in my config file is the switch statement that switches between setup details based on the server hostname.

I would recommend having your live details within the default section of the switch. Depending on your hosting provider, you may not always be 100% sure of the production server hostname so this is the most robust solution.
=======
Note: if you have access to your base Apache configuration file, you should move all but the rewrite rules to that as .htaccess files slow down your server.
>>>>>>> FETCH_HEAD

[h5bp]:http://html5boilerplate.com/
[h5bp.htaccess]:https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess
