#######################
# Set path and update #
#######################

Exec { path => "/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin" }
exec { "apt-get update": }





################
# Setup Apache #
################

class { 'apache':
    default_vhost => false,
    mpm_module => 'prefork'
}

# VirtualHost details
apache::vhost { 'wordpress.dev':
  port    => '80',
  docroot => '/vagrant/public',
  docroot_owner => 'vagrant',
  docroot_group => 'www-data',
  override => 'All',
  options => ['-Indexes','+FollowSymLinks','+MultiViews'],
  directoryindex => 'index.php index.html'
}

# Install extra modules
apache::mod { 'rewrite': }
include apache::mod::php





###############################
# Install and configure MySQL #
###############################

class { '::mysql::server':
  root_password => 'root'
}

mysql_database { 'wordpress_dev':
  ensure  => 'present',
  charset => 'utf8'
}




#############################
# Install and configure PHP #
#############################

class { 'php': }

php::module { "cli": }
php::module { "mcrypt": }
php::module { "curl": }
php::module { "mysql": }
php::module { "dev": }
php::module { "pear":
  module_prefix => "php-"
}
php::module { "gd": }
