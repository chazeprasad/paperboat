import config from '../config';
import gulp from 'gulp';
import ts from 'gulp-typescript';
import merge from 'merge2';
import sourcemaps from 'gulp-sourcemaps';

// pull in the project TypeScript config
const tsProject = ts.createProject(config.tsConfig, {
    noImplicitAny: true,
    typescript: require('typescript')
});

gulp.task('transpile', () => {
    const tsResult = gulp.src(config.ts.src)
        .pipe(sourcemaps.init())
        .pipe(tsProject());

        return merge([
            tsResult.dts.pipe(gulp.dest(config.ts.type)),
            tsResult.js
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(config.ts.dest))
        ]);
});
