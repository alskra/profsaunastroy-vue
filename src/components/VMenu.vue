<template lang="pug">
	nav.v-menu
		button.__toggle(data-toggle="menu")
			//+sprite-svg('menu').__toggle-icon
		.__inner
			.__item
				button.__item-inner(data-toggle="menu__submenu")
					//+sprite-svg('menu').__icon
					span.__label Услуги
				.__submenu
					.__submenu-item
						a.__submenu-label(href="") All
					.__submenu-item
						a.__submenu-label(href="") Item one
					.__submenu-item
						a.__submenu-label(href="") Item two very long very long very long
					.__submenu-item
						a.__submenu-label(href="") Item three
			.__item
				button.__item-inner(data-toggle="menu__submenu")
					//+sprite-svg('menu').__icon
					span.__label Каталог
				.__submenu
					.__submenu-item
						a.__submenu-label(href="") All
					.__submenu-item
						a.__submenu-label(href="") Item one
					.__submenu-item
						a.__submenu-label(href="") Item two
					.__submenu-item
						a.__submenu-label(href="") Item three
			.__item
				.__item-inner
					a.__label(href="") Наши работы
			.__item
				.__item-inner
					a.__label(href="") О компании
			.__item
				.__item-inner
					a.__label(href="") Контакты
</template>

<script>
  export default {
    name: "VMenu"
  }
</script>

<style lang="scss" scoped>
	.v-menu {
		&__toggle {
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

			&-icon {
				width: 24px;
				height: 24px;
				color: inherit;
				fill: currentColor;
				cursor: inherit;
			}
		}

		&__inner {
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

		&__item {
			position: relative;
			margin-left: 50px;

			@media (--lt-lg) {
				margin-left: 30px;
			}

			@media (--lt-md) {
				flex-shrink: 0;
				margin-left: 0;
			}

			&--submenu-opened {
				> .menu__submenu {
					display: block;
				}
			}

			&-inner {
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
		}

		&__icon {
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

		&__label {
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

		&__submenu {
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

			&-item {
				display: flex;
				align-items: flex-start;
				color: var(--header-color);
				transition: all var(--header-transition);
				cursor: pointer;

				&:hover {
					color: var(--color-default);
				}
			}

			&-label {
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
		}

		&--opened {
			.menu {
				&__inner {
					@media (--lt-md) {
						transform: translate(0, 0);
					}
				}
			}
		}
	}
</style>
