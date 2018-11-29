<template lang="pug">
	main.articles-page
		.container
			page-breadcrumb

			.row
				.col.col-lg-10.offset-1
					router-view(name="ArticleView")

		request-sect
</template>

<script>
	import PageBreadcrumb from "./PageBreadcrumb";
	const RequestSect = () => import('./RequestSect');

	export default {
		name: 'ArticlesPage',
		components: {
			PageBreadcrumb,
			RequestSect,
		},
	}
</script>

<style lang="scss" scoped>
	.articles-page {
		@include reset;

		padding: 6rem 0;

		@media (--lt-md) {
			padding: 3rem 0;
		}
	}
</style>
