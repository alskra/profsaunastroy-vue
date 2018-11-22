<template lang="pug">
	.err.py-5
		.container
			.content
				h1 404 - Not Found
				p
					router-link(:to="{name: 'home'}") To Home Page
</template>

<script>
	const baseUrl = process.env.BASE_URL;

	export default {
		name: "NotFoundPage",
		data () {
			return {
				baseUrl,
			};
		},
	}
</script>

<style lang="scss" scoped>

</style>
