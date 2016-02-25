module.exports = {
	entry : {
		'1': './Controller/main-1.js',
		'2': './Controller/main-2.js',
		'3': './Controller/main-3.js',
		'4': './Controller/main-4.js',
		'5': './Controller/main-5.js',
		'6': './Controller/main-6.js',
		'7': './Controller/main-7.js',
		'8': './Controller/main-8.js',
		'9': './Controller/main-9.js',
		'10': './Controller/main-10.js',
		'index' : './main.js'
	},
	output : {
		filename : 'app-[name].bundle.js', /* for multiple entries, name is the key */
		path : __dirname + '/Dist' /* This didn't even work... */
	},
	devServer : {
		inline : true,
		port : 3001
	},
	module : {
		loaders : [
		{	
			test : /\.js$/,
			exclude : /node_modules/,
			loader : 'babel',
			query : {
				presets : ['es2015', 'react']
			}
		}]
	}
}