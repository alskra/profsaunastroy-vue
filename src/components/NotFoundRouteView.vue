<template lang="pug">
	main.not-found-route-view
		.container
			.content
				h1 404 &mdash; Страница не найдена
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
		name: 'NotFoundRouteView',
		components: {
			BtnPrimary,
		},
	}
</script>

<style lang="scss" scoped>
	.not-found-route-view {
		@include reset;

		padding: 6rem;

		@media (--lt-md) {
			padding: 3rem 0;
		}
	}
</style>
