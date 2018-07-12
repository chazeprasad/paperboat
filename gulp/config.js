var buildDir = './dist'

export default {
    sourceDir: './lib/',
    buildDir: buildDir,
    tsConfig: './tsconfig.json',
    ts: {
        src: 'lib/**/*.ts',
        type: buildDir + '/typings',
        dest: buildDir + '/'
    },
    init: function () {
        return this;
    }
}.init();
