import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], function (cb) {
    runSequence('transpile', cb);
});
