<template lang="pug">
	main.home-page(v-if="err || data")
		.err(v-if="err") {{ err }}

		template(v-else)
			router-view(
				name="StartSect"
				data-page-header-theme="transparent"
			)

			router-view(name="SaunaSect")

			router-view(
				name="FastLinks"
				data-page-header-theme="dark"
			)

			router-view(name="CatalogueSect")

			router-view(
				name="ProjectSect"
				data-page-header-theme="dark"
			)

			router-view(name="RequestSect")
</template>

<script>
	import MixinPage from './MixinPage';

	export default {
		name: 'HomePage',
		mixins: [MixinPage('/pages/home')],
	}
</script>

<style lang="scss" scoped>
	.home-page {
		@include reset;

		margin-top: -3.5rem;
	}
</style>
