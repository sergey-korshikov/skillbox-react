const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);

let isFirstRun = true;

compiler.watch({}, (err) => {
	if (err) {
		console.log('Compilation failed: ', err);
	}
	console.log('Compilation was successfully');

	if (isFirstRun) {
		nodemon({
			script: path.resolve(__dirname, '../dist/server/server.js'),
			watch: [
				path.resolve(__dirname, '../dist/server'),
				path.resolve(__dirname, '../dist/client'),
			]
		});

		console.log('Nodemon started');

		isFirstRun = false;
	}
});

// compiler.run((err) => {
// 	if (err) {
// 		console.log('Compilation failed: ', err);
// 	}

// 	compiler.watch({}, (err) => {
// 		if (err) {
// 			console.log('Compilation failed: ', err);
// 		}
// 		console.log('Compilation was successfully');
// 	});

// 	nodemon({
// 		script: path.resolve(__dirname, '../dist/server/server.js'),
// 		watch: [
// 			path.resolve(__dirname, '../dist/server'),
// 			path.resolve(__dirname, '../dist/client'),
// 		]
// 	});
// });
