<template lang="pug">
	main.articles-page
		.err.container(v-if="err") {{ err }}

		template(v-else)
			base-section
				template(slot="bg-text") Статьи

				page-breadcrumbs(
					slot="breadcrumbs"
					:breadcrumb="breadcrumb"
				)

				template(
					slot="title"
					v-if="page.title"
				) {{ page.title }}

				div(
					slot="body"
					v-if="page.body"
					v-html="page.body"
				)

			articles-list
			request-sect
</template>

<script>
	import BasePage from './BasePage';
	import PageBreadcrumbs from './PageBreadcrumbs';
	import ArticlesList from './ArticlesList';
	import RequestSect from './RequestSect';

	export default {
		name: 'ArticlesPage',
		mixins: [BasePage],
		components: {
			PageBreadcrumbs,
			ArticlesList,
			RequestSect,
		},
		data() {
			return {
				apiUrl: '/articles'
			};
		},
		computed: {
			breadcrumb() {
				return {
					parents: ['Home'],
				};
			},
		},
	}
</script>

<style lang="scss" scoped>
	.articles-page {
		@include reset;

		.page-breadcrumbs {
			margin: 0 0 2rem;

			@media (--lt-md) {
				margin: 0 0 (2rem / 1.5);
			}
		}
	}
</style>
