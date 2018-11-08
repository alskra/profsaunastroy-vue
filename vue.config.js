const pkg = require('./package');
const pugBem = require('pug-bem');

const pages = {
  index: {
    entry: 'src/main.js',
    template: 'src/index.pug',
    title: 'Главная'
  }
};

module.exports = {
  baseUrl: '',
  pages,

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
      .options({pretty: true, plugins: [pugBem]});

    for (let page in pages) {
      if (pages.hasOwnProperty(page)) {
        config.plugin(`html-${page}`).tap(options => {
          options[0].minify = false;
          options[0].title = `${pages[page].title} - ${pkg.name}`;

          return options;
        });
      }
    }

    // remove `sass-loader`
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach(type => config.module.rule('scss').oneOf(type).uses.delete('sass-loader'));
  },
};
