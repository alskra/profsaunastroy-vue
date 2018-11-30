<template lang="pug">
	main.single-article-page
		.container
			router-view(name="PageBreadcrumb")

			.main
				router-view(name="ArticleView")

		router-view(name="RequestSect")
</template>

<script>
	export default {
		name: 'SingleArticlePage',
	}
</script>

<style lang="scss" scoped>
	.single-article-page {
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
