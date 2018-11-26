<template lang="pug">
	main.not-found-page
		.container
			.content
				h1 404 &mdash; Страница не найдена
				p

			btn-primary(el="router-link")
				| На главную
</template>

<script>
	import BtnPrimary from './BtnPrimary';

	export default {
		name: "NotFoundPage",
		components: {
			BtnPrimary,
		},
	}
</script>

<style lang="scss" scoped>
	.not-found-page {
		padding: 6rem;

		@media (--lt-md) {
			padding: 3rem 0;
		}
	}
</style>
