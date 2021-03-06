
const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: {
		main: ["./src/main.js"]
	},
	mode: "development",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/"
	},
	devServer: {
		contentBase: "dist",
		overlay: true,
		hot: true,
		stats: {
			colors: true
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{ loader: "babel-loader" }]
			},
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }]
			},
			{
				test: /\.jpg$/,
				use: [{ loader: "file-loader", options: { name: "images/[name].[ext]" } }]
			},
			{
	            test: /\.ejs$/,
	            use: [{ loader: "ejs-webpack-loader"}]
	        },
			{
				test: /\.html$/,
				use: [{ loader: "html-loader" }]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new HTMLWebpackPlugin({
		// 	template: "!!ejs-webpack-loader!src/views/index.ejs",
		// 	inject: false
		// }),


		new HTMLWebpackPlugin({
			template: "./src/views/index.ejs"
			// inject: false
		})
	]
}
