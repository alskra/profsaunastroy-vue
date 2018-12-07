<template lang="pug">
	nav.page-breadcrumbs(v-if="breadcrumb.label")
		.item(v-for="parent in breadcrumb.parents")
			router-link.__label(:to="{name: parent}")
				| {{ $router.match({name: parent}).matched.pop().meta.breadcrumb || parent }}

			span.__delimiter >

		.item
			router-link.__label(to="") {{ breadcrumb.label }}
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
		}
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
			cursor: pointer;
			transition: color 0.15s ease-in-out;

			&:hover {
				color: var(--content-link-color);
			}
		}

		&__delimiter {
			display: inline;
			padding: 0 0.25rem;
			color: var(--content-headings-color);
		}
	}
</style>
