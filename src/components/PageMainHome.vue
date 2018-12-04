<template lang="pug">
	main.page-main-home
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
		name: 'PageMainHome',
	}
</script>

<style lang="scss" scoped>
	.page-main-home {
		@include reset;

		margin-top: -3.5rem;
	}
</style>
