<template lang="pug">
	main.articles-page(v-if="err || data")
		.err(v-if="err") {{ err }}

		template(v-else)
			.container
				page-breadcrumbs(:breadcrumb="breadcrumb")

				.center-col
					| Articles Page

			router-view(name="RequestSect")
</template>

<script>
	import MixinPage from './MixinPage';
	import PageBreadcrumbs from './PageBreadcrumbs';

	export default {
		name: 'ArticlesPage',
		mixins: [MixinPage('/pages/articles')],
		components: {PageBreadcrumbs},
		computed: {
			breadcrumb() {
				return {
					parents: [
						'Home',
					],
					label: this.$route.matched.slice().pop().meta.breadcrumb,
				};
			},
		},
	}
</script>

<style lang="scss" scoped>
	.articles-page {
		@include reset;

		padding: 3rem 0;

		@media (--lt-md) {
			padding: 2rem 0;
		}

		.page-breadcrumbs {
			margin: 0 auto 2rem;
			max-width: calc(env(--md) + 4rem);

			@media (--lt-md) {
				margin-bottom: (2rem / 1.5);
			}
		}
	}

	.center-col {
		max-width: env(--md);
		margin: 0 auto;
	}
</style>
