var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var rename =require('gulp-rename');
let child_process = require('child_process');


gulp.task('clean',function(){
    return del(['./page','./static/','./index.html','./mainfest.json','service-worker.js','asset-manifest.json']);
});

gulp.task('blog',['reactDemo'],function(){
        gulp.src('./src/blog/dist/**/*.*').pipe(gulp.dest('./'));
    console.log('finish blog');
});


gulp.task('reactDemoHtml',function(){
    gulp.src('./src/reactDemo/build/index.html').pipe(rename('reactDemo.html')).pipe(gulp.dest('./page/'));
});



gulp.task('reactDemo',['reactDemoHtml'],function(){
    gulp.src(['./src/reactDemo/build/**/*.*','!./src/reactDemo/build/index.html']).pipe(gulp.dest('./'));
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


gulp.task('blogBuild',['clean'],function(cb){
    try{

        child_process.exec('cd  src/blog && npm run build ', { shell: '/bin/sh' }, function (error, stdout, stderr) {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }catch (e) {
        console.log(e);
    } finally {
        console.log('----------------------------------------------------end build------------------------------------------------------');
        cb();
    }

});

gulp.task('reactDemoBuild',function(cb){
    try{
        child_process.exec('cd  src/reactdemo && npm run build ', { shell: '/bin/sh' }, function (error, stdout, stderr) {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }catch (e) {
        console.log(e);
    } finally {
        console.log('----------------------------------------------------end build------------------------------------------------------');
        cb();
    }
});


gulp.task('build',['blogBuild','reactDemoBuild'],function(){
    gulp.start('blog');
});

