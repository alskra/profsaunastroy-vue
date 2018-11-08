const pkg = require('./package');
const path = require('path');
const postcssStripInlineComments = require('postcss-strip-inline-comments');
const postcssOmitImportTilde = require('postcss-omit-import-tilde');
const postcssPrependImports = require('postcss-prepend-imports');
const postcssEasyImport = require('postcss-easy-import');
const postcssFunctions = require('postcss-functions');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSassCompile = require('@csstools/postcss-sass');
const cssMqpacker = require('css-mqpacker');
const sortCssMediaQueries = require('sort-css-media-queries');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssPxtorem = require('postcss-pxtorem');
const pugBem = require('pug-bem');

const pages = {
  index: {
    entry: 'src/main.js',
    template: 'src/index.pug',
    title: 'Главная'
  }
};

const cssEnv = ['src/css-env.json'];

const functions = {
  env: (variable) => {
    if (variable === undefined) {
      throw Error('Missing arguments of "env()" function');
    }

    if (variable.match(/^\$/)) {
      return `env(${variable})`;
    }

    const environmentVariables = {};

    cssEnv.forEach((url) => {
      url = path.resolve(url);

      delete require.cache[url];

      /* eslint-disable-next-line global-require */
      const data = require(url);

      Object.assign(environmentVariables, data.environmentVariables || data['environment-variables']);
    });

    return environmentVariables[variable];
  },
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

  css: {
    loaderOptions: {
      postcss: {
        syntax: 'postcss-scss',
        plugins: [
          postcssStripInlineComments,
          postcssOmitImportTilde,
          postcssPrependImports({
            path: '',
            files: [],
          }),
          postcssEasyImport({
            plugins: [
              postcssStripInlineComments,
              postcssOmitImportTilde,
            ],
            prefix: '_',
            extensions: ['.css', '.scss'],
          }),
          postcssFunctions({
            functions,
          }),
          postcssPresetEnv({
            stage: false,
            features: {
              'environment-variables': false,
              'custom-properties': false,

              'custom-selectors': {
                preserve: false,
              },
              'custom-media-queries': {
                preserve: false,
              },
              'media-query-ranges': {
                preserve: false,
              },
              'image-set-function': {
                preserve: false,
              },
            },
            autoprefixer: false,
            importFrom: cssEnv,
          }),
          postcssSassCompile({
            outputStyle: 'expanded',
          }),
          postcssPresetEnv({
            stage: false,
            features: {
              'any-link-pseudo-class': {
                preserve: false,
              },
              'matches-pseudo-class': {
                preserve: false,
              },
              'not-pseudo-class': {
                preserve: false,
              },
              'focus-visible-pseudo-class': {
                preserve: false,
                replaceWith: '.focus-visible',
              },
              'focus-within-pseudo-class': {
                preserve: false,
                replaceWith: '.focus-within',
              },
            },
            autoprefixer: false,
          }),
          cssMqpacker({
            sort: sortCssMediaQueries,
          }),
          postcssCombineDuplicatedSelectors({
            removeDuplicatedProperties: true,
          }),
          postcssPxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: true,
            minPixelValue: 0,
          }),
        ]
      }
    }
  },
};
