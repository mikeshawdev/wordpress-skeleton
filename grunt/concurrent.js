module.exports = {
    first:   ['clean:all'],
    second:  ['sass:build', 'copy:src', 'copy:plugins'],
    third:   ['autoprefixer:all', 'eslint'],
    fourth:  ['uglify:build']
};
