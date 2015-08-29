module.exports = {
    options: {
        grepFiles: [
            '<%= build.theme.twigs %>/layouts/master.twig',
            '<%= build.theme.dir %>/functions/front-end.php'
        ]
    },

    css: {
        src: [
            '<%= build.theme.dir %>/style.css'
        ]
    },

    js: {
        src: [
            '<%= build.theme.js %>/main.js'
        ]
    }
};
