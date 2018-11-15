<template lang="pug">
	#app
		page-header
		request-sect
		page-footer
</template>

<script>
	import PageHeader from '../components/PageHeader';
	import PageFooter from '../components/PageFooter';
	import RequestSect from '../components/RequestSect';

	export default {
		name: "App",
		components: {
			PageHeader,
			PageFooter,
			RequestSect,
		}
	}
</script>

<style lang="scss" scoped>

</style>
