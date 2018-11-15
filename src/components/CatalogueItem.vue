<template lang="pug">
	article.catalogue-item
		.row
			.col.col-12.col-md-6(:class="{'order-md-1': index % 2 === 1}")
				.content.animate(
					v-html!="`<h3 class='h2'>${catalogueItem.title}</h3>${catalogueItem.content}`"
					data-animate={
						start: 'scroll',
						name: 'fadeIn'
					}
				)

				sect-nav.animate(
					v-if="catalogueItem.sectNavItems"
					:items="catalogueItem.sectNavItems"
					data-animate={
						start: 'scroll',
						name: 'fadeInUp',
						targets: '.item__link'
					}
				)

				.row.justify-content-center.justify-content-md-start.animate(
					data-animate={
						start: 'scroll',
						name: 'fadeIn',
						targets: '.col'
					}
				)
					.col.col-auto.mw-100
						btn-primary(
							type="a"
							href=""
						) Перейти в каталог

					.col.col-auto.mw-100
						btn-primary(
							type="a"
							href=""
						) Нужна консультация

			.col.col-12.col-md-6
				.img-items(v-if="catalogueItem.imgItems")
					figure.img-item(
						v-for="imgItem in catalogueItem.imgItems"
						:key="imgItem.id"
						:class="{'img-item--single': catalogueItem.imgItems.length === 1}"
					)
						img.__elem.animate(
							:src="imgItem.src"
							:alt="imgItem.title"
							:title="imgItem.title"
							data-animate={
								start: 'load',
								name: 'fadeIn'
							}
						)

						figcaption.__caption(v-if="catalogueItem.imgItems.length > 1") {{ imgItem.title }}
</template>

<script>
	import animate from '../js/animate';
	import SectNav from './SectNav';
	import BtnPrimary from './BtnPrimary';

	export default {
		name: "CatalogueItem",
		components: {
			SectNav,
			BtnPrimary,
		},
		props: {
			catalogueItem: {
				type: Object,
				default() {
					return {
						id: 0,
						title: '',
						content: '',
						sectNavItems: null,
						imgItems: null,
					};
				},
			},
			index: Number,
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
	.catalogue-item {
		@include reset;
	}

	.row {
		margin-bottom: -2rem;
	}

	.col {
		margin-bottom: 2rem;
	}

	.content {
		margin-bottom: 3rem;
	}

	.sect-nav {
		margin-bottom: 3rem;
	}

	.img-items {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		margin: -1rem;
	}

	.img-item {
		@include reset;

		position: relative;
		padding: 1rem;
		max-width: calc(100% - 200px);

		@media (--lt-sm) {
			max-width: calc(100% - 150px);
		}

		&:nth-child(2) {
			margin-top: 120px;

			.img-item__caption {
				left: auto;
				right: 100%;
				top: auto;
				bottom: 0;
				padding-top: 4.5rem;
				padding-bottom: 0;
				transform: translate(1rem, -1rem);

				&::before {
					top: 0;
					bottom: auto;
				}

				&::after {
					top: 0;
					bottom: auto;
					transform: rotateY(180deg);
					transform-origin: 100% 50%;
				}
			}
		}

		&__elem {
			display: block;
			width: 100%;
		}

		&__caption {
			@include reset;

			position: absolute;
			left: 100%;
			top: 0;
			z-index: 1;
			padding-bottom: 4.5rem;
			min-width: 200px;
			max-width: 100%;
			font-size: var(--content-font-size);
			line-height: 1.25;
			text-align: center;
			color: var(--content-color);
			transform: translate(-1rem, 1rem);

			@media (--lt-sm) {
				min-width: 150px;
				font-size: 14px;
			}

			&::before {
				content: "";
				position: absolute;
				right: 50%;
				bottom: 0;
				width: 1px;
				height: 4rem;
				background-color: var(--content-color);
			}

			&::after {
				content: "";
				position: absolute;
				right: 50%;
				bottom: 0;
				width: 4rem;
				height: 1px;
				background-color: var(--content-color);
			}
		}

		&--single {
			max-width: 100%;

			@media (--lt-sm) {
				max-width: 100%;
			}
		}
	}
</style>
