<template lang="pug">
	main.articles-page(v-if="err || page.id")
		.err(v-if="err") {{ err }}

		template(v-else)
			base-section
				template(slot="bg-text") Статьи

				page-breadcrumbs(
					slot="breadcrumbs"
					:breadcrumb="breadcrumb"
				)

				template(slot="title") {{ page.title }}

				div(
					slot="body"
					v-html="page.body"
				)

			router-view(name="ArticlesList")
			router-view(name="RequestSect")
</template>

<script>
	import BasePage from './BasePage';
	import PageBreadcrumbs from './PageBreadcrumbs';

	export default {
		name: 'ArticlesPage',
		mixins: [BasePage.createMixin('/pages/articles')],
		components: {PageBreadcrumbs},
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
