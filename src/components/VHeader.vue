<template lang="pug">
	header.v-header
		.__container.container-fluid
			a.__logo(
			href=""
			title="ProfSaunaStroy"
			)
				v-icon.__logo-img(
				iconName="logo"
				)

			v-menu.__menu

			form.__search(action="")
				input.__search-input(type="text" name="search")
				button.__search-toggle(type="button" data-toggle="header__search")
					//+sprite-svg('search').__search-toggle-icon

</template>

<script>
	import VMenu from './VMenu';

	export default {
		name: "VHeader",
		data () {
			return {
				baseUrl: process.env.BASE_URL,
			};
		},
		components: {
			VMenu,
		},
	}
</script>

<style lang="scss">
	:root {
		--header-color: var(--color-cod-gray);
		--header-background-color: var(--color-bg-default);
		--header-border-color: rgba(var(--color-bg-default), 0.15);
		--header-transition: 0.15s ease-in-out;
	}

	.v-header {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1000;
		width: 100%;
		height: 3.5rem;
		box-shadow: 0 1px var(--header-box-shadow-color);
		background-color: var(--header-background-color);
		transition: all var(--header-transition);

		&__container {
			display: flex;
			align-items: center;
			height: 100%;
		}

		&__logo {
			flex-shrink: 0;
			width: 141px;
			height: 50px;
			color: var(--header-color);
			transition: all var(--header-transition);
			cursor: pointer;

			@media (--lt-md) {
				margin: 0 auto;
			}

			&-img {
				width: 100%;
				height: 100%;
				color: inherit;
				fill: currentColor;
				cursor: inherit;
			}
		}

		&__menu {
			margin-left: auto;

			@media (--lt-md) {
				flex-shrink: 0;
				order: -1;
				margin-left: 0;
			}
		}

		&__search {
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

			&-input {
				display: none;
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

			&-toggle {
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

				&-icon {
					width: 24px;
					height: 24px;
					color: inherit;
					fill: currentColor;
					cursor: inherit;
				}
			}
		}

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
</style>
