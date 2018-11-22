<template lang="pug">
	.page-app
		page-header

		//- 404
		template
			router-view

		//- home
		template
			router-view(
				name="StartSect"
				data-page-header-theme="transparent"
			)
			router-view(name="SaunaSect")
			router-view(
				name="FastLinks"
				data-page-header-theme="dark"
			)
			router-view(name="CatalogueSect")
			router-view(
				name="ProjectSect"
				data-page-header-theme="dark"
			)
			router-view(name="RequestSect")

		page-footer(data-page-header-theme="dark")
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import PageFooter from '../../components/PageFooter';

	export default {
		name: "App",
		components: {
			PageHeader,
			PageFooter,
		},
	}
</script>

<style lang="scss">
	.page-app {
		display: flex;
		flex-flow: column;
		padding-top: 3.5rem;
		min-width: 320px;
		min-height: 100vh;
		background-color: var(--page-background-color);

		> :not(.page-header) {
			@media (--lt-md) {
				transition: transform var(--page-header-transition);
			}
		}
	}
</style>
