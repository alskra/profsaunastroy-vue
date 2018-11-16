<template lang="pug">
	section.start-sect
		.slides(ref="slickCarousel")
			article.slide-item(
				v-for="slideItem in slides"
				:key="slideItem.id"
				:style="{backgroundImage: `url(${slideItem.imageUrl})`}"
				ref="slideItem"
			)
				.__container.container
					.__row.row
						.__col.col-lg-8
							h1.__title.animate.animate-text(
								data-animate={
									name: 'lettersFadeInUp'
								}
							) {{ slideItem.title }}
							a.__url.animate(
								:href="slideItem.url"
								data-animate={
									name: 'fadeInUp',
									delayStart: 200
								}
							) Перейти к услуге >

		.container-fluid
			.slides-counter
				.__current(ref="currentSlide")
				.__total {{ slides.length < 10 ? '0' + slides.length : slides.length }}
</template>

<script>
	import $ from 'jquery';
	import 'slick-carousel/slick/slick.scss';
	import 'slick-carousel';
	import animate from '../js/animate';

	export default {
		name: "StartSect",
		data() {
			return {
				slides: [
					{
						id: 1,
						imageUrl: 'upload/slides/h-17.jpg',
						title: 'Отделка парилок, саун и бань',
						url: '',
					},
					{
						id: 2,
						imageUrl: 'upload/slides/bois-metal-pattes-x.jpg',
						title: 'Мебель в стиле лофт на заказ',
						url: '',
					},
					{
						id: 3,
						imageUrl: 'upload/slides/01-himalayan-salt-room-o-Credit-Art-of-Sauna-one-time-use-only-1024.jpg',
						title: 'Соляная комната',
						url: '',
					},
				],
			};
		},
		mounted() {
			animate.update();

			const $slickCarousel = $(this.$refs.slickCarousel);

			const slickCarouselOptions = {
				arrows: false,
				fade: true,
				speed: 300,
				autoplay: false,
				autoplaySpeed: 3000,
				infinite: true,
				initialSlide: 0,
			};

			$slickCarousel
				.on('init', () => {
					const currentSlide = slickCarouselOptions.initialSlide;

					currentSlide + 1 < 10 ? this.$refs.currentSlide.textContent = '0' + (currentSlide + 1)
						: currentSlide + 1;

					for (let elem of this.$refs.slideItem[currentSlide].querySelectorAll('.animate')) {
						animate.start(elem, {delayStart: 500});
					}
				})
				.slick(slickCarouselOptions)
				.on('beforeChange', (evt, slick, currentSlide, nextSlide) => {
					nextSlide + 1 < 10 ? this.$refs.currentSlide.textContent = '0' + (nextSlide + 1) : nextSlide + 1;
				})
				.on('afterChange', (evt, slick, currentSlide) => {
					for (let elem of this.$el.querySelectorAll('.animate--completed')) {
						elem.classList.remove('animate--completed');
					}

					for (let elem of this.$refs.slideItem[currentSlide].querySelectorAll('.animate')) {
						animate.start(elem);
					}
				});
		},
		updated() {
			animate.update();
		},
	}
</script>

<style lang="scss" scoped>
	.start-sect {
		@include reset;

		position: relative;
		background-color: var(--content-color);
	}

	.container-fluid {
		@media (--lt-xl) {
			max-width: env(--lg);
		}
	}

	.slides-counter {
		position: absolute;
		top: calc(3.5rem + 20vh);
		display: flex;
		font-weight: 300;
		line-height: 1.25;
		color: var(--page-background-color);

		@media (--lt-xl) {
			top: 20vh;
		}

		&__current {
			font-size: 18px;
			transform: translateY(0.18em);

			&::after {
				content: "/";
			}
		}

		&__total {
			font-size: 34px;
		}
	}

	.slides {

	}

	.slide-item {
		position: relative;
		padding: 3.5rem 0;
		height: 100vh;
		background: none no-repeat 50% 50%/cover;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(2, 2, 2, 0.43);
		}

		&__container {
			position: relative;
			padding-top: 20vh;
			height: 100%;
		}

		&__title {
			@include reset;

			overflow: hidden;
			margin-bottom: 0.5em;
			max-height: 3 * 1.25em;
			font-weight: 500;
			font-size: 72px / 1080px * 100vh;
			line-height: 1.25;
			color: var(--page-background-color);
		}

		&__url {
			@include reset;

			display: inline;
			font-size: 14px;
			line-height: 1.25;
			color: var(--page-background-color);
			transition: color 0.15s ease-in-out;
			cursor: pointer;
		}
	}
</style>
