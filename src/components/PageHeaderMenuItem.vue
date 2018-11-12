<template lang="pug">
	div.menu-item
		a.button(
			:href="!menuItem.submenu ? menuItem.url : null"
			tabindex="0"
		)
			base-icon.icon(
				name="menu"
				v-if="menuItem.submenu"
			)
			.title
				| {{ menuItem.title }}
		.submenu(v-if="menuItem.submenu")
			.submenu-item(
				v-for="(submenuItem, index) in menuItem.submenu"
				:key="index"
			)
				a.submenu-title(:href="submenuItem.url")
					| {{ submenuItem.title }}

</template>

<script>
	export default {
		name: "PageHeaderMenuItem",
		props: {
			menuItem: Object,
		},
	}
</script>

<style lang="scss" scoped>
	.menu-item {
		position: relative;
		margin-left: 50px;

		@media (--lt-lg) {
			margin-left: 30px;
		}

		@media (--lt-md) {
			flex-shrink: 0;
			margin-left: 0;
		}
	}

	.button {
		display: flex;
		align-items: flex-start;
		width: 100%;
		color: var(--header-color);
		transition: all var(--header-transition);
		cursor: pointer;

		&:hover {
			color: var(--color-default);
		}
	}

	.icon {
		position: relative;
		flex-shrink: 0;
		margin-right: 10px;
		padding: 2px;
		width: 24px;
		height: 24px;
		color: inherit;
		fill: currentColor;
		cursor: inherit;

		@media (--lt-md) {
			margin-right: -45px;
			margin-left: 5px;
			padding: 10px;
			width: 40px;
			height: 40px;
		}

		+ .menu__label {
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
		color: inherit;
		cursor: inherit;

		@media (--lt-md) {
			padding: (40px - 18px * 1.25) / 2 15px;
		}
	}

	.submenu {
		position: absolute;
		left: 0;
		top: 100%;
		display: none;
		border: 1px solid var(--header-box-shadow-color);
		border-top: 0;
		max-width: 200px;
		background-color: var(--header-background-color);
		transform: translate(24px, 18px);
		transform-origin: 0 0;
		transition: all var(--header-transition);

		@media (--lt-md) {
			position: relative;
			left: auto;
			top: auto;
			max-width: none;
			transform: none;
		}
	}

	.submenu-item {
		display: flex;
		align-items: flex-start;
		color: var(--header-color);
		transition: all var(--header-transition);
		cursor: pointer;

		&:hover {
			color: var(--color-default);
		}
	}

	.submenu-title {
		flex-grow: 1;
		overflow: hidden;
		padding: 5px 10px;
		font-size: 18px;
		line-height: 1.25;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: inherit;
		cursor: inherit;

		@media (--lt-md) {
			padding: (40px - 18px * 1.25) / 2 15px (40px - 18px * 1.25) / 2 45px;
		}
	}
</style>
