var scss_source = './src/scss/*.scss',
    css_dest = './public/css',
    js_src = './src/js',
    js_dest = './public/js/merged.js',
    concat_script_name = 'scripts.js'
    minify_suffix = '.min';

// Gulp.js configuration
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    watch = require( 'gulp-watch' ),
    gulpSass = require( 'gulp-sass' ),
    simplifyify = require('simplifyify'),
    browserSync = require('browser-sync').create();

// apply PostCSS plugins
gulp.task('scss', function() {
    return gulp.src(scss_source)
        .pipe(gulpSass())
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
        port: 3000,
    });
    gulp.watch( scss_source, [ 'scss' ] )
    gulp.watch( js_src + '/**/*.js', [ 'scripts' ] );
    browserSync.reload()
} );

gulp.task( 'default', [ 'scss','scripts', 'watch' ], function() {
    console.log('running');
} );

gulp.task("scripts", function(done) {
    simplifyify(js_src + '/scripts.js',
        {
            outfile: js_dest,
            debug: true,
            minify: true
        })
        .on("end", function() {
            // Finished successfully!
            browserSync.reload()
            done();
        })
        .on("error", function(err) {
            // Something went wrong
            done(err);
        });
});