var gulp = require('gulp');

gulp.task('clean',function(){
    return del('./dist/');
});

gulp.task('blog',function(){
    gulp.src('./src/blog/dist/index.html').pipe(gulp.dest('./dist/index.html'));
});

gulp.task('default', function() {
    return gulp.start('blog');
});


