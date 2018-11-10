const path = require('path');
const pugBem = require('pug-bem');

const pages = {
	index: {
		entry: 'src/index/main.js',
		template: 'src/index/index.pug',
		title: 'Index'
	}
};

module.exports = {
	baseUrl: process.env.VUE_APP_STAGE ? process.env.VUE_APP_STAGE : '/',
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
				options[0].title = `${pages[page].title} - ${process.env.VUE_APP_TITLE}`;

				return options;
			});
		});


		// loaders `scss`
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		types.forEach(type => {
			config.module.rule('scss').oneOf(type).uses.delete('sass-loader');

			config.module.rule('scss').oneOf(type)
				.use('style-resources-loader')
				.loader('style-resources-loader')
				.options({
					patterns: [
						path.resolve(__dirname, 'src/scss/variables.scss'),
						path.resolve(__dirname, 'src/scss/functions/*.scss'),
						path.resolve(__dirname, 'src/scss/mixins/*.scss'),
					],
				});
		});
	},

	css: {
		sourceMap: true,
	},
};
