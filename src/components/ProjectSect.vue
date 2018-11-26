<template lang="pug">
	section.project-sect
		.container
			.row
				.col.col-12.mb-0.col-lg-10.offset-lg-1
					.content.--invert.--heading
						h2.h1.animate.animate-text(
							data-animate={
								start: 'scroll',
								name: 'lettersFadeInUp'
							}
						) Проекты бань и саун

				.col.col-12.col-md-6.col-lg-5.offset-lg-1
					.content.--invert.--main.animate(
						data-animate={
							start: 'scroll',
							name: 'fadeIn'
						}
					)
						p.
							Мы прелагаем вам выбрать проекты бань из бруса, блоков, кирпича, а также проекты саун из липы, ольхи, кедра, абаши.
							На Ваш выбор сотни вариантов. Если у вас уже есть готовый проект, отправьте его нам.

					.text-center.text-md-left.animate(
						data-animate={
							start: 'scroll',
							name: 'fadeIn',
							targets: '.btn'
						}
					)
						btn-primary.btn-primary--invert.btn(
							el="router-link"
							to=""
						) Предложить проект

				.col.col-12.col-md-6.col-lg-5
					ul.projects-list.animate(
						data-animate={
							start: 'scroll',
							name: 'fadeInUp',
							targets: '.projects-list__item'
						}
					)
						li.__item
							h3.__item-title
								a(href="") Проекты бань из бруса, блоков, кирпича
							a.__item-link(href="") Выбрать проект >

						li.__item
							h3.__item-title
								a(href="") Проекты саун из липы, ольхи, кедра, абаши
							a.__item-link(href="") Выбрать проект >
</template>

<script>
	import animate from '../js/animate';
	import BtnPrimary from './BtnPrimary';

	export default {
		name: "ProjectSect",
		components: {
			BtnPrimary,
		},
		mounted() {
			animate.update();
		},
		updated() {
			animate.update();
		},
	}
</script>

<style lang="scss" scoped>
	.project-sect {
		@include reset;

		padding: 6rem 0;
		background: url("../img/bg-1.jpg") no-repeat 50% 50%;
		background-size: cover;
		background-color: var(--content-color);

		@media (--lt-md) {
			padding: 4rem 0;
		}
	}

	.row {
		margin-bottom: -2rem;
	}

	.col {
		margin-bottom: 2rem;
	}

	.content {
		&--heading {
			.h1 {
				margin-bottom: 1em;
			}
		}

		&--main {
			margin-bottom: 3rem;
		}
	}

	.projects-list {
		@include reset;

		&__item {
			@include reset;

			& + & {
				margin-top: 2rem;
			}

			&-title {
				@include reset;

				font-weight: 700;
				font-size: 18px;
				line-height: 1.25;
				color: var(--page-background-color);

				a {
					display: block;
					text-decoration: none;
					color: inherit;
					transition: color 0.15s ease-in-out;

					&:hover {
						color: #fff;
					}
				}
			}

			&-link {
				@include reset;

				display: inline;
				font-size: 12px;
				line-height: 1.25;
				color: var(--page-background-color);
				transition: color 0.15s ease-in-out;
				cursor: pointer;

				&:hover {
					color: #fff;
				}
			}
		}
	}
</style>
