<template lang="pug">
	main.articles-page
		.container
			.breadcrumb
				page-breadcrumb

			.main
				router-view(name="ArticleView")

		router-view(name="RequestSect")
</template>

<script>
	import PageBreadcrumb from "./PageBreadcrumb";

	export default {
		name: 'ArticlesPage',
		components: {
			PageBreadcrumb,
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
	}

	.breadcrumb {
		margin-bottom: 2rem;

		@media (--lt-md) {
			margin-bottom: 1.5rem;
		}
	}

	.main {
		max-width: env(--md);
		margin: 0 auto;
	}
</style>
