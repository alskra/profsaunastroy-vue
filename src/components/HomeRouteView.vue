<template lang="pug">
	main.home-route-view
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
	export default {
		name: 'HomeRouteView',
	}
</script>

<style lang="scss" scoped>
	.home-route-view {
		@include reset;

		margin-top: -3.5rem;
	}
</style>
