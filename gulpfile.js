var gulp = require('gulp');
var del = require('del');

gulp.task('clean',function(){
    return del('./dist/');
});

gulp.task('blog',function(){
    gulp.src('./src/blog/dist/index.html').pipe(gulp.dest('./dist/'));
});

gulp.task('default',['clean'], function() {
    return gulp.start('blog');
});


