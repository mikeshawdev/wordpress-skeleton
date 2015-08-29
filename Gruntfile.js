module.exports = function (grunt)
{
    /**
     * Provides a nicer output for the time taken
     */
    require('time-grunt')(grunt);


    /**
     * Allows a quicker workflow by loading in Grunt tasks as they are needed,
     * rather than all at the beginning
     */
    require('jit-grunt')(grunt, {
        versioning: 'grunt-version-assets'
    });


    /**
     * This data is passed to the task configuration files
     */
    var data = {
        'src': {
            'theme': {
                'dir': 'src/{{ theme_name }}'
            },

            'bower': {
                'dir': 'bower_components'
            },

            'plugins': {
                'dir': 'src/plugins'
            }
        },

        'build': {
            'theme': {
                'dir': 'public/app/themes/{{ theme_name }}'
            },

            'plugins': {
                'dir': 'public/app/plugins'
            }
        }
    };

    data.src.theme.scss = data.src.theme.dir + '/scss';
    data.src.theme.js = data.src.theme.dir + '/js';
    data.src.theme.fonts = data.src.theme.dir + '/fonts';

    data.build.theme.css = data.build.theme.dir + '/css';
    data.build.theme.fonts = data.build.theme.dir + '/fonts';
    data.build.theme.js = data.build.theme.dir + '/js';
    data.build.theme.img = data.build.theme.dir + '/img';
    data.build.theme.twigs = data.build.theme.dir + '/twigs';


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
