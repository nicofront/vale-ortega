var gulp = require('gulp'), watch = require('gulp-watch');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var del = require('del');
var runSequence = require('run-sequence');
var fs = require('fs');
const rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
const minify = require('gulp-minify');
var php = require('gulp-connect-php');
var reload      = browserSync.reload;

sass.compiler = require('node-sass');

// Development Tasks
// -----------------

// Start browserSync server

gulp.task('browserSync',['php'], function() {
    browserSync.init({
        proxy:"localhost:5000", // You may need to change your port number, currently set to 5000 if already in use
        baseDir: "./",
        open:true,
        notify:false
    });
    gulp.watch("*.php").on("change", reload);
});

gulp.task('php', function(){
    php.server({
        base:'./',
        port:5000, // Port number is also set here
        keepalive:true
    });
});

// Minify Javascript files
gulp.task('compress', function() {
    gulp.src(['dev/js/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
});


// Compiles sass into Assets

// Autoprefix variables
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
    return gulp
        .src('dev/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sass({outputStyle: 'compressed'})) // Options: nested, expanded, compact, compressed
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Process and Optimizing Images
gulp.task('images', function() {
    return gulp.src('dev/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true,
        })))
        .pipe(gulp.dest('dist/img'))
});


// Watchers
gulp.task('watch', function() {
    gulp.watch('dev/sass/**/*.scss', ['sass']);
    gulp.watch('dev/js/**/*.js', ['compress']);
    gulp.watch('dev/*.html', browserSync.reload);
    gulp.watch('dev/images/**/*.+(png|jpg|jpeg|gif|svg)', ['images']);
});

gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// Copying fonts
gulp.task('fonts', function() {
    return gulp.src('dev/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

// Cleaning
gulp.task('clean', function () {
    del.sync(['./dist/**']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
    runSequence(['sass', 'images', 'fonts', 'browserSync', 'compress', 'clean'], 'watch',
        callback
    )
});