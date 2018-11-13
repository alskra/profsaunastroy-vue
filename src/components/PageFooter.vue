<template lang="pug">
	footer.page-footer
		.top-sect.animate(
			data-animate={
				start: 'scroll'
			}
		)
			.container.has-mb
				.contacts
					.contacts-title.animate.animate-text(
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
								.networks-items
									a.networks-item(
										href=""
										target="_blank"
										title="VK"
									)
										base-icon.networks-icon(name="vk")

									a.networks-item(
										href=""
										target="_blank"
										title="Facebook"
									)
										base-icon.networks-icon(name="facebook")

									a.networks-item(
										href=""
										target="_blank"
										title="Twitter"
									)
										base-icon.networks-icon(name="twitter")

									a.networks-item(
										href=""
										target="_blank"
										title="Google+"
									)
										base-icon.networks-icon(name="google-plus")

									a.networks-item(
										href=""
										target="_blank"
										title="Instagram"
									)
										base-icon.networks-icon(name="instagram")

</template>

<script>
	const baseUrl = process.env.BASE_URL;

	export default {
		name: "PageFooter",
		data() {
			return {
				baseUrl,
			};
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

		&.animate.is-started,
		&.animate.is-completed {
			&::before {
				height: 6rem;
			}
		}
	}

	.container {
		&.has-mb {
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

		&.max-w-lg-20 {
			@media (--gte-lg) {
				max-width: 20%;
			}
		}
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
	}

	.contacts-title {
		@include reset;

		margin-bottom: 2.5rem;
		font-weight: var(--content-headings-font-weight);
		font-size: var(--content-headings-font-size);
		line-height: var(--content-headings-line-height);
		color: var(--page-background-color);
	}

	.networks {
		overflow: hidden;
	}

	.networks-items {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
		margin: -1rem;

		@media (--lt-md) {
			justify-content: center;
		}
	}

	.networks-item {
		@include reset;

		flex-shrink: 0;
		margin: 1rem;
		color: #2b2b2b;
		transition: color 0.15s ease-in-out;
		cursor: pointer;

		&:hover {
			color: var(--content-color);
		}
	}

	.networks-icon {
		display: block;
		width: 2.5rem;
		height: 2.5rem;

		@media (--lt-sm) {
			width: 2rem;
			height: 2rem;
		}
	}
</style>
