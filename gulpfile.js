var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var rename =require('gulp-rename');


gulp.task('clean',function(){
    return del('./dist/');
});

gulp.task('blog',['reactDemo'],function(){
        gulp.src('./src/blog/dist/**/*.*').pipe(gulp.dest('./dist/'));
    console.log('finish blog');
});


gulp.task('reactDemoHtml',function(){
    gulp.src('./src/reactDemo/build/index.html').pipe(rename('reactDemo.html')).pipe(gulp.dest('./dist/page/'));
});



gulp.task('reactDemo',['reactDemoHtml'],function(){
    gulp.src(['./src/reactDemo/build/**/*.*','!./src/reactDemo/build/index.html']).pipe(gulp.dest('./dist/'));
});

gulp.task('watch',function(){
    gulp.watch('./dist/**/*.*',['blog']);
}) 

gulp.task('connect',function(){
    connect.server({
        root:'./dist/',  
        ip:'0.0.0.0',
        livereload:true
    })
})

gulp.task('default',['clean'], function() {
    return gulp.start('blog','connect','watch');
});


