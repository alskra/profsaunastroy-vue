<template lang="pug">
	.menu-item(ref="menuItem")
		a.button(
			:href="menuItem.submenu ? null : menuItem.url"
			tabindex="0"
			@click="menuItem.submenu ? submenuOpened = !submenuOpened : null"
			@keyup.enter="menuItem.submenu ? submenuOpened = !submenuOpened : null"
		)
			base-icon.__icon(
				:name="menuItem.icon || 'menu'"
				v-if="menuItem.icon || menuItem.submenu"
			)

			.__title
				| {{ menuItem.title }}

		template(v-if="menuItem.submenu")
			.submenu(v-expand="submenuOpened")
				a.__item(
					v-for="submenuItem in menuItem.submenu"
					:key="submenuItem.id"
					:href="submenuItem.url"
				)
					.__item-title
						| {{ submenuItem.title }}

</template>

<script>
	export default {
		name: "PageHeaderMenuItem",
		props: {
			menuItem: Object,
		},
		data () {
			return {
				submenuOpened: false,
			};
		},
		methods: {
			onDocumentClick (evt) {
				const target = evt.target;
				const menuItemEl = this.$refs.menuItem;

				if (menuItemEl !== target && !menuItemEl.contains(target)) {
					this.submenuOpened = false;
				}
			},
			onDocumentKeyup (evt) {
				this.onDocumentClick(evt);
			},
		},
		created () {
			document.addEventListener('click', this.onDocumentClick);
			document.addEventListener('keyup', this.onDocumentKeyup);
		},
		destroyed () {
			document.removeEventListener('click', this.onDocumentClick);
			document.removeEventListener('keyup', this.onDocumentKeyup);
		},
	}
</script>

<style lang="scss" scoped>
	.menu-item {
		@include reset;

		margin-left: 3rem;

		@media (--lt-lg) {
			margin-left: 2rem;
		}

		@media (--lt-md) {
			flex-shrink: 0;
			margin-left: 0;
		}
	}

	.button {
		@include reset;

		display: flex;
		align-items: flex-start;
		width: 100%;
		color: var(--page-header-color);
		transition: color var(--page-header-transition);
		cursor: pointer;

		&:hover {
			color: var(--page-header-hover-color);
		}

		&__icon {
			position: relative;
			flex-shrink: 0;
			margin-right: 0.5rem;
			width: 1.5rem;
			height: 1.5rem;

			@media (--lt-md) {
				margin-right: -2.875rem;
				margin-left: 0.375rem;
				padding: 0.5rem;
				width: 2.5rem;
				height: 2.5rem;
			}

			+ .button__title {
				@media (--lt-md) {
					padding-left: 2.875rem;
				}
			}
		}

		&__title {
			flex-grow: 1;
			overflow: hidden;
			margin: 0.02rem 0 -0.02rem;
			padding: (1.5rem - 1.125rem * 1.25) / 2 0;
			font-size: 1.125rem;
			line-height: 1.25;
			white-space: nowrap;
			text-overflow: ellipsis;

			@media (--lt-md) {
				padding: (2.5rem - 1.125rem * 1.25) / 2 1rem;
			}
		}
	}

	.submenu {
		position: absolute;
		top: 100%;
		margin-left: -1px;
		border: 1px solid var(--page-header-border-color);
		border-top-color: var(--page-header-background-color);
		padding: 0.5rem 0;
		max-width: 200px;
		background-color: var(--page-header-background-color);
		transition: border-color var(--page-header-transition),
		background-color var(--page-header-transition);

		@media (--lt-md) {
			position: relative;
			margin: 0;
			border: 0;
			padding: 0;
			max-width: none;
		}

		&__item {
			@include reset;

			display: flex;
			align-items: flex-start;
			color: var(--page-header-color);
			transition: color var(--page-header-transition);
			cursor: pointer;

			&:hover {
				color: var(--page-header-hover-color);
			}

			&-title {
				flex-grow: 1;
				overflow: hidden;
				padding: (2rem - 1.125rem * 1.25) / 2 1rem (2rem - 1.125rem * 1.25) / 2 2rem;
				font-size: 1.125rem;
				line-height: 1.25;
				white-space: nowrap;
				text-overflow: ellipsis;

				@media (--lt-md) {
					padding: (2.5rem - 1.125rem * 1.25) / 2 1rem (2.5rem - 1.125rem * 1.25) / 2 2.875rem;
				}
			}
		}
	}
</style>
