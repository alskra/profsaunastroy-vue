<template lang="pug">
	#app
		vue-progress-bar
		page-header
		router-view

		page-footer(
			v-show="!$Progress.loading"
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
			return {};
		},
		metaInfo: {
			title: null,
			titleTemplate: (titleChunk) =>
				titleChunk ? `${titleChunk} — ${process.env.VUE_APP_TITLE}` : process.env.VUE_APP_TITLE,
			htmlAttrs: {
				class: 'page',
				lang: 'ru',
			},
			bodyAttrs: {
				class: 'page-body',
			},
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
		created() {
			this.$Progress.start();
			this.$Progress.loading = true;

			this.$router.beforeEach((to, from, next) => {
				if (to.meta.progress !== undefined) {
					let meta = to.meta.progress;

					this.$Progress.parseMeta(meta);
				}

				this.$Progress.start();
				this.$Progress.loading = true;
				next();
			});

			this.$router.afterEach(() => {
				this.$Progress.finish();
			});
		},
		mounted() {
			this.$Progress.finish();
		},
	}
</script>

<style lang="scss" scoped>
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

	.fade {
		&-enter-active {
			transition: opacity 0.15s ease-in-out !important;
		}

		&-enter,
		&-leave-to {
			opacity: 0 !important;
		}
	}
</style>
