<template lang="pug">
	section.request-sect.animate(
		data-animate={
			start: 'scroll'
		}
	)
		.bg-text.animate.animate-text(
			data-animate={
				start: 'scroll',
				name: 'lettersFadeInUp',
				duration: 1000,
				delayStep: 100
			}
		) Заявка

		.container
			.row
				.col.col-12.col-md-6

				.col.col-12.col-md-6
					.content
						h2.h1.animate.animate-text(
							data-animate={
								start: 'scroll',
								name: 'lettersFadeInUp'
							}
						) Бесплатная консультация с менеджером

						.animate(
							data-animate={
								start: 'scroll',
								name: 'fadeIn'
							}
						)
							p Вы можете задать любой интересующий вас вопрос нашему менеджеру. Мы обязательно ответим Вам!

					sect-nav.animate(
						:items="sectNav"
						data-animate={
							start: 'scroll',
							name: 'fadeInUp',
							targets: '.item__link'
						}
					)

					.text-center.text-md-left.animate(
						data-animate={
							start: 'scroll',
							name: 'fadeIn',
							targets: '.btn'
						}
					)
						btn-primary.btn(
							el="router-link"
							to=""
						) Оставить заявку
</template>

<script>
	import animate from '../js/animate';
	import SectNav from './SectNav';
	import BtnPrimary from './BtnPrimary';

	export default {
		name: "RequestSect",
		components: {
			SectNav,
			BtnPrimary,
		},
		data() {
			return {
				sectNav: [
					{
						id: 1,
						title: 'Отделка финской сауны',
						url: '',
					},
					{
						id: 2,
						title: 'Отделка парилок и бань',
						url: '',
					},
					{
						id: 3,
						title: 'Стоительство финских саун, бань',
						url: '',
					},
					{
						id: 4,
						title: 'Мебель в стиле лофт',
						url: '',
					},
				],
			};
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
	.request-sect {
		@include reset;

		position: relative;
		overflow: hidden;
		padding: 12rem 0;
		background: url("../img/leafs.png")
		no-repeat
		left percentage(170px / 1920px) bottom 6rem var(--page-background-color);

		@media (--lt-md) {
			padding: 3rem 0;
			background-image: none;
		}

		&::before {
			content: "";
			position: absolute;
			left: 50%;
			top: 0;
			width: 1px;
			height: 0;
			background-color: #e0e0e0;
			transform: translate(0, 3rem);
			transition: height 1500ms ease-out;

			@media (--lt-md) {
				content: normal;
			}
		}

		&::after {
			content: "";
			position: absolute;
			left: 50%;
			top: 100%;
			width: 1px;
			height: 0;
			background-color: #e0e0e0;
			transform: translate(0, -6rem) translate(0, -3rem);
			transition: height 1500ms ease-out;

			@media (--lt-md) {
				content: normal;
			}
		}

		&.animate--started,
		&.animate--completed {
			&::before,
			&::after {
				height: 6rem;
			}
		}
	}

	.bg-text {
		position: absolute;
		left: 0;
		right: 0;
		top: 12rem;
		overflow: hidden;
		margin-top: -0.26em;
		font-weight: 700;
		font-size: 200px / 1920px * 100vw;
		line-height: 1.25;
		letter-spacing: 0.35em;
		white-space: nowrap;
		text-align: center;
		text-indent: 0.35em;
		text-transform: uppercase;
		color: #f2f2f2;
		pointer-events: none;
		user-select: none;

		@media (--lt-md) {
			top: 3rem;
		}

		/deep/ .animate__word {
			transform: translateX(-0.35em);
		}
	}

	.container {
		position: relative;
	}

	.content {
		margin-bottom: 3rem;
	}

	.sect-nav {
		margin-bottom: 3rem;
	}
</style>
