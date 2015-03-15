module.exports = {
    src: {
        files: [
            {
                expand: true,
                cwd: '<%= src.dir %>',
                src: ['**/*.{php,twig,jpg,png}'],
                dest: '<%= build.theme.dir %>',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: '<%= src.js %>/vendor',
                src: ['modernizr.min.js'],
                dest: '<%= build.theme.js %>/vendor',
                filter: 'isFile'
            },
            {
                expand: true,
                cwd: '<%= src.fonts %>',
                src: ['*'],
                dest: '<%= build.theme.fonts %>',
                filter: 'isFile'
            }
        ]
    },

    plugins: {
        files: [
            {
                expand: true,
                cwd: '<%= plugins.src %>',
                src: ['**/*'],
                dest: '<%= plugins.build %>',
                filter: 'isFile'
            }
        ]
    }
};
