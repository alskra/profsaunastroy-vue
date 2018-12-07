<template lang="pug">
	main.article-page(v-if="err || data")
		.err(v-if="err") {{ err }}

		template(v-else)
			.container
				page-breadcrumbs(:breadcrumb="breadcrumb")

				article.article
					header.__header
						h1.__title {{ data.title }}

						.__row.row
							.__col.col-auto.mw-100
								time.__datetime(
									:datetime="new Date(data.publication_date).toISOString()"
									:title="`${dateString} ${timeString}`"
								)
									| {{ dateString }}

							.__col.col-auto.mw-100.ml-auto
								.__share Поделиться PLUSO

					.__body.content(v-html="data.body")

			router-view(name="RequestSect")
</template>

<script>
	import MixinPage from './MixinPage';
	import PageBreadcrumbs from "./PageBreadcrumbs";

	export default {
		name: 'ArticlePage',
		mixins: [MixinPage()],
		components: {PageBreadcrumbs},
		computed: {
			breadcrumb() {
				return {
					parents: [
						'Home',
						'Articles',
					],
					label: this.data ? this.data.title : null,
				};
			},
			dateString() {
				return new Date(this.data.publication_date).toLocaleDateString('ru', {
					year: 'numeric',
					month: 'long',
					day: '2-digit',
				});
			},
			timeString() {
				return new Date(this.data.publication_date).toLocaleTimeString('ru', {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				});
			},
		},
	}
</script>

<style lang="scss" scoped>
	.article-page {
		@include reset;

		padding: 3rem 0;

		@media (--lt-md) {
			padding: 2rem 0;
		}

		.page-breadcrumbs {
			margin: 0 auto 2rem;
			max-width: calc(env(--md) + 4rem);

			@media (--lt-md) {
				margin-bottom: (2rem / 1.5);
			}
		}
	}

	.article {
		margin: 0 auto;
		max-width: env(--md);

		&__header {
			margin-bottom: 2rem;

			@media (--lt-md) {
				margin-bottom: (2rem / 1.5);
			}
		}

		&__title {
			@include reset;

			font-family: var(--content-headings-font-family);
			font-weight: var(--content-headings-font-weight);
			font-size: var(--content-h1-font-size);
			line-height: var(--content-headings-line-height);
			color: var(--content-headings-color);
			margin-bottom: 0.5rem;
		}

		&__datetime {
			@include reset;

			display: inline;
			font-weight: 300;
			font-size: calc(var(--content-font-size) * 14 / 16);
			line-height: 1.25;
			color: var(--content-headings-color);
		}

		&__share {
			display: inline;
			font-weight: 300;
			font-size: calc(var(--content-font-size) * 14 / 16);
			line-height: 1.25;
			color: var(--content-headings-color);
		}
	}
</style>
