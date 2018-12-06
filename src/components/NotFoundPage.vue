<template lang="pug">
	main.not-found-page
		.container
			.content
				h1 {{ title }}
				p

			btn-primary(
				el="router-link"
				:to="{name: 'Home'}"
			)
				| На главную
</template>

<script>
	import BtnPrimary from './BtnPrimary';

	export default {
		name: 'NotFoundPage',
		components: {
			BtnPrimary,
		},
		data() {
			return {
				title: '404: Страница не найдена',
			};
		},
		metaInfo() {
			return {
				title: this.title,
			};
		},
	}
</script>

<style lang="scss" scoped>
	.not-found-page {
		@include reset;

		padding: 6rem 0;

		@media (--lt-md) {
			padding: 3rem 0;
		}
	}
</style>
