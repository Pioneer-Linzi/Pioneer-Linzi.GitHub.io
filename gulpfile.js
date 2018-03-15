var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var rename =require('gulp-rename');


gulp.task('clean',function(){
    return del('./dist/');
});

gulp.task('blog',['reactDemo'],function(){
        gulp.src('./src/blog/dist/**/*.*').pipe(gulp.dest('../'));
    console.log('finish blog');
});


gulp.task('reactDemoHtml',function(){
    gulp.src('./src/reactDemo/build/index.html').pipe(rename('reactDemo.html')).pipe(gulp.dest('../page/'));
});



gulp.task('reactDemo',['reactDemoHtml'],function(){
    gulp.src(['./src/reactDemo/build/**/*.*','!./src/reactDemo/build/index.html']).pipe(gulp.dest('../'));
});

gulp.task('watch',function(){
    gulp.watch('./src/blog/*.*',['blog']);
    gulp.watch('./src/reactDemo',['blog']);
}) 

gulp.task('connect',function(){
    connect.server({
        root:'../',  
        ip:'0.0.0.0',
        livereload:true
    })
})

gulp.task('default',['connect','watch'], function() {
    return gulp.start('blog');
});


