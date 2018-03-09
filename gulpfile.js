var gulp = require('gulp');
var del = require('del')

gulp.task('clean',function(){
    return del('./dist/');
});

gulp.task('blog',function(){
    gulp.src('./src/blog/dist/**/*.*').pipe(gulp.dest('./dist/'));
});

gulp.task('learnDemoHtml',function(){
    gulp.src('./src/reactDemo/build/*.html').pipe(gulp.dest('./dist/reactDemo/reactDemo.html'));
});


gulp.task('static',function(){
    gulp.src('./src/*/build/**/*.js');
});

gulp.task('default',['clean'], function() {
    return gulp.start('blog','learnDemo');
});


