/* eslint-disable no-unused-vars,no-mixed-spaces-and-tabs */
const pluginName = 'Md2js'
const fs = require('fs')

class Md2js {
	constructor () {
		console.log('--------------------------------------------------------md2js-------------------------------------------------------------')
	}
	apply (compiler) {
		// 指定一个挂载到 webpack 自身的事件钩子。
		compiler.plugin('make', function (compilation /* 处理 webpack 内部实例的特定数据。 */, callback) {
			console.log('markdown file to js var')
			// 功能完成后调用 webpack 提供的回调。
      //读取page 目录下的md 文件

      fs.




			callback()
		})
	}
}

module.exports = Md2js
