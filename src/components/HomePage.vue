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
	import StartSect from './StartSect';
	import SaunaSect from './SaunaSect';
	import FastLinks from './FastLinks';
	import CatalogueSect from './CatalogueSect';
	import ProjectSect from './ProjectSect';
	import RequestSect from './RequestSect';

	export default {
		name: "HomePage",
		components: {
			StartSect,
			SaunaSect,
			FastLinks,
			CatalogueSect,
			ProjectSect,
			RequestSect,
		},
	}
</script>

<style lang="scss" scoped>
	.page-main {
		margin-top: -3.5rem;
	}
</style>
