<template lang="pug">
	main.article-view-page
		.container
			.row
				.col.col-lg-10.offset-1
					router-view(name="PageBreadcrumb")
					router-view(name="ArticleView")
</template>

<script>
	export default {
		name: 'ArticleViewPage',
	}
</script>

<style lang="scss" scoped>
	.article-view-page {
		@include reset;

		padding: 6rem 0;

		@media (--lt-md) {
			padding: 3rem 0;
		}
	}
</style>
