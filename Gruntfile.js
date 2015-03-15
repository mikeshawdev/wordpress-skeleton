module.exports = function (grunt) {

    /**
     * Provides a nicer output for the time taken
     */
    require('time-grunt')(grunt);


    /**
     * Allows a quicker workflow by loading in Grunt tasks as they are needed,
     * rather than all at the beginning
     */
    require('jit-grunt')(grunt);


    /**
     * Setup some data to be passed to our tasks
     */
    var data = {
        'src': {
            'dir': 'src',
            'scss': 'src/scss',
            'js': 'src/js',
            'fonts': 'src/fonts',

            'bower': {
                'dir': 'bower_components'
            }
        },

        'plugins': {
            'src': 'plugins-src',
            'build': 'public/content/plugins'
        },

        'build': {
            'dir': 'public/content',
            'theme': {
                'dir': 'public/content/themes/{{ theme_name }}',
                'css': 'public/content/themes/{{ theme_name }}/css',
                'fonts': 'public/content/themes/{{ theme_name }}/fonts',
                'js': 'public/content/themes/{{ theme_name }}/js',
                'img': 'public/content/themes/{{ theme_name }}/img',
                'twigs': 'public/content/themes/{{ theme_name }}/twigs'
            }
        }
    };


    /**
     * Automatically get task config from files in the grunt directory, named
     * by the tasks they provide config for
     *
     * 1. As we're using jit-grunt, we don't need this plugin to load up the
     *    Grunt tasks
     */
    require("load-grunt-config")(grunt, {
        loadGruntTasks: false, /* 1 */
        data: data
    });
};
