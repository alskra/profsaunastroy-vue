<template lang="pug">
	#app.index(:style="{paddingTop: 0}")
		page-header
		start-sect(data-page-header-theme="transparent")
		sauna-sect
		fast-links(data-page-header-theme="dark")
		catalogue-sect
		project-sect(data-page-header-theme="dark")
		request-sect
		page-footer(data-page-header-theme="dark")
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import StartSect from '../../components/StartSect';
	import SaunaSect from '../../components/SaunaSect';
	import FastLinks from '../../components/FastLinks';
	import CatalogueSect from '../../components/CatalogueSect';
	import ProjectSect from '../../components/ProjectSect';
	import RequestSect from '../../components/RequestSect';
	import PageFooter from '../../components/PageFooter';

	export default {
		name: "App",
		components: {
			PageHeader,
			StartSect,
			SaunaSect,
			FastLinks,
			CatalogueSect,
			ProjectSect,
			RequestSect,
			PageFooter,
		},
	}
</script>

<style lang="scss" scoped>

</style>
