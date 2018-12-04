<template lang="pug">
	main.article-route-view
		.container
			router-view(name="PageBreadcrumb")

			.main
				router-view(name="ArticleView")

		router-view(name="RequestSect")
</template>

<script>
	export default {
		name: 'ArticleRouteView',
	}
</script>

<style lang="scss" scoped>
	.article-route-view {
		@include reset;

		padding: 3rem 0;

		@media (--lt-md) {
			padding: 2rem 0;
		}

		.page-breadcrumb {
			margin-bottom: 2rem;

			@media (--lt-md) {
				margin-bottom: 1.5rem;
			}
		}
	}

	.main {
		max-width: env(--md);
		margin: 0 auto;
	}
</style>
