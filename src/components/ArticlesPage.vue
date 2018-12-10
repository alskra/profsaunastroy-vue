<template lang="pug">
	main.articles-page(v-if="err || page.id")
		.err(v-if="err") {{ err }}

		template(v-else)
			base-section
				template(slot="breadcrumbs")
					page-breadcrumbs(:breadcrumb="breadcrumb")

				template(slot="bg-text") Статьи
				template(slot="title") Полезные статьи

				template(slot="body")
					p В этом разделе вы найдете полезные статьи и материалы по тематике стоительства и отделки саун и бань.

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
