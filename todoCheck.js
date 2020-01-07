function TodoCheck(){

}

TodoCheck.prototype.apply = function(compiler){
    compiler.plugin('run', function(compi) {
        console.log('Hello World!');
      });
}

module.exports= TodoCheck