<template lang="pug">
	nav.page-breadcrumb
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
				breadcrumb: [
					{
						id: 1,
						title: 'Главная',
						url: {name: 'home'},
					},
				],
			};
		},
		methods: {
			setData (to) {
				this.breadcrumb.splice(1, this.breadcrumb.length);

				to.matched.forEach((routeRecord) => {
					let id = 1;

					if (routeRecord.meta.title) {
						id++;

						this.breadcrumb.push({
							id,
							title: routeRecord.meta.title,
							url: routeRecord.path,
						});
					}
				});
			},
		},
		beforeRouteEnter (to, from, next) {
			next(vm => vm.setData(to));
		},
		beforeRouteUpdate (to, from, next) {
			this.setData(to);
			next();
		},
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
