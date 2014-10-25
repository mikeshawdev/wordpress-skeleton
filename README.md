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

Note: if you have access to your base Apache configuration file, you should move all but the rewrite rules to that as .htaccess files slow down your server.

[h5bp]:http://html5boilerplate.com/
[h5bp.htaccess]:https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess
