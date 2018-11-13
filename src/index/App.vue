<template lang="pug">
	#app
		page-header
		page-footer
</template>

<script>
	import PageHeader from '../components/PageHeader';
	import PageFooter from '../components/PageFooter';

	export default {
		name: "App",
		components: {
			PageHeader,
			PageFooter,
		}
	}
</script>

<style lang="scss" scoped>

</style>
