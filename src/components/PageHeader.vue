<template lang="pug">
	header.page-header(
		:class=`[
			{'page-header--has-open-menu': menuOpened},
			{'page-header--has-open-search': searchOpened}
		]`
	)
		.container-fluid
			router-link.logo(
				:to="{name: 'Home'}"
				title="ProfSaunaStroy"
			)
				base-icon.__icon(name="logo")

			nav.menu(ref="menu")
				button.__toggle(@click="menuOpened = !menuOpened")
					base-icon.__toggle-icon(name="menu")
				.__items
					.__items-group
						menu-item(
							v-for="menuItem in menu"
							:key="menuItem.id"
							:menu-item="menuItem"
						)

					.__items-group.--footer
						menu-item(
							v-for="menuItem in menuFooter"
							:key="menuItem.id"
							:menu-item="menuItem"
						)

			form.search(
				action=""
				ref="search"
			)
				input.__input(
					type="text"
					name="search"
					v-show="searchOpened"
					ref="search__input"
				)

				button.__toggle(
					type="button"
					@click="searchOpened = !searchOpened"
				)
					base-icon.__toggle-icon(name="search")
</template>

<script>
	import MenuItem from './PageHeaderMenuItem';

	export default {
		name: "PageHeader",
		components: {
			MenuItem,
		},
		data () {
			return {
				baseUrl: process.env.BASE_URL,
				menuOpened: false,
				searchOpened: false,
				menu: [
					{
						id: 1,
						icon: 'menu',
						title: 'Услуги',
						url: '',
						submenu: [
							{
								id: 1,
								title: 'Отделка парилок, саун и бань',
								url: ''
							},
							{
								id: 2,
								title: 'Мебель в стиле лофт на заказ',
								url: ''
							},
							{
								id: 3,
								title: 'Соляная комната',
								url: ''
							},
						],
					},
					{
						id: 2,
						icon: 'menu',
						title: 'Каталог',
						url: '',
						submenu: [
							{
								id: 1,
								title: 'Электрические печи',
								url: ''
							},
							{
								id: 2,
								title: 'Дровяные печи',
								url: ''
							},
							{
								id: 3,
								title: 'Пульты управления',
								url: ''
							},
							{
								id: 4,
								title: 'Талькохлорит (облицовка печи)',
								url: ''
							},
							{
								id: 5,
								title: 'Змеевик (облицовка печи)',
								url: ''
							},
							{
								id: 6,
								title: 'Двери для бани и сауны',
								url: ''
							},
							{
								id: 7,
								title: 'Купели',
								url: ''
							},
						],
					},
					{
						id: 3,
						icon: null,
						title: 'Наши работы',
						url: '',
						submenu: null,
					},
					{
						id: 4,
						icon: null,
						title: 'О компании',
						url: '',
						submenu: null,
					},
					{
						id: 5,
						icon: null,
						title: 'Контакты',
						url: '',
						submenu: null,
					},
				],
				menuFooter: [
					{
						id: 1,
						icon: 'call',
						title: '+7 (495) 532-76-95',
						url: 'tel:+74955327695',
						submenu: null,
					},
					{
						id: 2,
						icon: 'email',
						title: 'info@profsaunastroy.ru',
						url: 'mailto:info@profsaunastroy.ru',
						submenu: null,
					},
				],
			};
		},
		methods: {
			onDocumentClick (evt) {
				const target = evt.target;
				const menuEl = this.$refs.menu;
				const searchEl = this.$refs.search;

				if (menuEl !== target && !menuEl.contains(target)) {
					this.menuOpened = false;
				}

				if (searchEl !== target && !searchEl.contains(target)) {
					this.searchOpened = false;
				}
			},
			checkTheme () {
				for (let el of document.querySelectorAll('[data-page-header-theme]')) {
					if (el.getBoundingClientRect().top <= this.$el.offsetHeight
						&& el.getBoundingClientRect().bottom > this.$el.offsetHeight) {
						this.$el.dataset.theme = el.dataset.pageHeaderTheme;

						return;
					}
				}

				delete this.$el.dataset.theme;
			},
		},
		created () {
			document.addEventListener('click', this.onDocumentClick);
		},
		destroyed () {
			document.removeEventListener('click', this.onDocumentClick);
		},
		mounted () {
			const vm = this;

			vm.checkThemeTimer = setTimeout(function checkTheme() {
				vm.checkTheme();
				vm.checkThemeTimer = setTimeout(checkTheme, 100);
			}, 100);
		},
		updated () {
			document.documentElement.classList.toggle('page--has-open-menu', this.menuOpened);

			if (this.searchOpened) {
				this.$refs.search__input.focus();
			} else {
				this.$refs.search__input.value = '';
			}
		},
	}
</script>

<style>
	:root {
		--page-header-color: #2b2b2b;
		--page-header-hover-color: #8b8b8b;
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
		border-bottom: 1px solid var(--page-header-border-color);
		background-color: var(--page-header-background-color);
		transition: border-color var(--page-header-transition),
		background-color var(--page-header-transition);

		&--has-open-menu {
			.menu__items {
				@media (--lt-md) {
					transform: translateX(0);
				}
			}
		}

		&--has-open-search {
			.menu {
				@media (--gte-md) {
					display: none;
				}
			}

			.logo {
				@media (--lt-md) {
					display: none;
				}
			}

			.search {
				margin-left: auto;

				@media (--lt-md) {
					flex-grow: 1;
				}

				&__input {
					@media (--lt-md) {
						flex-grow: 1;
					}
				}
			}
		}

		&[data-theme="dark"] {
			--page-header-color: var(--page-background-color);
			--page-header-background-color: #2b2b2b;
			--page-header-border-color: #{rgba(white, 0.1)};
		}

		&[data-theme="transparent"]:not(&--has-open-menu) {
			--page-header-color: white;
			--page-header-hover-color: #c7c7c7;
			--page-header-background-color: transparent;
			--page-header-border-color: #{rgba(white, 0.1)};
		}
	}

	.container-fluid {
		display: flex;
		align-items: center;
		height: 100%;

		@media (--lt-md) {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
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

		&__icon {
			width: 100%;
			height: 100%;
		}
	}

	.menu {
		margin-left: auto;
		min-width: 0;

		@media (--lt-md) {
			flex-shrink: 0;
			order: -1;
			margin-left: 0;
		}

		&__toggle {
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

			&:hover {
				color: var(--page-header-hover-color);
			}

			&-icon {
				width: 1.5rem;
				height: 1.5rem;
			}
		}

		&__items {
			@media (--lt-md) {
				position: fixed;
				left: 0;
				bottom: 0;
				display: flex;
				flex-direction: column;
				overflow-y: auto;
				width: 300px;
				height: calc(100% - 3.5rem);
				border-right: 1px solid var(--page-header-border-color);
				background-color: var(--page-header-background-color);
				transform: translateX(-100%);
				transition: transform var(--page-header-transition);
			}

			&-group {
				display: flex;

				@media (--lt-md) {
					flex-direction: column;
					padding: 1rem 0;
					flex-shrink: 0;
				}

				&--footer {
					display: none;

					@media (--lt-md) {
						display: flex;
						margin-top: auto;
						border-top: 1px solid var(--page-header-border-color);
					}
				}
			}
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

		&__input {
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

		&__toggle {
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
				color: var(--page-header-hover-color);
			}

			&-icon {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
	}
</style>
