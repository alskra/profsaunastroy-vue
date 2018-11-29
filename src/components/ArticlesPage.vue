<template lang="pug">
	main.articles-page
		.container
			.row
				.col.col-lg-10.offset-1
					router-view(name="PageBreadcrumb")
					router-view(name="ArticleView")
</template>

<script>
	export default {
		name: 'ArticlesPage',
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
