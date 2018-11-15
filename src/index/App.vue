<template lang="pug">
	#app
		page-header
		fast-links
		catalogue-sect
		project-sect
		request-sect
		page-footer
</template>

<script>
	import PageHeader from '../components/PageHeader';
	import PageFooter from '../components/PageFooter';

	import FastLinks from '../components/FastLinks';
	import CatalogueSect from '../components/CatalogueSect';
	import ProjectSect from '../components/ProjectSect';
	import RequestSect from '../components/RequestSect';

	export default {
		name: "App",
		components: {
			PageHeader,
			PageFooter,

			FastLinks,
			CatalogueSect,
			ProjectSect,
			RequestSect,
		}
	}
</script>

<style lang="scss" scoped>

</style>
