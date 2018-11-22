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

		.container-fluid.--lt-xl-fix
			.slides-counter
				.__current(ref="currentSlide")
				.__total {{ slides.length < 10 ? '0' + slides.length : slides.length }}

		.slides-nav.container-fluid
			.__items
				.__item(
					v-for="(slideItem, index) in slides"
					:key="slideItem.id"
					@click="slickGoTo(index)"
					ref="navItem"
					:style="{maxWidth: 100 / slides.length + '%'}"
				)
					.__item-num {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
					.__item-title {{ slideItem.title }}

</template>

<script>
	import $ from 'jquery';
	import 'slick-carousel/slick/slick.scss';
	import 'slick-carousel';
	import animate from '../js/animate';

	export default {
		name: "StartSect",
		data () {
			return {
				slickCarouselOptions: {
					arrows: false,
					fade: true,
					cssEase: 'ease-in-out',
					speed: 500,
					autoplay: true,
					autoplaySpeed: 7000,
					pauseOnHover: false,
					infinite: true,
					initialSlide: 0,
				},
				slides: [],
			};
		},
		methods: {
			updateRenderedDOM () {
				animate.update();

				$(this.$refs.slickCarousel)
					.on('init', () => {
						const currentSlide = this.slickCarouselOptions.initialSlide;

						if (currentSlide < this.slides.length) {
							currentSlide + 1 < 10 ? this.$refs.currentSlide.textContent = '0' + (currentSlide + 1)
								: currentSlide + 1;

							this.$refs.navItem[currentSlide].classList.add('slides-nav__item--current');

							for (let elem of this.$refs.slideItem[currentSlide].querySelectorAll('.animate')) {
								animate.start(elem, {delayStart: 500});
							}
						}
					})
					.on('beforeChange', (evt, slick, currentSlide, nextSlide) => {
						nextSlide + 1 < 10 ? this.$refs.currentSlide.textContent = '0' + (nextSlide + 1) : nextSlide + 1;

						this.$refs.navItem.forEach((elem, index) => {
							if (index === nextSlide) {
								elem.classList.add('slides-nav__item--current');
							} else {
								elem.classList.remove('slides-nav__item--current');
							}
						});
					})
					.on('afterChange', (evt, slick, currentSlide) => {
						for (let elem of this.$el.querySelectorAll('.animate--completed')) {
							elem.classList.remove('animate--completed');
						}

						for (let elem of this.$refs.slideItem[currentSlide].querySelectorAll('.animate')) {
							animate.start(elem);
						}
					})
					.slick(this.slickCarouselOptions);
			},
			slickGoTo(index) {
				$(this.$refs.slickCarousel).slick('slickGoTo', index);
			},
		},
		created () {
			// Get data async
			setTimeout(() => {
				this.slides = [
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
				];
			}, 100);
		},
		mounted () {
			this.updateRenderedDOM();
		},
		beforeUpdate () {
			$(this.$refs.slickCarousel).slick('unslick');
		},
		updated () {
			this.updateRenderedDOM();
		},
		beforeDestroy () {
			$(this.$refs.slickCarousel).slick('unslick');
		},
	}
</script>

<style lang="scss" scoped>
	.start-sect {
		@include reset;

		margin-top: -3.5rem;
		position: relative;
		background-color: var(--content-color);
	}

	.container-fluid {
		&--lt-xl-fix {
			@media (--lt-xl) {
				max-width: env(--lg);
			}
		}
	}

	.slides-counter {
		position: absolute;
		top: calc(3.5rem + 20vh);
		display: flex;
		font-weight: 300;
		font-size: 18px;
		line-height: 1.25;
		color: white;
		user-select: none;

		@media (--lt-xl) {
			top: 20vh;
		}

		@media (--lt-md) {
			font-size: 16px;
		}

		&__current {
			transform: translateY(0.22em);

			&::after {
				content: "/";
			}
		}

		&__total {
			font-size: 34px / 18px * 1em;
		}
	}

	.slides-nav {
		position: absolute;
		bottom: 2rem;
		user-select: none;
		pointer-events: none;

		&__items {
			margin: -1rem;
			display: flex;
			justify-content: flex-end;

			@media (--lt-md) {
				margin: -0.5rem;
			}
		}

		&__item {
			padding: 1rem;
			display: flex;
			flex-flow: column;
			font-weight: 300;
			font-size: 14px;
			line-height: 1.25;
			color: white;
			cursor: pointer;
			pointer-events: auto;

			@media (--lt-md) {
				padding: 0.5rem;
				font-size: 12px;
			}

			&::after {
				content: "";
				margin-top: auto;
				display: block;
				width: 0;
				height: 1px;
				background-color: currentColor;
			}

			&--current {
				&::after {
					width: 26px;
					transition: width 0.5s ease-in-out;
				}
			}

			&-num {
				font-size: 18px / 14px * 1em;
				margin-bottom: 0.5rem;
			}

			&-title {
				margin-bottom: 0.75rem;
				overflow: hidden;
				max-height: 2 * 1.25em;
			}
		}
	}

	.slides {
		height: 100vh;
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
			color: white;
		}

		&__url {
			@include reset;

			display: inline;
			font-size: 14px;
			line-height: 1.25;
			color: white;
			transition: color 0.15s ease-in-out;
			cursor: pointer;
		}
	}
</style>
