<template lang="pug">
	nav.page-pagination
		.items
			.item(
				v-for="(item, index) in pagination"
				:key="item.id"
			)
				a.__link(:href="item.url") {{ item.title }}
				.__delimiter(v-if="index !== pagination.length - 1") >
</template>

<script>
	export default {
		name: "PagePagination",
		data() {
			return {
				pagination: [],
			};
		},
		created() {
			// Get data async
			setTimeout(() => {
				this.pagination = [
					{
						id: 1,
						title: 'Главная',
						url: '',
					},
					{
						id: 2,
						title: 'Полезные статьи',
						url: '',
					},
					{
						id: 3,
						title: 'Вентиляция в сауне и парилке',
						url: '',
					},
				];
			}, 100);
		},
	}
</script>

<style lang="scss" scoped>
	.page-pagination {
		@include reset;

		.items {

		}

		.item {
			display: inline;

			&__link {
				@include reset;

				display: inline;
				font-weight: 300;
				font-size: calc(var(--content-font-size) * 14 / 16);
				color: var(--content-headings-color);
				cursor: pointer;
				transition: color 0.15s ease-in-out;

				&:hover {
					color: var(--content-color);
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
