const pkg = require('./package');
const pugBem = require('pug-bem');

const pages = {
	index: {
		entry: 'src/index/main.js',
		template: 'src/index/index.pug',
		title: 'Главная'
	}
};

module.exports = {
	baseUrl: '',
	pages,
	runtimeCompiler: true,

	chainWebpack: config => {
		// `html-webpack-plugin`
		config.module.rule('pug').uses.clear();

		config.module.rule('pug').oneOf('vue')
			.resourceQuery(/^\?vue/)
			.use('pug-bem-plain-loader')
			.loader('pug-bem-plain-loader');

		config.module.rule('pug').oneOf('normal')
			.use('pug-loader')
			.loader('pug-loader')
			.options({
				pretty: true,
				plugins: [pugBem],
			});

		Object.keys(pages).forEach(page => {
			config.plugin(`html-${page}`).tap(options => {
				options[0].minify = false;
				options[0].title = `${pages[page].title} - ${pkg.name}`;

				return options;
			});
		});


		// load `scss`
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		types.forEach(type => config.module.rule('scss').oneOf(type).uses.delete('sass-loader'));
	},

	css: {
		sourceMap: true,
	},
};
