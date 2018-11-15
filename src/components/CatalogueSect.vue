<template lang="pug">
	section.catalogue-sect.animate(
		data-animate={
			start: 'scroll'
		}
	)
		.container
			header.header
				h2.__title.animate.animate-text(
					data-animate={
						start: 'scroll',
						name: 'lettersFadeInUp'
					}
				) Каталог

				p.__desc.
					У нас вы можете приобрести все необходимые товары для отделки.

			catalogue-item(
				v-for="(catalogueItem, index) in catalogueItems"
				:key="catalogueItem.id"
				:index="index"
				:catalogue-item="catalogueItem"
			)
</template>

<script>
	import animate from '../js/animate';
	import CatalogueItem from './CatalogueItem';

	export default {
		name: "CatalogueSect",
		components: {
			CatalogueItem,
		},
		data() {
			return {
				catalogueItems: [
					{
						id: 1,
						title: 'Выбор и установка печи, облицовка печи',
						content: `
							<p>Сегодня рынок печей настолько разнообразен и широк,
								что конечному потребителю сложно сходу сделать правильный выбор,
								который устроит его по дизайну, параметрам и качеству.</p>
							<p>Как выбрать печь для бани и сауны – какие из них лучше
								и чем они друг от друга отличаются?
								Мы также принимаем заказы на изготовление обкладов для печей.</p>
						`,
						sectNavItems: [
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
								title: 'Облицовка банных печей',
								url: '',
							},
						],
						imgItems: [
							{
								id: 1,
								src: '/upload/catalogue/pechi-dlya-bani-varvara-obzor-modelej.jpg',
								title: 'Дровяная печь HARVIA',
							},
							{
								id: 2,
								src: '/upload/catalogue/helo.jpg',
								title: 'Электрическая печь helo',
							},
						],
					},
					{
						id: 2,
						title: 'Выбор купели для бани',
						content: `
							<p>Купель – это большая бочка (емкость) из металла, пластика, дерева или бетона.
								Часто представлена в виде овальной или круглой емкости разной глубины.</p>
						`,
						sectNavItems: [
							{
								id: 1,
								title: 'Деревянные купели',
								url: '',
							},
							{
								id: 2,
								title: 'Пластиковые купели',
								url: '',
							},
							{
								id: 3,
								title: 'Бетонные купели',
								url: '',
							},
						],
						imgItems: [
							{
								id: 1,
								src: '/upload/catalogue/kupel.jpg',
								title: 'Купель',
							},
						],
					},
					{
						id: 3,
						title: 'Двери и стеклянные перегородки для бани и сауны',
						content: `
							<p>У нас вы можете приобрести двери и стеклянные перегородки известных
								брендов из Швеции и Финляндии.
								Мы поможем подобрать, доставим и установим дверь в кратчайшие сроки!</p>
						`,
						sectNavItems: [
							{
								id: 1,
								title: 'Стеклянные перегородки',
								url: '',
							},
							{
								id: 2,
								title: 'Стеклянные двери',
								url: '',
							},
						],
						imgItems: [
							{
								id: 1,
								src: '/upload/catalogue/door.jpg',
								title: 'Стеклянная дверь для сауны TYLO',
							},
							{
								id: 2,
								src: '/upload/catalogue/door-1.jpg',
								title: 'Стеклянная дверь HARVIA',
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
	.catalogue-sect {
		@include reset;

		position: relative;
		overflow: hidden;
		padding: 12rem 0;
		background-color: var(--page-background-color);

		@media (--lt-md) {
			padding: 4rem 0;
		}

		&::before {
			content: "";
			position: absolute;
			left: 50%;
			top: 0;
			width: 1px;
			height: 0;
			background-color: #e0e0e0;
			transform: translate(0, 3rem);
			transition: height 1500ms ease-out;

			@media (--lt-md) {
				content: normal;
			}
		}

		&::after {
			content: "";
			position: absolute;
			left: 50%;
			top: 100%;
			width: 1px;
			height: 0;
			background-color: #e0e0e0;
			transform: translate(0, -6rem) translate(0, -3rem);
			transition: height 1500ms ease-out;

			@media (--lt-md) {
				content: normal;
			}
		}

		&.animate--started,
		&.animate--completed {
			&::before,
			&::after {
				height: 6rem;
			}
		}
	}

	.header {
		margin-bottom: 3rem;

		&__title {
			@include reset;

			margin: 0 0 0.5em;
			font-weight: var(--content-headings-font-weight);
			font-size: var(--content-headings-font-size);
			line-height: var(--content-headings-line-height);
			color: var(--content-headings-color);
		}

		&__desc {
			@include reset;

			font-weight: 500;
			font-size: var(--content-font-size);
			line-height: 1.25;
			color: var(--content-headings-color);
		}
	}

	.catalogue-item {
		& + & {
			margin-top: 6rem;

			@media (--lt-md) {
				margin-top: 4rem;
			}
		}
	}
</style>
