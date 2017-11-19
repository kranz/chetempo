var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{test: /\.(js)$/, use: 'babel-loader'},
			{test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
			{test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins : [ new HtmlWebpackPlugin({
			template: 'app/index.html'
		})

	]
};

module.exports = config;