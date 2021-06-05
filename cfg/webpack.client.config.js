const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
	if (IS_PROD) {
		return false;
	}

	if (IS_DEV) {
		return 'eval';
	}
}

module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		// extensions: [".jsx", ".js", ".json"],
		alias: {
			'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
		}
  },
	entry: [
		path.resolve(__dirname, '../src/client/index.tsx'),
		'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
	],
	// entry: '../src/client/index.jsx',
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js',
		publicPath: '/static/',
	},
  module: {
    rules: [{
			test: /\.tsx?$/,
			// test: /\.[jt]sx?$/,
			loader: "ts-loader",
			// use: ["ts-loader"],
		}]
  },
	devtool: setupDevtool(),
	plugins: IS_DEV
		? [
			new CleanWebpackPlugin(),
			new HotModuleReplacementPlugin(),
		]
		: [],
};
