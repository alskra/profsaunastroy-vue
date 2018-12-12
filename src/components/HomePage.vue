<template lang="pug">
	main.home-page(v-if="err || Object.keys(page).length")
		.err.container.py-5(v-if="err") {{ err }}

		template(v-else)
			start-sect(data-page-header-theme="transparent")
			sauna-sect
			fast-links(data-page-header-theme="dark")
			catalogue-sect
			project-sect(data-page-header-theme="dark")
			request-sect
</template>

<script>
	import BasePage from './BasePage';
	import StartSect from './StartSect';
	import SaunaSect from './SaunaSect';
	import FastLinks from './FastLinks';
	import CatalogueSect from './CatalogueSect';
	import ProjectSect from './ProjectSect';
	import RequestSect from './RequestSect';

	export default {
		name: 'HomePage',
		mixins: [BasePage],
		components: {
			StartSect,
			SaunaSect,
			FastLinks,
			CatalogueSect,
			ProjectSect,
			RequestSect,
		},
		data() {
			return {
				apiUrl: '/home',
			};
		},
	}
</script>

<style lang="scss" scoped>
	.home-page {
		@include reset;

		margin-top: -3.5rem;
	}
</style>
