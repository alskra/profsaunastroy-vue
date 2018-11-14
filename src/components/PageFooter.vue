<template lang="pug">
	footer.page-footer
		.top-sect.animate(
			data-animate={
				start: 'scroll'
			}
		)
			.container.--has-mb
				.contacts
					.__title.animate.animate-text(
						data-animate={
							start: 'scroll',
							name: 'lettersFadeInUp'
						}
					) Контакты

					.row.align-items-center.animate(
						data-animate={
							start: 'scroll',
							name: 'fadeInUp',
							targets: '.col'
						}
					)
						.col.col-auto.mw-100.col-sm-6.col-md-3
							dl
								dt Телефон:
								dd
									a(href="tel:+74955327695") +7 (495) 532-76-95

						.col.col-auto.mw-100.col-sm-6.col-md-3
							dl
								dt E-mail:
								dd
									a(href="mailto:info@profsaunastroy.ru") info@profsaunastroy.ru

						.col.col-12.col-md-6
							.networks
								.__items
									a.__item(
										href=""
										target="_blank"
										title="VK"
									)
										base-icon.__item-icon(name="vk")

									a.__item(
										href=""
										target="_blank"
										title="Facebook"
									)
										base-icon.__item-icon(name="facebook")

									a.__item(
										href=""
										target="_blank"
										title="Twitter"
									)
										base-icon.__item-icon(name="twitter")

									a.__item(
										href=""
										target="_blank"
										title="Google+"
									)
										base-icon.__item-icon(name="google-plus")

									a.__item(
										href=""
										target="_blank"
										title="Instagram"
									)
										base-icon.__item-icon(name="instagram")

			.container
				.row.flex-lg-nowrap.animate(
					data-animate={
						start: 'scroll',
						name: 'fadeIn',
						targets: '.col'
					}
				)
					.col.col-12.col-lg-2.flex-lg-shrink-1(v-if="menu")
						nav.menu
							.__items
								.__item(
									v-for="menuItem in menu"
									:key="menuItem.id"
								)
									a.__item-link(:href="menuItem.url") {{ menuItem.title }}

					.col.col-12.col-md-3.col-lg-3.flex-lg-shrink-1(
						v-for="sectMenu in sectMenuList"
						:key="sectMenu.id"
					)
						nav.sect-menu
							.__title {{ sectMenu.title }}

							.__items
								.__item(
									v-for="sectMenuItem in sectMenu.items"
									:key="sectMenuItem.id"
								)
									a.__item-link(:href="sectMenuItem.url") {{ sectMenuItem.title }}

		.bottom-sect
			.container-fluid
				.row.align-items-sm-center
					.col.col-12.d-flex.justify-content-center.col-sm-6.justify-content-sm-start
						p.copyright &copy; 2008-2018. Все права защищены

					.col.col-12.d-flex.justify-content-center.col-sm-6.justify-content-sm-end
						.developer
							.__label Developed by
							a.__logo(
								href="https://zingy-projects.com/"
								target="_blank"
								title="Digital agency ZINGY PROJECTS"
							)
</template>

<script>
	import animate from '../js/animate';

	const baseUrl = process.env.BASE_URL;

	export default {
		name: "PageFooter",
		data() {
			return {
				baseUrl,
				menu: [
					{
						id: 1,
						title: 'О компании',
						url: '',
					},
					{
						id: 2,
						title: 'Наши работы',
						url: '',
					},
					{
						id: 3,
						title: 'Контакты',
						url: '',
					},
					{
						id: 4,
						title: 'Статьи',
						url: '',
					},
				],
				sectMenuList: [
					{
						id: 1,
						title: 'Услуги',
						items: [
							{
								id: 1,
								title: 'Отделка парилок, саун и бань',
								url: '',
							},
							{
								id: 2,
								title: 'Мебель в стиле лофт на заказ',
								url: '',
							},
							{
								id: 3,
								title: 'Соляная комната',
								url: '',
							},
						],
					},
					{
						id: 2,
						title: 'Материалы',
						items: [
							{
								id: 1,
								title: 'Электрические печи',
								url: '',
							},
							{
								id: 2,
								title: 'Пульты управления',
								url: '',
							},
							{
								id: 3,
								title: 'Дровяные печи',
								url: '',
							},
							{
								id: 4,
								title: 'Стеклянные перегородки',
								url: '',
							},
							{
								id: 5,
								title: 'Стеклянные двери',
								url: '',
							},
							{
								id: 6,
								title: 'Деревянные купели',
								url: '',
							},
						],
					},
					{
						id: 3,
						title: 'Отделка парилок, саун и бань',
						items: [
							{
								id: 1,
								title: 'Внутренняя отделка сауны',
								url: '',
							},
							{
								id: 2,
								title: 'Освещение и подсветка',
								url: '',
							},
							{
								id: 3,
								title: 'Отделка сауны гималайской солью',
								url: '',
							},
							{
								id: 4,
								title: 'Полки, лежаки',
								url: '',
							},
							{
								id: 5,
								title: 'Установка дверей в сауну',
								url: '',
							},
						],
					},
					{
						id: 4,
						title: 'Проекты саун и бань',
						items: [
							{
								id: 1,
								title: 'Проекты бань из бруса',
								url: '',
							},
							{
								id: 2,
								title: 'Проекты бань из блоков',
								url: '',
							},
							{
								id: 3,
								title: 'Проекты бань из кирпича',
								url: '',
							},
							{
								id: 4,
								title: 'Проекты саун из липы',
								url: '',
							},
							{
								id: 5,
								title: 'Проекты саун из ольхи',
								url: '',
							},
							{
								id: 6,
								title: 'Проекты саун из кедра',
								url: '',
							},
							{
								id: 7,
								title: 'Проекты саун из абаши',
								url: '',
							},
						],
					},
				],
			};
		},
		mounted() {
			animate.update();
		},
		updated() {
			animate.update();
		},
	}
</script>

<style lang="scss" scoped>
	.page-footer {
		@include reset;

		margin-top: auto;
		background: url("../img/footer-bg.svg") no-repeat 50% 50% / #{percentage(1497 / 1920)} auto #3e3e3e;
	}

	.top-sect {
		position: relative;
		overflow: hidden;
		padding: 12rem 0 2rem;

		@media (--lt-md) {
			padding: 4rem 0 2rem;
		}

		&::before {
			content: "";
			position: absolute;
			left: 50%;
			top: 0;
			width: 1px;
			height: 0;
			background-color: #393939;
			transform: translate(0, 3rem);
			transition: height 1500ms ease-out;

			@media (--lt-md) {
				content: normal;
			}
		}

		&.animate--started,
		&.animate--completed {
			&::before {
				height: 6rem;
			}
		}
	}

	.container {
		&--has-mb {
			margin-bottom: 3rem;

			@media (--lt-md) {
				margin-bottom: 2rem;
			}
		}
	}

	.row {
		margin-bottom: -2rem;
	}

	.col {
		margin-bottom: 2rem;
	}

	.contacts {
		dl {
			margin: 0;

			dt {
				margin-bottom: 1rem;
				font-weight: 300;
				font-size: 16px;
				line-height: 1.25;
				color: var(--content-color);
			}

			dd {
				margin: 0;
				font-weight: 500;
				font-size: 16px;
				line-height: 1.25;
				color: var(--page-background-color);
			}

			a {
				text-decoration: none;
				color: inherit;
				transition: color 0.15s ease-in-out;
			}
		}

		&__title {
			@include reset;

			margin-bottom: 2.5rem;
			font-weight: var(--content-headings-font-weight);
			font-size: var(--content-headings-font-size);
			line-height: var(--content-headings-line-height);
			color: var(--page-background-color);
		}
	}

	.networks {
		overflow: hidden;

		&__items {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: flex-end;
			margin: -1rem;

			@media (--lt-md) {
				justify-content: center;
			}
		}

		&__item {
			@include reset;

			flex-shrink: 0;
			margin: 1rem;
			color: #2b2b2b;
			transition: color 0.15s ease-in-out;
			cursor: pointer;

			&:hover {
				color: var(--page-background-color);
			}

			&-icon {
				display: block;
				width: 2.5rem;
				height: 2.5rem;

				@media (--lt-sm) {
					width: 2rem;
					height: 2rem;
				}
			}
		}
	}

	.menu {
		margin-top: 57px;

		@media (--lt-lg) {
			margin-top: 0;
		}

		&__items {
			margin-bottom: -1rem;

			@media (--lt-lg) {
				display: flex;
				flex-wrap: wrap;
				margin: -0.5rem;
			}
		}

		&__item {
			margin-bottom: 1rem;

			@media (--lt-lg) {
				margin: 0.5rem;
			}

			&-link {
				@include reset;

				overflow: hidden;
				font-size: 16px;
				line-height: 1.25;
				text-overflow: ellipsis;
				color: var(--page-background-color);
				transition: color 0.15s ease-in-out;
				cursor: pointer;

				@media (--lt-sm) {
					text-align: center;
				}

				&:hover {
					color: var(--content-color);
				}
			}
		}
	}

	.sect-menu {
		display: flex;
		flex-flow: column;

		&__title {
			@include reset;

			margin: 0 0 2rem;
			padding-bottom: 5px;
			min-width: 80px;
			font-weight: 300;
			font-size: 16px;
			line-height: 1.25;
			text-align: center;
			text-transform: uppercase;
			color: var(--content-color);
			background: linear-gradient(to right, var(--content-color), var(--content-color))
			no-repeat 50% 100% / 70px 1px;
		}

		&__items {
			margin-bottom: -1rem;

			@media (--lt-md) {
				display: flex;
				flex-wrap: wrap;
				margin: -0.5rem;
			}
		}

		&__item {
			margin-bottom: 1rem;

			@media (--lt-md) {
				margin: 0.5rem;
			}

			&-link {
				@include reset;

				overflow: hidden;
				font-weight: 300;
				font-size: 16px;
				line-height: 1.25;
				text-overflow: ellipsis;
				color: var(--content-color);
				transition: color 0.15s ease-in-out;
				cursor: pointer;

				@media (--lt-sm) {
					text-align: center;
				}

				&:hover {
					color: var(--page-background-color);
				}
			}
		}
	}

	.bottom-sect {
		overflow: hidden;
		padding: 1rem 0;
	}

	.copyright {
		font-weight: 300;
		font-size: 16px;
		line-height: 1.25;
		color: var(--content-color);
	}

	.developer {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		vertical-align: top;

		&__label {
			flex-shrink: 0;
			margin-right: 1rem;
			font-weight: 300;
			font-size: 16px;
			line-height: 1.25;
			text-transform: uppercase;
			color: var(--content-color);
		}

		&__logo {
			@include reset;

			width: 65px;
			height: 65px;
			flex-shrink: 0;
			background: {
				image: image-set(
						url("../img/icons/png/zingy.png") 1x,
						url("../img/icons/png/zingy@2x.png") 2x
				);
				repeat: no-repeat;
				position: 50% 50%;
				size: contain;
			};
			cursor: pointer;
		}
	}
</style>
