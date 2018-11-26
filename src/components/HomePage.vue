<template lang="pug">
	main.home-page
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
		name: "HomePage",
	}
</script>

<style lang="scss" scoped>
	.home-page {
		margin-top: -3.5rem;
	}
</style>
