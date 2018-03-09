var gulp = require('gulp');
var del = require('del')

gulp.task('clean',function(){
    return del('./dist/');
});

gulp.task('blog',function(){
    gulp.src('./src/blog/dist/**/*.*').pipe(gulp.dest('./dist/'));
});

gulp.task('learnDemo',function(){
    gulp.src('./src/reactDemo/build/**/*.*').pipe(gulp.dest('./dist/reactDemo/'));
});
gulp.task('default',['clean'], function() {
    return gulp.start('blog','learnDemo');
});


