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

const environmentVariables = {
	'--quotes': '"“" "”" "‘" "’"',
	'--font-family': '"Roboto", sans-serif',
	'--text-align': 'left',
	'--color': '#000',
	'--outline-color': '#000',
	'--xs': '0',
	'--sm': '640px',
	'--md': '960px',
	'--lg': '1280px',
	'--xl': '1600px'
};

module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		postcssStripInlineComments,
		postcssOmitImportTilde,
		postcssPrependImports({
			path: 'src/scss',
			files: [
				'imports',
			],
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
			functions: {
				env: (variable) => {
					if (variable.match(/^\$/)) {
						return `env(${variable})`;
					}

					if (variable === undefined) {
						throw Error('Missing arguments of \'env()\' function');
					}

					if (environmentVariables[variable] === undefined) {
						throw Error('environment variable is not defined');
					}

					return environmentVariables[variable];
				},
			},
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
			importFrom: {environmentVariables},
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
			autoprefixer: {
				cascade: false,
				add: true,
				remove: true,
			},
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
};
