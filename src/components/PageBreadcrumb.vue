<template lang="pug">
	nav.page-breadcrumb(v-if="breadcrumb.length > 1")
		.items
			.item(
				v-for="(item, index) in breadcrumb"
				:key="item.id"
			)
				router-link.__title(:to="item.url") {{ item.title }}
				.__delimiter(v-if="index !== breadcrumb.length - 1") >
</template>

<script>
	export default {
		name: 'PageBreadcrumb',
		data () {
			return {
				breadcrumb: [],
			};
		},
		methods: {
			setData () {
				this.$route.matched.slice().pop().meta.breadcrumb.forEach(location => {
					this.breadcrumb.push({
						id: this.breadcrumb.length + 1,
						title: location.title,
						url: location,
					})
				});
			},
		},
		created () {
			this.setData();
		},
		watch: {
			'$route' () {
				this.breadcrumb = null;
				this.setData();
			},
		}
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
