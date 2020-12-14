var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();


function copml(done) {
    gulp.src('./sass/**/*.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
    done();
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "../minimal_site_portfolio"
        },
        port: 3000
    });
}

function browserReload(done) {
    browserSync.reload()
    done()
}

function watchFiles() {
    gulp.watch('./sass/**/*', copml);
    gulp.watch('./**/*.html', browserReload);
}

gulp.task('default', gulp.parallel(sync, watchFiles));
gulp.task(sync)