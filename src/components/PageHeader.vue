<template lang="pug">
	header.page-header(:class="{'is-open-search': isOpenSearch}")
		.container-fluid
			a.logo(
				:href="baseUrl"
				title="ProfSaunaStroy"
			)
				base-icon(
					name="logo"
					width="100%"
					height="100%"
				)

			nav.menu
				button.menu-toggle
					base-icon(name="menu")
				.menu-items
					menu-item(
						v-for="(menuItem, index) in menuItems"
						:key="index"
						:menu-item="menuItem"
					)

			form.search-form(
				:action="baseUrl"
				ref="searchForm"
			)
				input.search-input(
					type="text"
					name="search"
					v-if="isOpenSearch"
				)

				button.search-toggle(
					type="button"
					@click="isOpenSearch = !isOpenSearch"
				)
					base-icon(name="search")
</template>

<script>
	import MenuItem from './PageHeaderMenuItem';

	const baseUrl = process.env.BASE_URL;

	export default {
		name: "PageHeader",
		components: {
			MenuItem,
		},
		data() {
			return {
				baseUrl,
				isOpenSearch: false,
				menuItems: [
					{
						id: 1,
						title: 'Услуги',
						url: baseUrl,
						submenu: [
							{
								id: 1,
								title: 'All',
								url: baseUrl
							},
							{
								id: 2,
								title: 'Item 2',
								url: baseUrl
							},
							{
								id: 3,
								title: 'Item 3 very long very long very long',
								url: baseUrl
							},
							{
								id: 4,
								title: 'Item 4',
								url: baseUrl
							}
						]
					},
					{
						id: 2,
						title: 'Каталог',
						url: baseUrl,
						submenu: [
							{
								id: 1,
								title: 'All',
								url: baseUrl
							},
							{
								id: 2,
								title: 'Item 2',
								url: baseUrl
							},
							{
								id: 3,
								title: 'Item 3',
								url: baseUrl
							}
						]
					},
					{
						id: 3,
						title: 'Наши работы',
						url: baseUrl,
						submenu: null
					},
					{
						id: 4,
						title: 'О компании',
						url: baseUrl,
						submenu: null
					},
					{
						id: 5,
						title: 'Контакты',
						url: baseUrl,
						submenu: null
					}
				]
			};
		},
		methods: {
			documentClick(evt) {
				let el = this.$refs.searchForm;
				let target = evt.target;

				if (el !== target && !el.contains(target)) {
					this.isOpenSearch = false;
				}
			}
		},
		created() {
			document.addEventListener('click', this.documentClick);
		},
		destroyed() {
			document.removeEventListener('click', this.documentClick);
		},
	}
</script>

<style>
	:root {
		--header-color: var(--color-cod-gray);
		--header-background-color: var(--color-bg-default);
		--header-border-color: rgba(var(--color-bg-default), 0.15);
		--header-transition: 0.15s ease-in-out;
	}
</style>

<style lang="scss" scoped>
	.page-header {
		@include reset;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1000;
		width: 100%;
		height: 3.5rem;
		box-shadow: 0 1px var(--header-box-shadow-color);
		background-color: var(--header-background-color);
		transition: all var(--header-transition);

		&--search-opened {
			.menu {
				@media (--gte-md) {
				// display: none;
				}
			}

			.header {
				&__logo {
					@media (--lt-md) {
						display: none;
					}
				}

				&__search {
				// margin-left: auto;

					@media (--lt-md) {
						flex-grow: 1;
					}

					&-input {
						display: block;

						@media (--lt-md) {
							flex-grow: 1;
						}
					}
				}
			}
		}
	}

	.container-fluid {
		display: flex;
		align-items: center;
		height: 100%;
	}

	.logo {
		@include reset;
		flex-shrink: 0;
		width: 141px;
		height: 50px;
		color: var(--header-color);
		transition: all var(--header-transition);
		cursor: pointer;

		@media (--lt-md) {
			margin: 0 auto;
		}
	}

	.menu {
		margin-left: auto;

		@media (--lt-md) {
			flex-shrink: 0;
			order: -1;
			margin-left: 0;
		}
	}

	.menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		color: var(--header-color);
		transition: all var(--header-transition);
		cursor: pointer;

		@media (--lt-md) {
			display: flex;
		}
	}

	.menu-icon {
		width: 24px;
		height: 24px;
	}

	.menu-items {
		display: flex;

		@media (--lt-md) {
			position: fixed;
			left: 0;
			bottom: 0;
			flex-direction: column;
			overflow-y: auto;
			padding: 15px 0;
			width: 300px;
			height: calc(100% - 60px);
			box-shadow: 0 3px 3px rgba(#000, 0.15);
			background-color: var(--color-bg-default);
			transform: translate(-300px, 0);
			transition: transform var(--header-transition);
		}
	}

	.search-form {
		@include reset;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		margin-left: 50px;

		@media (--lt-lg) {
			margin-left: 30px;
		}

		@media (--lt-md) {
			margin-left: 0;
		}
	}

	.search-input {
		@include reset;
		margin-right: 5px;
		border-bottom: 1px solid var(--header-color);
		width: 200px;
		height: 24px;
		color: var(--header-color);

		@media (--lt-md) {
			margin-left: 5px;
		}

		&:focus-visible {
			outline: 0;
		}
	}

	.search-toggle {
		@include reset;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		color: var(--header-color);
		transition: all var(--header-transition);
		cursor: pointer;

		&:hover {
			color: var(--color-default);
		}
	}

	.search-icon {
		width: 24px;
		height: 24px;
	}
</style>
