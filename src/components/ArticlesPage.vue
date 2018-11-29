<template lang="pug">
	main.articles-page
		.container
			.row
				.col.col-lg-10.offset-1
					page-breadcrumb
					router-view(name="ArticleView")
</template>

<script>
	import PageBreadcrumb from "./PageBreadcrumb";

	export default {
		name: 'ArticlesPage',
		components: {PageBreadcrumb},
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
