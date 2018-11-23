<template lang="pug">
	.err.py-5
		.container(@click="click(88)")
			.content
				h1 404 &mdash; Страница не найдена
				p
			btn-primary(
				type="a"

				@click="click(45)"
			)
				| На главную
</template>

<script>
	import BtnPrimary from './BtnPrimary';

	export default {
		name: "NotFoundPage",
		components: {
			BtnPrimary,
		},
		data () {
			return {
				baseUrl: process.env.BASE_URL,
			};
		},
		methods: {
			click (param) {
				alert(param);
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>
