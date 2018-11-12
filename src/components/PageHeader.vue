<template lang="pug">
	header.page-header(:class="{'is-search-opened': isSearchOpened}")
		.container-fluid
			a.logo(
				:href="baseUrl"
				title="ProfSaunaStroy"
			)
				base-icon(name="logo")

			nav.menu
				button.menu-toggle
					base-icon(name="menu")
				.menu-items
					menu-item(
						v-for="menuItem in menuItems"
						:key="menuItem.id"
						:menu-item="menuItem"
					)

			form.search(
				:action="baseUrl"
				ref="search"
			)
				input.search-input(
					type="text"
					name="search"
					v-if="isSearchOpened"
				)

				button.search-toggle(
					type="button"
					@click="isSearchOpened = !isSearchOpened"
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
				menuItems: [
					{
						id: 1,
						title: 'Услуги',
						url: baseUrl,
						submenu: [
							{
								id: 1,
								title: 'Все услуги',
								url: baseUrl
							},
							{
								id: 2,
								title: 'Услуга 1',
								url: baseUrl
							},
							{
								id: 3,
								title: 'Услуга 2 very long very long very long',
								url: baseUrl
							},
							{
								id: 4,
								title: 'Услуга 3',
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
								title: 'Все категории',
								url: baseUrl
							},
							{
								id: 2,
								title: 'Категория 1',
								url: baseUrl
							},
							{
								id: 3,
								title: 'Категория 2',
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
				],
				isSearchOpened: false,
			};
		},
		methods: {
			documentClick(evt) {
				const el = this.$refs.search;
				const target = evt.target;

				if (el !== target && !el.contains(target)) {
					this.isSearchOpened = false;
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
		--page-header-color: var(--content-headings-color);
		--page-header-background-color: var(--page-background-color);
		--page-header-border-color: #{rgba(black, 0.1)};
		--page-header-transition: 0.15s ease-in-out;
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
		box-shadow: 0 1px var(--page-header-border-color);
		background-color: var(--page-header-background-color);
		transition: box-shadow var(--header-transition),
		background-color var(--header-transition);

		&.is-search-opened {
			.menu {
				@media (--gte-md) {
					// display: none;
				}
			}

			.logo {
				@media (--lt-md) {
					display: none;
				}
			}

			.search {
				@media (--lt-md) {
					flex-grow: 1;
				}
			}

			.search-input {
				@media (--lt-md) {
					flex-grow: 1;
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
		width: 134px;
		height: 3rem;
		color: var(--page-header-color);
		transition: color var(--page-header-transition);
		cursor: pointer;

		@media (--lt-md) {
			margin: 0 auto;
		}
	}

	.icon-logo {
		width: 100%;
		height: 100%;
	}

	.menu {
		margin-left: auto;
		min-width: 0;

		@media (--lt-md) {
			flex-shrink: 0;
			order: -1;
			margin-left: 0;
		}
	}

	.menu-toggle {
		@include reset;
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		color: var(--page-header-color);
		transition: color var(--page-header-transition);
		cursor: pointer;

		@media (--lt-md) {
			display: flex;
		}
	}

	.icon-menu {
		width: 1.5rem;
		height: 1.5rem;
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
			background-color: var(--page-header-background-color);
			transform: translate(-300px, 0);
			transition: transform var(--page-header-transition);
		}
	}

	.search {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		margin-left: 3rem;

		@media (--lt-lg) {
			margin-left: 2rem;
		}

		@media (--lt-md) {
			margin-left: 0;
		}
	}

	.search-input {
		@include reset;
		margin-right: 0.25rem;
		border-bottom: 1px solid var(--page-header-color);
		width: 200px;
		height: 1.5rem;
		color: var(--page-header-color);
		transition: color var(--page-header-transition);

		@media (--lt-md) {
			margin-left: 0.25rem;
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
		width: 2.5rem;
		height: 2.5rem;
		color: var(--page-header-color);
		transition: color var(--page-header-transition);
		cursor: pointer;

		&:hover {
			color: var(--content-color);
		}
	}

	.icon-search {
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
