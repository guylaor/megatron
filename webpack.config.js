const path = require('path')

module.exports = {
	context: __dirname,
	entry: "./js/MainApp.js",
	devtool: "eval",
	output: {
		path: path.join(__dirname, 'js'),
		filename: 'bundle.js'
	},
	devServer: {
		publicPath: '/js/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				]
			}
		]
	}
};