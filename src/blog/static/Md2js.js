/* eslint-disable no-unused-vars,no-mixed-spaces-and-tabs,handle-callback-err */
const pluginName = 'Md2js'
const fs = require('fs')

const filePath = './page'
const DIRTYPE = 'DIR'
const FILETYPE = 'FILE'

class Md2js {
	constructor () {
		console.log('--------------------------------------------------------md2js-------------------------------------------------------------')
	}
	apply (compiler) {
		// 指定一个挂载到 webpack 自身的事件钩子。
		compiler.plugin('make', (compilation /* 处理 webpack 内部实例的特定数据。 */, callback) => {
			console.log('markdown file to js var')
			// 功能完成后调用 webpack 提供的回调。
			// 读取page 目录下的md 文件
			this.readdirFile(DIRTYPE, filePath).then((files) => {
			  let promies = []
			  for (let i = 0; i < files.length; i++) {
					promies.push(this.readdirFile(DIRTYPE, files[i]))
				}
				Promise.all(promies).then((res) => {
					let pro = []
					console.log(res)
					for (let i = 0; i < res.length; i++) {
					  for (let j; j < res[i].length; j++) {
							pro.push(this.readdirFile(FILETYPE, files[i]))
						}
					}
					Promise.all(pro).then((res) => {
					  console.log(res)
						callback()
					})
				})
			})
		})
	}
	readdirFile (fileType, path) {
	  return new Promise((resolve, reject) => {
	    if (fileType === DIRTYPE) {
				fs.readdir(path, 'utf8', (error, files) => {
					let fileNames = []
					files.forEach(function (fileName) {
						fileNames.push(path + '/' + fileName)
					})
					resolve(fileNames)
				})
			} else {
				fs.readFile(path, 'utf8', (error, files) => {
				  let fileNames = []
				  files.forEach(function (fileName) {
				   fileNames.push(path + '/' + fileName)
					})
					resolve(fileNames)
				})
			}
		})
	}
}

module.exports = Md2js
