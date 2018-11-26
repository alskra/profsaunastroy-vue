<template lang="pug">
	.page-app
		page-header
		router-view
		page-footer(
			v-if="showFooter"
			data-page-header-theme="dark"
		)
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
		data () {
			return {
				showFooter: false,
			};
		},
		beforeCreate () {
			this.$router.afterEach(() => {
				this.showFooter = true;
			});
		},
	}
</script>

<style lang="scss">
	.page-app {
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
