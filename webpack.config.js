/*
 * webpack.config.js
 * Copyright (C) 2018 linzi <linzi@archlinux>
 *
 * Distributed under terms of the MIT license.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const path = require('path');


module.exports = {
	//入口
	entry: './src/index.js',
	// 输出
	mode:'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	devServer:{
		contentBase: './dist',
		hot:         true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// babel-loader 很慢
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory:true
					}
				}
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			inject:true,
			template:'./public/index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};
