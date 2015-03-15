module.exports = {
    all: ["<%= src.js %>/*.js"],

    options: {
        jshintrc: 'grunt/.jshintrc',
        reporter: require('jshint-stylish')
    }
};
