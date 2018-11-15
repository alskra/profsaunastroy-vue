<template lang="pug">
	nav.sect-nav
		.items
			.item(
				v-for="item in items"
				:key="item.id"
			)
				a.__link(:href="item.url") {{ item.title }}
</template>

<script>
	export default {
		name: "SectNav",
		props: {
			items: {
				type: Array,
				default() {
					return [];
				},
			},
		},
	}
</script>

<style lang="scss" scoped>
	.sect-nav {
		@include reset;

		overflow: hidden;
	}

	.items {
		column-width: 240px;
		column-gap: 2rem;
		margin-bottom: -1.5rem;
	}

	.item {
		page-break-inside: avoid;
		padding-bottom: 1.5rem;

		&__link {
			@include reset;

			font-weight: 500;
			font-size: 16px;
			line-height: 1.25;
			color: #141414;
			transition: color 0.15s ease-in-out;
			cursor: pointer;

			&:hover {
				color: var(--content-color);
			}
		}
	}
</style>
