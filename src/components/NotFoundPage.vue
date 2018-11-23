<template lang="pug">
	.err.py-5
		.container
			.content
				h1 404 &mdash; Страница не найдена
				p
					router-link(:to="{name: 'home'}") На главную
</template>

<script>
	export default {
		name: "NotFoundPage",
	}
</script>

<style lang="scss" scoped>

</style>
