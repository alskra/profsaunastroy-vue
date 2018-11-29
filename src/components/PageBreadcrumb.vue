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
						url: {name: 'Home'},
					},
				],
			};
		},
		methods: {
			setData (to) {console.log('setData!');
				this.breadcrumb.splice(1, this.breadcrumb.length);

				to.matched.forEach((routeRecord, index) => {
					if (routeRecord.meta.title) {
						let title = routeRecord.meta.title;
						let url = routeRecord.path;

						if (Object.keys(to.params).some(paramKey => url.indexOf(`:${paramKey}`) !== -1)) {
							Object.keys(to.params).forEach(paramKey => url = url.replace(`:${paramKey}`, to.params[paramKey]));

							fetch('https://my-json-server.typicode.com/alskra/profsaunastroy-vue' + url)
								.then(response => response.json())
								.then(data => {
									this.breadcrumb.push({
										id: index + 2,
										title: data.title || title,
										url,
									});
								});
						} else {
							this.breadcrumb.push({
								id: index + 2,
								title,
								url,
							});
						}
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
		beforeRouteLeave (to, from, next) {
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
