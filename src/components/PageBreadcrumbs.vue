<template lang="pug">
	nav.page-breadcrumbs(v-if="currentLabel")
		.item(v-for="parent in breadcrumb.parents")
			router-link.__label(:to="{name: parent, params: $route.params}")
				| {{ getParentLabel(parent) }}

			span.__delimiter >

		.item
			span.__label {{ currentLabel }}
</template>

<script>
	export default {
		name: 'PageBreadcrumbs',
		props: {
			breadcrumb: {
				type: Object,
				default() {
					return {};
				},
			},
		},
		computed: {
			currentLabel() {
				if (this.breadcrumb.hasOwnProperty('label')) {
					return this.breadcrumb.label;
				}

				const matchedRouteRecord = this.$route.matched.slice().pop();

				return matchedRouteRecord.meta.breadcrumb || matchedRouteRecord.name;
			}
		},
		methods: {
			getParentLabel(parent) {
				const matchedRouteRecord = this.$router.match({
					name: parent,
					params: this.$route.params,
				}).matched.slice().pop();

				return matchedRouteRecord.meta.breadcrumb || matchedRouteRecord.name;
			},
		},
	}
</script>

<style lang="scss" scoped>
	.page-breadcrumbs {
		@include reset;
	}

	.item {
		display: inline;

		&__label {
			@include reset;

			display: inline;
			font-weight: 300;
			font-size: calc(var(--content-font-size) * 14 / 16);
			color: var(--content-headings-color);
			cursor: default;

			&:any-link {
				cursor: pointer;
				transition: color 0.15s ease-in-out;

				&:hover {
					color: var(--content-link-color);
				}
			}
		}

		&__delimiter {
			display: inline;
			padding: 0 0.25rem;
			color: var(--content-headings-color);
		}
	}
</style>
