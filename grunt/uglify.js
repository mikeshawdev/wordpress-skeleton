var buildScripts = [

];

module.exports = {
    dev: {
        files: {
            '<%= build.theme.js %>/main.js': buildScripts
        },

        options: {
            mangle: false,
            compress: false,
            beautify: true
        }
    },

    build: {
        files: {
            '<%= build.theme.js %>/main.js': buildScripts
        },

        options: {
            mangle: true,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            }
        }
    }
};
