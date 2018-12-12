<template lang="pug">
	main.article-page
		.err.container(v-if="err") {{ err }}

		template(v-else)
			.container
				page-breadcrumbs(:breadcrumb="breadcrumb")

				article.article
					header.__header
						h1.__title.animate.animate-text(
							v-if="page.title"
							data-animate={
								start: 'scroll',
								name: 'lettersFadeInUp'
							}
						)
							| {{ page.title }}

						.__row.row
							.__col.col-auto.mw-100
								time.__datetime(
									v-if="page.publish_date"
									:datetime="new Date(page.publish_date).toISOString()"
									:title="`${dateString} ${timeString}`"
								)
									| {{ dateString }}

							.__col.col-auto.mw-100.ml-auto
								.__share Поделиться PLUSO

					.__body.mb-2.mb-md-3
						.content(
							v-if="page.body"
							v-html="page.body"
						)

					.content.mb-2.mb-md-3
						<h2>Встроенная сауна в доме под ключ цена</h2>
						<p>Мы можем предоставить вам множество услуг: разработать для вас уникальный проект сауны или бани под ключ, изготовить полки на заказ, поставить все необходимые материалы для отделки и проконсультировать Вас по всем возникшим вопросам. Мы предлагаем вам рассмотреть варианты встроеных саун, которые отлично подойдут для квартиры и дома.</p>
						<p>Для определения оптимального места размещения домашней сауны, её формы, размеров и других важных деталей - обратитесь к нам и пригласите к себе нашего специалиста. Стоимость мини-сауны будет зависеть от её размеров, формы и материалов выбранных для отделки. Встроенная сауна представляет собой деревянную кабину, которая обогревается печью-каменкой: в городе &mdash; только электрической, в загородном доме подойдет и дровяная, и электрическая. Готовая модель домашней сауны &mdash; это кабина, которая может быть изготовлена из разных пород дерева, разных размеров и форм. Мини-сауна при необходимости может иметь довольно маленькие размеры: от 0,8 м на 0,8 м - рассчитана на одного человека, до больших кабин домашних саун для всей семьи.</p>

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

			request-sect
</template>

<script>
	import BasePage from './BasePage';
	import PageBreadcrumbs from './PageBreadcrumbs';
	import RequestSect from './RequestSect';

	export default {
		name: 'ArticlePage',
		mixins: [BasePage],
		components: {
			PageBreadcrumbs,
			RequestSect,
		},
		data() {
			return {
				apiUrl: `/articles/${this.$route.params.postId}`
			};
		},
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
				return new Date(this.page.publish_date).toLocaleDateString('ru', {
					year: 'numeric',
					month: 'long',
					day: '2-digit',
				});
			},
			timeString() {
				return new Date(this.page.publish_date).toLocaleTimeString('ru', {
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
			margin: 3rem 0 2rem;

			@media (--lt-md) {
				margin: 2rem 0 (2rem / 1.5);
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
