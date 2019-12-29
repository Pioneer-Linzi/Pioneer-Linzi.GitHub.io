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
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')



const devMode = process.env.NODE_ENV !== 'production'



module.exports = {
	//入口
	entry: './src/index.tsx',
	// 输出
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [{
				test: /\.(sa|sc|c)ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		}),
		
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CompressionWebpackPlugin({
			algorithm: 'gzip',
			test: /(\.js$)|(\.css$)/,
			threshold: 10240,
			minRatio: 0.8
		}),
	],
	optimization: {
		// 配置代码分割
		splitChunks: {
			// 要分割哪些模块：all（推荐）, async(默认，只分隔异步代码), and initial
			chunks: 'all'
		}
	}
};