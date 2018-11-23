<template lang="pug">
	main.page-main
		start-sect(data-page-header-theme="transparent")
		sauna-sect
		fast-links(data-page-header-theme="dark")
		catalogue-sect
		project-sect(data-page-header-theme="dark")
		request-sect
</template>

<script>
	export default {
		name: "HomePage",
		components: {
			StartSect: () => import('./StartSect'),
			SaunaSect: () => import('./SaunaSect'),
			FastLinks: () => import('./FastLinks'),
			CatalogueSect: () => import('./CatalogueSect'),
			ProjectSect: () => import('./ProjectSect'),
			RequestSect: () => import('./RequestSect'),
		},
	}
</script>

<style lang="scss" scoped>
	.page-main {
		margin-top: -3.5rem;
	}
</style>
