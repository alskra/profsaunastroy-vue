<template lang="pug">
	main.page-main-articles
		.container
			router-view(name="PageBreadcrumb")

			.center-col
				| Articles Page

		router-view(name="RequestSect")
</template>

<script>
	export default {
		name: 'PageMainArticles',
	}
</script>

<style lang="scss" scoped>
	.page-main-articles {
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
