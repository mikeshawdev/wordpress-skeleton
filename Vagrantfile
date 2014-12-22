# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/trusty32"
  config.vm.box_url = "https://vagrantcloud.com/ubuntu/boxes/trusty32"

  # The hostname for the VM
  config.vm.hostname = "ubuntu"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.33.10"

  # VirtualBox configuration
  config.vm.provider "virtualbox" do |vb|

    # Up the memory on our VM
    vb.memory = 1024

    # Use the NAT DNS resolver
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]

  end

  # Set the owners/permissions for the shared folders on the VM
  config.vm.synced_folder "./", "/vagrant", id: "vagrant-root",
    owner: "vagrant",
    group: "www-data",
    mount_options: ["dmode=775,fmode=664"]

  # Enable provisioning with Puppet stand alone.
  config.vm.provision "puppet" do |puppet|

    # Our paths
    puppet.manifest_file  = "site.pp"
    puppet.module_path = "modules"

    # Let's get some more information while provisioning
    puppet.options = "--verbose --debug"

  end

end
