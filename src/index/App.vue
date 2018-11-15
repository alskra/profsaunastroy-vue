<template lang="pug">
	#app
		page-header
		project-sect
		request-sect
		page-footer
</template>

<script>
	import PageHeader from '../components/PageHeader';
	import PageFooter from '../components/PageFooter';
	import ProjectSect from '../components/ProjectSect';
	import RequestSect from '../components/RequestSect';

	export default {
		name: "App",
		components: {
			PageHeader,
			PageFooter,
			ProjectSect,
			RequestSect,
		}
	}
</script>

<style lang="scss" scoped>

</style>
