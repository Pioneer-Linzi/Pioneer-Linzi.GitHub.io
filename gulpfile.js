var gulp = require('gulp');
var del = require('del');
connect = require('gulp-connect');

gulp.task('clean',function(){
    return del('./dist/');
});

gulp.task('blog',function(){
    gulp.src('./src/blog/dist/**/*.*').pipe(gulp.dest('./dist/'));
});

gulp.task('learnDemo',function(){
    gulp.src('./src/reactDemo/build/**/*.*').pipe(gulp.dest('./dist/'));
});

gulp.task('watch',function(){
    gulp.watch('./dist/**/*.*',['blog','learnDemo']);
}) 

gulp.task('connect',function(){
    connect.server({
        root:'./dist/',  
        ip:'0.0.0.0',
        livereload:true
    })
})

gulp.task('default',['clean','connect','watch'], function() {
    return gulp.start('blog','learnDemo');
});


