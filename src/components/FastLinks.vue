<template lang="pug">
	.fast-links
		template(v-for="(fastLinkItem, index) in fastLinks")
			section.item(:key="fastLinkItem.id")
				.__bg(
					:class="`item__bg--${index + 1}`"
					:style="{backgroundImage: `url(${fastLinkItem.imageUrl})`}"
				)

				.__content(:class="`item__content--${index + 1}`")
					.__scope.animate(
						:data-animate=`JSON.stringify({
							start: 'scroll',
							name: 'fadeInUp',
							delayStart: index * 200
						})`
					)
						h2.__content-title {{ fastLinkItem.title }}
						p.__content-desc {{ fastLinkItem.desc }}

					router-link.__content-link(:to="fastLinkItem.url")

			.bg(
				:key="fastLinkItem.id + '-bg'"
				:style="{backgroundImage: `url(${fastLinkItem.imageUrl})`}"
			)
</template>

<script>
	export default {
		name: "FastLinks",
		data() {
			return {
				fastLinks: [
					{
						id: 1,
						imageUrl: 'upload/fast-links/loft.jpg',
						title: 'Мебель в стиле лофт',
						desc: 'Изготовление на заказ',
						url: '',
					},
					{
						id: 2,
						imageUrl: 'upload/fast-links/build.jpg',
						title: 'Отделка парилок, саун и бань',
						desc: '',
						url: '',
					},
					{
						id: 3,
						imageUrl: 'upload/fast-links/salt.jpg',
						title: 'Соляная комната',
						desc: 'Розовая гималайская соль',
						url: '',
					},
				],
			};
		},
	}
</script>

<style lang="scss" scoped>
	.fast-links {
		@include reset;

		position: relative;
		display: flex;
		overflow: hidden;
		min-height: 100vh;
		background-color: var(--content-color);

		@media (orientation: portrait) {
			flex-direction: column;
			min-height: 0;
		}

		&:hover {
			.item {
				.item__bg {
					@media (orientation: landscape) {
						opacity: 0;
					}
				}

				+ .bg {
					@media (orientation: landscape) {
						transition: opacity 0.5s ease-in-out;
					}
				}

				&:hover {
					.item__bg {
						@media (orientation: landscape) {
							transition: opacity 0s 0.5s;
						}
					}

					+ .bg {
						@media (orientation: landscape) {
							z-index: 2;
							opacity: 1;
						}
					}
				}

				&:not(:hover) {
					.item__content {
						opacity: 0.5;
					}
				}
			}
		}
	}

	.item {
		position: relative;
		z-index: 3;
		overflow: hidden;
		width: percentage(1 / 3);

		@media (orientation: portrait) {
			width: 100%;
		}

		&__bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			height: 100%;
			background: none no-repeat 50% 50%/cover;
			transition: opacity 0.5s ease-in-out;

			&::before {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(26, 26, 26, 0.5);
			}

			&--2 {
				left: -100%;

				@media (orientation: portrait) {
					left: 0;
				}
			}

			&--3 {
				left: -200%;

				@media (orientation: portrait) {
					left: 0;
				}
			}
		}

		&__content {
			position: relative;
			display: flex;
			flex-flow: column;
			justify-content: center;
			padding: 1rem;
			height: 100%;
			transition: opacity 0.5s ease-in-out;

			@media (orientation: portrait) {
				min-height: 1 / 3 * 100vh;
			}

			&-title {
				@include reset;

				font-weight: var(--content-headings-font-weight);
				font-size: var(--content-h1-font-size);
				line-height: var(--content-headings-line-height);
				text-align: center;
				color: var(--page-background-color);
			}

			&-desc {
				@include reset;

				font-weight: 300;
				font-size: calc(var(--content-font-size) * 24 / 16);
				line-height: 1.25;
				text-align: center;
				color: var(--page-background-color);
			}

			&-link {
				@include reset;

				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				cursor: pointer;
			}

			&--2,
			&--3 {
				border-left: 1px solid rgba(white, 0.2);

				@media (orientation: portrait) {
					border-left: 0;
					border-top: 1px solid rgba(white, 0.2);
				}
			}
		}
	}

	.bg {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		width: 100vw;
		height: 100%;
		background: none no-repeat 50% 50%/cover;
		opacity: 0;
		transition: opacity 0s 0.5s;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(26, 26, 26, 0.5);
		}
	}
</style>
