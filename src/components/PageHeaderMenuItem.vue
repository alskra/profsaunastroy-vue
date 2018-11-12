<template lang="pug">
	div.menu-item(ref="menuItem")
		a.button(
			:href="!menuItem.submenu ? menuItem.url : null"
			tabindex="0"
			@click="isSubmenuOpened = !isSubmenuOpened"
			@keyup.enter="isSubmenuOpened = !isSubmenuOpened"
		)
			base-icon(
				name="menu"
				v-if="menuItem.submenu"
			)
			.title
				| {{ menuItem.title }}
		transition(name="fade-up" v-if="menuItem.submenu")
			.submenu(
				v-show="isSubmenuOpened"
			)
				a.submenu-item(
					v-for="submenuItem in menuItem.submenu"
					:key="submenuItem.id"
					:href="submenuItem.url"
				)
					.submenu-title
						| {{ submenuItem.title }}

</template>

<script>
	export default {
		name: "PageHeaderMenuItem",
		props: {
			menuItem: Object,
		},
		data() {
			return {
				isSubmenuOpened: false,
			};
		},
		methods: {
			closeSubmenu(evt) {
				const el = this.$refs.menuItem;
				const target = evt.target;

				if (el !== target && !el.contains(target)) {
					this.isSubmenuOpened = false;
				}
			}
		},
		created() {
			document.addEventListener('click', this.closeSubmenu);
			document.addEventListener('keyup', this.closeSubmenu);
		},
		destroyed() {
			document.removeEventListener('click', this.closeSubmenu);
			document.removeEventListener('keyup', this.closeSubmenu);
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
			color: var(--content-color);
		}
	}

	.icon-menu {
		position: relative;
		flex-shrink: 0;
		margin-right: 0.5rem;
		padding: 2px;
		width: 1.5rem;
		height: 1.5rem;

		@media (--lt-md) {
			margin-right: -45px;
			margin-left: 5px;
			padding: 10px;
			width: 40px;
			height: 40px;
		}

		+ .title {
			@media (--lt-md) {
				padding-left: 45px;
			}
		}
	}

	.title {
		flex-grow: 1;
		overflow: hidden;
		padding: (24px - 18px * 1.25) / 2 0;
		font-size: 18px;
		line-height: 1.25;
		white-space: nowrap;
		text-overflow: ellipsis;

		@media (--lt-md) {
			padding: (40px - 18px * 1.25) / 2 15px;
		}
	}

	.submenu {
		position: absolute;
		margin-top: 16px;
		border: 1px solid var(--page-header-border-color);
		border-top-color: var(--page-header-background-color);
		max-width: 200px;
		background-color: var(--page-header-background-color);
		transition: border-color var(--page-header-transition),
		background-color var(--page-header-transition);

		@media (--lt-md) {
			position: relative;
			margin-top: 0;
			max-width: none;
		}
	}

	.submenu-item {
		@include reset;
		display: flex;
		align-items: flex-start;
		color: var(--page-header-color);
		transition: color var(--page-header-transition);
		cursor: pointer;

		&:hover {
			color: var(--content-color);
		}
	}

	.submenu-title {
		flex-grow: 1;
		overflow: hidden;
		padding: (32px - 18px * 1.25) / 2 1rem (32px - 18px * 1.25) / 2 31px;
		font-size: 18px;
		line-height: 1.25;
		white-space: nowrap;
		text-overflow: ellipsis;

		@media (--lt-md) {
			padding: (40px - 18px * 1.25) / 2 15px (40px - 18px * 1.25) / 2 45px;
		}
	}

	.fade-up {
		&-enter-active,
		&-leave-active {
			transform-origin: 0 0;
			transition: opacity 0.15s ease-in-out,
			transform 0.15s ease-in-out;
		}

		&-enter,
		&-leave-to {
			opacity: 0;
			transform: scaleY(0);
		}
	}
</style>
