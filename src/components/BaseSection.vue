<template lang="pug">
	section.section.--head.animate(
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
		)
			slot(name="bg-text")

		.container
			slot(name="breadcrumbs")

			.row
				.col.col-12.col-md-6.col-lg-5.offset-lg-1
					.content
						h1.animate.animate-text(
							data-animate={
								start: 'scroll',
								name: 'lettersFadeInUp'
							}
						)
							slot(name="title")

						.animate(
							data-animate={
								start: 'scroll',
								name: 'fadeIn'
							}
						)
							slot(name="body")
</template>

<script>
	export default {
		name: 'BaseSection',
	}
</script>

<style lang="scss" scoped>
	.section {
		@include reset;

		position: relative;
		overflow: hidden;
		padding: 12rem 0;
		background: none
		no-repeat
		left percentage(170px / 1920px) bottom 6rem
		var(--page-background-color);

		@media (--lt-md) {
			padding: 2rem 0;
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

		.content {
			margin-bottom: 3rem;
		}

		.sect-nav {
			margin-bottom: 3rem;
		}

		&.animate--started,
		&.animate--completed {
			&::before,
			&::after {
				height: 6rem;
			}
		}

		&--head {
			padding-top: 3rem;

			@media (--lt-md) {
				padding-top: 2rem;
			}

			&::before {
				content: normal;
			}

			.bg-text {
				top: 6rem;

				@media (--lt-md) {
					top: 4rem;
				}
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
			top: 2rem;
		}

		/deep/ .animate__word {
			transform: translateX(-0.35em);
		}
	}

	.container {
		position: relative;
	}
</style>
