module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: "build",
		filename: 'index.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{test: /\.jsx$/, loader: 'jsx-loader'}]
	}
}