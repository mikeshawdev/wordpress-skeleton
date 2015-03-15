module.exports = {
    sass: {
        files: ["<%= src.scss %>/**/*"],
        tasks: ["sass:dev", "autoprefixer:all", "notify:sass"]
    },

    scripts: {
        files: ["<%= src.js %>/*.js"],
        tasks: ["jshint:all", "uglify:dev", "notify:scripts"]
    },

    copy: {
        files: [
            "<%= src.dir %>/**/*.{twig,php,jpg,png}",
            "<%= src.js %>/vendor/*.js"
        ],
        tasks: ["newer:copy:src", "notify:copy"]
    },

    plugins: {
        files: ["<%= plugins.src %>/**/*"],
        tasks: ["newer:copy:plugins", "notify:plugins"]
    },

    remove: {
        files: ['<%= src.dir %>/**/*.{twig,php,png,jpg,svg}'],
        tasks: ['delete_sync:dev', 'notify:deleted'],
        options: {
            event: ['deleted']
        }
    },

    configFiles: {
        files: ["Gruntfile.js", "grunt/*"],
        tasks: ["notify:config"],
        options: {
            reload: true
        }
    },

    options: {
        spawn: false,
        interrupt: false
    }
};
