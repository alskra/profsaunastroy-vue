<template lang="pug">
	#app
		page-header
		router-view
		page-footer(
			v-if="showFooter"
			data-page-header-theme="dark"
		)
</template>

<script>
	import PageHeader from './PageHeader';
	import PageFooter from './PageFooter';

	export default {
		name: 'App',
		components: {
			PageHeader,
			PageFooter,
		},
		data() {
			return {
				showFooter: false,
			};
		},
		metaInfo: {
			title: null,
			titleTemplate: (titleChunk) =>
				titleChunk ? `${titleChunk} — ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE,
			htmlAttrs: {lang: 'ru'},
			base: {href: process.env.BASE_URL},
			meta: [
				{charset: 'utf-8'},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				},
			],
			link: [
				{
					rel: 'favicon',
					href: 'favicon.ico',
				},
			],
			noscript: [
				{innerHTML: 'This website requires JavaScript.'},
			],
		},
		beforeCreate() {
			this.$router.afterEach(() => {
				this.showFooter = true;
			});
		},
	}
</script>

<style lang="scss">
	#app {
		@include reset;

		display: flex;
		flex-flow: column;
		padding-top: 3.5rem;
		min-width: 320px;
		min-height: 100vh;
		background-color: var(--page-background-color);

		> :not(.page-header) {
			@media (--lt-md) {
				transition: transform var(--page-header-transition) !important;
			}
		}
	}
</style>
