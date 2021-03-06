const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		stats: 'errors-only'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ 
						loader: "style-loader"
					},
					{ 
						loader: "css-loader",
						options: { importLoaders: 1 }
					},
					{
						loader: "postcss-loader"
					},
					{ 
						loader: "sass-loader"
					}
				]
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]
});