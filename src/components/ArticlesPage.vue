<template lang="pug">
	main.articles-page(v-if="err || data")
		.err(v-if="err") {{ err }}

		template(v-else)
			.container
				router-view(name="PageBreadcrumb")

				.center-col
					| Articles Page

			router-view(name="RequestSect")
</template>

<script>
	import MixinPage from './MixinPage';

	export default {
		name: 'ArticlesPage',
		mixins: [MixinPage('/pages/articles')],
	}
</script>

<style lang="scss" scoped>
	.articles-page {
		@include reset;

		padding: 3rem 0;

		@media (--lt-md) {
			padding: 2rem 0;
		}

		.page-breadcrumb {
			margin-bottom: 2rem;

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
