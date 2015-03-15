module.exports = {
    all: {
        src: '<%= build.theme.dir %>/style.css'
    },

    options: {
        browsers: [
            'ie >= 8',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ]
    }
};
