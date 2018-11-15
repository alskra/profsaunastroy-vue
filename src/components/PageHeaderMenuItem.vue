<template lang="pug">
	.menu-item(ref="menuItem")
		a.button(
			:href="!menuItem.submenu ? menuItem.url : null"
			tabindex="0"
			@click="submenuOpened = !submenuOpened"
			@keyup.enter="submenuOpened = !submenuOpened"
		)
			base-icon.__icon(
				name="menu"
				v-if="menuItem.submenu"
			)
			.__title
				| {{ menuItem.title }}
		transition(
			name="submenu--transition"
			v-if="menuItem.submenu"
		)
			.submenu(
				v-show="submenuOpened"
			)
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
		data() {
			return {
				submenuOpened: false,
			};
		},
		methods: {
			onDocumentClick(evt) {
				const target = evt.target;
				const menuItemElem = this.$refs.menuItem;

				if (menuItemElem !== target && !menuItemElem.contains(target)) {
					this.submenuOpened = false;
				}
			},
			onDocumentKeyup(evt) {
				this.onDocumentClick(evt);
			},
		},
		created() {
			document.addEventListener('click', this.onDocumentClick);
			document.addEventListener('keyup', this.onDocumentKeyup);
		},
		destroyed() {
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
			padding: 0.125rem;
			width: 1.5rem;
			height: 1.5rem;

			@media (--lt-md) {
				margin-right: -2.875rem;
				margin-left: 0.375rem;
				padding: 0.625rem;
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
		margin: 15px 0 0 -1px;
		border: 1px solid var(--page-header-border-color);
		border-top-color: var(--page-header-background-color);
		padding: 0 0 0.5rem;
		max-width: 200px;
		background-color: var(--page-header-background-color);
		transition: border-color var(--page-header-transition),
		background-color var(--page-header-transition);

		@media (--lt-md) {
			position: relative;
			margin: 0;
			//box-shadow: inset 0 3px 3px -3px var(--page-header-border-color),
			//inset 0 -3px 3px -3px var(--page-header-border-color);
			//border-top-color: var(--page-header-border-color);
			//border-left: 0;
			//border-right: 0;
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

		&--transition {
			&-enter-active,
			&-leave-active {
				transform-origin: 0 0;
				transition: opacity var(--page-header-transition),
				transform var(--page-header-transition);

				@media (--lt-md) {
					transition: none;
				}
			}

			&-enter,
			&-leave-to {
				opacity: 0;
				transform: scaleY(0);
			}
		}
	}
</style>
