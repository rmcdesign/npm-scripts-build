// config
var scss_source = './src/scss/*.scss',
    css_dest = './public/css',
    js_src = './src/js',
    js_dest = './public/js',
    server_port = 3000;

// load node packages
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    watch = require( 'gulp-watch' ),
    gulpSass = require( 'gulp-sass' ),
    jshint = require( 'gulp-jshint' ),
    stylish = require( 'jshint-stylish' ),
    simplifyify = require('simplifyify'),
    browserSync = require('browser-sync').create();

// compile sass and apply PostCSS plugins
gulp.task('scss', function() {
    return gulp.src(scss_source)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(postcss([
            require('autoprefixer')({
                browsers: ['last 5 versions', '> 2%']
            }),
            require('cssnano'),
            require('css-mqpacker')
        ]))
        .pipe(gulp.dest(css_dest))
        .pipe(browserSync.stream());
});

gulp.task( 'watch', function() {
    browserSync.init({
        server: "./public",
        port: server_port
    });
    gulp.watch( scss_source, [ 'scss' ] )
    gulp.watch( js_src + '/**/*.js', [ 'scripts' ] );
    gulp.watch( './**/*.html', function() {
        browserSync.reload();
    });
} );

gulp.task( 'default', [ 'scss','scripts', 'watch' ], function() {
    console.log('running');
} );


gulp.task("lintjs", function() {
    gulp.src("./src/js/*.js")
        .pipe( jshint({
            'esversion':  6
        }))
        .pipe( jshint.reporter(stylish));
});

gulp.task("scripts",  ['lintjs'], function(done) {
    // simplifyify = browserify and uglify wrapper

    simplifyify(js_src + '/scripts.js',
        {
            outfile: js_dest,
            debug: true,
            //minify: true,
            bundle: true
        })
        .on("end", function() {
            // Finished successfully!
            browserSync.reload();
            done();
        })
        .on("error", function(err) {
            // Something went wrong
            done(err);
        });

});