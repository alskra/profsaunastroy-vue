<template lang="pug">
	#app.article-view
		page-header
		page-content
			.container
				page-pagination

				.row
					.col.col-12.col-lg-10.offset-lg-1
						article-view

		request-sect
		page-footer(data-page-header-theme="dark")
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import PageContent from '../../components/PageContent';
	import PagePagination from '../../components/PagePagination';
	import ArticleView from '../../components/ArticleView';
	import RequestSect from '../../components/RequestSect';
	import PageFooter from '../../components/PageFooter';

	export default {
		name: "App",
		components: {
			PageHeader,
			PageContent,
			PagePagination,
			ArticleView,
			RequestSect,
			PageFooter,
		},
	}
</script>

<style lang="scss" scoped>
	.page-pagination {
		margin-bottom: 3rem;

		@media (--lt-md) {
			margin-bottom: 2rem;
		}
	}
</style>
