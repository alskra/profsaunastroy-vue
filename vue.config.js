const path = require('path');
const pugBem = require('pug-bem');

process.env.VUE_APP_TITLE = 'ProfSaunaStroy';
process.env.VUE_APP_API_HOST = process.env.NODE_ENV === 'production' ? 'https://api-profsaunastroy.now.sh'
	: '//localhost:3000';

module.exports = {
	baseUrl: '/',
	runtimeCompiler: false,
	chainWebpack(config) {
		// rule `pug`
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

		// rule `scss`
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		types.forEach(type => {
			config.module.rule('scss').oneOf(type).uses.delete('sass-loader');

			config.module.rule('scss').oneOf(type)
				.use('style-resources-loader')
				.loader('style-resources-loader')
				.options({
					patterns: [
						path.resolve(__dirname, 'src/assets/scss/variables.scss'),
						path.resolve(__dirname, 'src/assets/scss/functions/*.scss'),
						path.resolve(__dirname, 'src/assets/scss/mixins/*.scss'),
					],
				});
		});
	},
	productionSourceMap: false,
	css: {
		sourceMap: process.env.NODE_ENV !== 'production',
	},
};
