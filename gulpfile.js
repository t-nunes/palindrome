
    var gulp = require('gulp');
    var less = require('gulp-less');
    var minifyCSS = require('gulp-minify-css');
    var util = require('gulp-util');

    var watch = require('gulp-watch');

    gulp.task('less', function(){
        console.log(util.env.layout);
        return gulp.src('less/app.less')
            .pipe(less({
                paths: ['less/**/*.less']
            })).on('error', function(err){console.log(err.message); })
            .pipe(minifyCSS({keepBreaks:false}))
            .pipe(gulp.dest('css/'));
    });

    gulp.task('watch', function(){
        return gulp.watch('less/**/*.less', ['less']);
    });