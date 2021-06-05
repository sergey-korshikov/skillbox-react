const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
	if (IS_PROD) {
		return false;
	}

	if (IS_DEV) {
		return 'evel';
	}
}

module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		// extensions: [".jsx", ".js", ".json"],
  },
	entry: './src/client/index.tsx',
	// entry: '../src/client/index.jsx',
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js',
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
};
