<template lang="pug">
	main
		start-sect(data-page-header-theme="transparent")
		sauna-sect
		fast-links(data-page-header-theme="dark")
		catalogue-sect
		project-sect(data-page-header-theme="dark")
		request-sect
</template>

<script>
	import StartSect from './StartSect';
	// import SaunaSect from './SaunaSect';
	// import FastLinks from './FastLinks';
	// import CatalogueSect from './CatalogueSect';
	// import ProjectSect from './ProjectSect';
	// import RequestSect from './RequestSect';

	export default {
		name: "HomePage",
		components: {
			StartSect,
			SaunaSect: () => import('./SaunaSect'),
			FastLinks: () => import('./FastLinks'),
			CatalogueSect: () => import('./CatalogueSect'),
			ProjectSect: () => import('./ProjectSect'),
			RequestSect: () => import('./RequestSect'),
		},
	}
</script>

<style lang="scss" scoped>

</style>
