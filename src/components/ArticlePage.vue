<template lang="pug">
	main.article-page(v-if="err || page.id")
		.err(v-if="err") {{ err }}

		template(v-else)
			.container
				page-breadcrumbs(:breadcrumb="breadcrumb")

				article.article
					header.__header
						h1.__title {{ page.title }}

						.__row.row
							.__col.col-auto.mw-100
								time.__datetime(
									:datetime="new Date(page.publication_date).toISOString()"
									:title="`${dateString} ${timeString}`"
								)
									| {{ dateString }}

							.__col.col-auto.mw-100.ml-auto
								.__share Поделиться PLUSO

					.__body.mb-2.mb-md-3
						.content(v-html="page.body")

					.row.mb-2.mb-md-3
						.col-12.col-md-4.mb-1.mb-md-0
							img.mx-auto.d-block.mw-100(src="upload/vagonka_kedr.jpg" alt="")

						.col-12.col-md-8
							.content
								h3 Вагонка из кедра канадского
								p Одним из элитных и дорогостоящих материалов, применяемых для отделки сауны, является кедр канадский. Цвет этого благородного природного материала варьируется от темно-розовой до красно-коричневой и имеет приятный аромат. Он обладает целым рядом достоинств.

					.row.mb-2.mb-md-3
						.col-12.col-md-4.order-md-1.mb-1.mb-md-0
							img.mx-auto.d-block.mw-100(src="upload/vagonka_list.jpg" alt="")

						.col-12.col-md-8
							.content
								h3 Вагонка из лиственницы для комнаты отдыха
								p Вагонка из лиственницы подойдет как для комнаты отдыха, так и в душевую и предбанник. Эта хвойная порода дерева славится своей прочностью, которая сравнима с прочностью дуба. Вагонка из лиственницы обладает низкой теплопроводностью, имеет красивую структуру дерева и приятный аромат, устойчива к условиям высокой влажности.

			router-view(name="RequestSect")
</template>

<script>
	import BasePage from './BasePage';
	import PageBreadcrumbs from './PageBreadcrumbs';

	export default {
		name: 'ArticlePage',
		mixins: [BasePage.createMixin()],
		components: {PageBreadcrumbs},
		computed: {
			breadcrumb() {
				return {
					parents: [
						'Home',
						'Articles',
					],
					label: this.page.title,
				};
			},
			dateString() {
				return new Date(this.page.publication_date).toLocaleDateString('ru', {
					year: 'numeric',
					month: 'long',
					day: '2-digit',
				});
			},
			timeString() {
				return new Date(this.page.publication_date).toLocaleTimeString('ru', {
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

		.page-breadcrumbs {
			margin: 3rem auto 2rem;
			max-width: calc(env(--md) + 4rem);

			@media (--lt-md) {
				margin-top: 2rem;
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
