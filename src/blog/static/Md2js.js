/* eslint-disable no-unused-vars,no-mixed-spaces-and-tabs,handle-callback-err */
const pluginName = 'Md2js'
const fs = require('fs')
const util = require('util')
const readFileAsync = util.promisify(fs.readFile)
const readDirAsync = util.promisify(fs.readdir)
const fileStat = util.promisify(fs.stat)
const writeFile = util.promisify(fs.writeFile)
const appendFile = util.promisify(fs.appendFile)
const filePath = './page'
const dataPath = './static/data.js'
class Md2js {
	constructor () {
		console.log('--------------------------------------------------------md2js-------------------------------------------------------------')
	}
	apply (compiler) {
		// 指定一个挂载到 webpack 自身的事件钩子。
		compiler.plugin('entryOption', (compilation /* 处理 webpack 内部实例的特定数据。 */, callback) => {
			console.log('markdown file to js var')
			this.init()
			callback()
		})
	}

	async init () {
	  let blogData = {}
		let pageDir = await readDirAsync(filePath)
		// pageDir 分类 加入数据
		for (let i = 0; i < pageDir.length; i++) {
	    blogData[pageDir[i]] = []
	    let blogDir = await readDirAsync(filePath + '/' + pageDir[i])
	    for (let j = 0; j < blogDir.length; j++) {
	      let blog = {}
	      // title and labels
	      blog = this.formatBlogTitle(blogDir[j])
				// createTime
				let blogStat = await fileStat(filePath + '/' + pageDir[i] + '/' + blogDir[j])
				blog['createTime'] = blogStat.ctime
				// content
				let blogContent = await readFileAsync(filePath + '/' + pageDir[i] + '/' + blogDir[j])
				blog['content'] = '' + blogContent
				blogData[pageDir[i]].push(blog)
			}
		}

		// 文件是否存在
		let stat = fs.existsSync(dataPath)
		if (stat === false) {
	    await appendFile(dataPath)
		}
		await writeFile(dataPath, 'export default ' + JSON.stringify(blogData), 'utf8')

		// console.log(write)
		// console.log(JSON.stringify(blogData))
	}

	/**
   * 文件名约定
   * 扩展名为 .md
   * 以 - 分割
   * 最前面的是title
   * 后面的是lable
   * @param title
   */
	formatBlogTitle (title) {
		let blogTitle
		blogTitle = {
			title: '',
			labels: []
		}
		// 去扩展名 .md
		title = title.replace('.md', '')
		// 切分label
		let titles = title.split('-')
		blogTitle.title = titles.shift()
		blogTitle.labels = titles
		return blogTitle
	}
}

module.exports = Md2js
