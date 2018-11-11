<template lang="pug">
	header.v-header(
	:class="{'is-open-search': isOpenSearch}"
	)
		.container-fluid
			a.logo(
			:href="baseUrl"
			title="ProfSaunaStroy"
			)
				v-icon(
				name="logo"
				width="100%"
				height="100%"
				)

			v-menu

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
					v-icon(name="search")

</template>

<script>
	import VMenu from './VMenu';

	export default {
		name: "VHeader",
		components: {
			VMenu,
		},
		data() {
			return {
				baseUrl: process.env.BASE_URL,
				isOpenSearch: false,
			};
		},
		methods: {
			documentClick(event) {
				let elem = this.$refs.searchForm;
				let target = event.target;

				if (elem !== target && !elem.contains(target)) {
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
	.v-header {
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

	.v-menu {
		margin-left: auto;

		@media (--lt-md) {
			flex-shrink: 0;
			order: -1;
			margin-left: 0;
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
