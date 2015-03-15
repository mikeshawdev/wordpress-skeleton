module.exports = {
    dev: {
        cwd: '<%= build.theme.dir %>',
        src: ['**/*.{twig,php,png,jpg,svg}', '!twig_cache/*'],
        syncWith: '<%= src.dir %>'
    }
};
