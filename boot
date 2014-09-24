#!/usr/bin/env bash

# Print templates
printStandard="%s\n"
printSuccess="\033[0;32m%s\033[0m\n"
printError="\033[0;31m%s\033[0m\n"

# Required programs for the script
requiredPrograms=( "composer" "npm" "grunt" "puppet" )

# Loop through our required programs, checking each is installed
for program in "${requiredPrograms[@]}"
do :
   if ! hash $program 2>/dev/null; then
        printf "$printError" "$program is not installed. Please install it."
        exit 1;
    fi
done

printf "$printSuccess" "All dependencies installed."


if [ -a "composer.json" ]
then
    printf "$printSuccess" "composer.json file exists! Running composer install."
    # composer install
fi


if [ -a "package.json" ]
then
    printf "$printSuccess" "package.json file exists! Running npm install."
    # npm install
fi


if [ -a "Gruntfile.js" ]
then
    printf "$printSuccess" "Gruntfile.js file exists! Running grunt watch."
    # grunt watch
fi

exit 0;
