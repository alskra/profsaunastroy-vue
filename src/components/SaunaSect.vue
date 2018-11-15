<template lang="pug">
	section.sauna-sect.animate(
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
			.row.justify-content-lg-center
				.col.col-12.col-lg-10
					h2.title.animate.animate-text(
						data-animate={
							start: 'scroll',
							name: 'lettersFadeInUp'
						}
					) {{ title }}

				.col.col-12.col-lg-10
					.content.animate(
						v-html="content"
						data-animate={
							start: 'scroll',
							name: 'fadeIn'
						}
					)

		.running-string
			.__line {{ runningString }}
</template>

<script>
	import animate from '../js/animate';

	export default {
		name: "SaunaSect",
		data() {
			return {
				title: 'Финская сауна в вашем доме с ProfSaunaStroy',
				content: `
					<p>Мы занимаемся отделкой финских саун и бань по стандартным и индивидуальным проектам.
					Мы специализируемся на качественной отделке деревянных, кирпичных и пеноблочных бань,
					а также предоставляем услуги по изготовлению мебели в стиле лофт на заказ.
					Работая с нами вы получаете качественый продукт в максимально короткие сроки.</p>

					<p>Компания Профсаунастрой на рынке с 2006 года.
					В нашем портфолио множество реализованных проектов по строитеству и отделе саун и бань разной степени сложности.</p>
				`,
				runningString: 'Интерьер для саун и бань, проектирование',
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
	@keyframes running-string {
		from {
			margin-left: calc(100% + 1rem);
			transform: translateX(0);
		}

		to {
			margin-left: -1rem;
			transform: translateX(-100%);
		}
	}

	.sauna-sect {
		@include reset;

		position: relative;
		overflow: hidden;
		padding: 12rem 0;
		background-color: var(--page-background-color);

		@media (--lt-md) {
			padding: 4rem 0;
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
			top: 4rem;
		}

		/deep/ .animate__word {
			transform: translateX(-0.35em);
		}
	}

	.container {
		position: relative;
	}

	.title {
		@include reset;

		margin-bottom: var(--content-space);
		font-family: var(--content-headings-font-family);
		font-weight: var(--content-headings-font-weight);
		font-size: var(--content-h1-font-size);
		line-height: var(--content-headings-line-height);
		color: var(--content-headings-color);
	}

	.content {
		margin-bottom: 3rem;

		@media (--gte-md) {
			column-count: 2;
			column-gap: 2rem;
		}

		/deep/ p {
			page-break-inside: avoid;
		}
	}

	.running-string {
		display: flex;
		overflow: hidden;
		padding: 1rem;

		&__line {
			flex-shrink: 0;
			font-weight: 700;
			font-size: 150px / 1920px * 100vw;
			line-height: 1.25;
			white-space: nowrap;
			color: var(--content-headings-color);
			animation: running-string 30s linear infinite;
		}
	}
</style>
