module.exports = {
    dev: {
        files: {
            '<%= build.theme.dir %>/style.css': '<%= src.scss %>/project.scss'
        },

        options: {
            style: 'expanded'
        }
    },

    build: {
        files: {
            '<%= build.theme.dir %>/style.css': '<%= src.scss %>/project.scss'
        },

        options: {
            style: 'compressed',
            sourcemap: false
        }
    },

    options: {
        unixNewlines: true
    }
};
