<template lang="pug">
	main.page-main-not-found
		.container
			.content
				h1 404: Страница не найдена
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
		name: 'PageMainNotFound',
		components: {
			BtnPrimary,
		},
	}
</script>

<style lang="scss" scoped>
	.page-main-not-found {
		@include reset;

		padding: 6rem;

		@media (--lt-md) {
			padding: 3rem 0;
		}
	}
</style>
