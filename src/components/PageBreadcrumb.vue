<template lang="pug">
	nav.page-breadcrumb

</template>

<script>
	export default {
		name: 'PageBreadcrumb',
	}
</script>

<style lang="scss" scoped>
	.page-breadcrumb {
		@include reset;

		.item {
			display: inline;

			&__title {
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
	}
</style>
