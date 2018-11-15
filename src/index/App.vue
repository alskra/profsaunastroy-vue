<template lang="pug">
	#app
		page-header
		sauna-sect
		fast-links
		catalogue-sect
		project-sect
		request-sect
		page-footer
</template>

<script>
	import PageHeader from '../components/PageHeader';
	import SaunaSect from '../components/SaunaSect';
	import FastLinks from '../components/FastLinks';
	import CatalogueSect from '../components/CatalogueSect';
	import ProjectSect from '../components/ProjectSect';
	import RequestSect from '../components/RequestSect';
	import PageFooter from '../components/PageFooter';

	export default {
		name: "App",
		components: {
			PageHeader,
			SaunaSect,
			FastLinks,
			CatalogueSect,
			ProjectSect,
			RequestSect,
			PageFooter,
		}
	}
</script>

<style lang="scss" scoped>

</style>
