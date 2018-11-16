<template lang="pug">
	section.start-sect
		.slides(
			ref="slickCarousel"
			data-slick={
				fade: true
			}
		)
			article.slide-item(
				v-for="slideItem in slides"
				:key="slideItem.id"
				:style="{backgroundImage: `url(${slideItem.imageUrl})`}"
			)
				.__container.container
					.__row.row
						.__col.col-lg-8
							h1.__title {{ slideItem.title }}
							a.__url(:href="slideItem.url") Перейти к услуге >
</template>

<script>
	import $ from 'jquery';
	import 'slick-carousel/slick/slick.scss';
	import 'slick-carousel';

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
				],
			};
		},
		mounted() {
			$(this.$refs.slickCarousel).slick();
		},
	}
</script>

<style lang="scss" scoped>
	.start-sect {
		@include reset;

		background-color: var(--content-color);
	}

	.slides {

	}

	.slide-item {
		position: relative;
		padding-top: 4.5rem;
		padding-bottom: 4.5rem;
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
			cursor: pointer;
		}
	}
</style>
