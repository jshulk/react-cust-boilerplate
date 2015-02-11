module.exports = {
	entry: "./src/app.js",
	output: {
		path: "build",
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{test: /\.jsx$/, loader: 'jsx-loader'},
			{ test: /\.css$/, loader: 'style-loader!css-loader' }
		]
	}
}