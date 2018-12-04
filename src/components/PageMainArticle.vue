<template lang="pug">
	main.page-main-article
		.container
			router-view(name="PageBreadcrumb")

			article.article(v-if="err || article")
				.err(v-if="err") {{ err }}

				template.__scope(v-else)
					header.__header
						h1.__title {{ article.title }}

						.__row.row
							.__col.col-auto.mw-100
								time.__datetime(
									:datetime="new Date(article.date).toISOString()"
									:title="`${dateString} ${timeString}`"
								)
									| {{ dateString }}

							.__col.col-auto.mw-100.ml-auto
								.__share Поделиться PLUSO

					.__body.content(v-html="article.body")

		router-view(name="RequestSect")
</template>

<script>
	const fetchData = (to, from, next) => {
		return fetch(`${process.env.VUE_APP_API_HOST}/articles/${to.params.articleId}`)
			.then(response => {
				if (response.status === 404) {
					next({
						path: '404',
						query: {redirect: to.fullPath},
						replace: true,
					});
				} else if (response.status !== 200) {
					next(new Error(String(response.status)));
				}

				return response.json();
			});
	};

	export default {
		name: 'PageMainArticle',
		data() {
			return {
				article: null,
				err: null,
			};
		},
		computed: {
			dateString() {
				return new Date(this.article.date).toLocaleDateString('ru', {
					year: 'numeric',
					month: 'long',
					day: '2-digit',
				});
			},
			timeString() {
				return new Date(this.article.date).toLocaleTimeString('ru', {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				});
			},
		},
		methods: {
			setData(err, article) {
				if (err) {
					this.err = err.toString();
				} else {
					this.article = article;
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			fetchData(to, from, next)
				.then(article => next(vm => vm.setData(null, article)))
				.catch(err => next(vm => vm.setData(err, null)));
		},
		beforeRouteUpdate(to, from, next) {
			this.article = null;
			this.err = null;

			fetchData(to, from, next)
				.then(article => (this.setData(null, article), next()))
				.catch(err => (this.setData(err, null), next()));
		},
	}
</script>

<style lang="scss" scoped>
	.page-main-article {
		@include reset;

		padding: 3rem 0;

		@media (--lt-md) {
			padding: 2rem 0;
		}

		.page-breadcrumb {
			margin: 0 auto 2rem;
			max-width: calc(env(--md) + 4rem);

			@media (--lt-md) {
				margin-bottom: (2rem / 1.5);
			}
		}
	}

	.article {
		margin: 0 auto;
		max-width: env(--md);

		&__header {
			margin-bottom: 2rem;

			@media (--lt-md) {
				margin-bottom: (2rem / 1.5);
			}
		}

		&__title {
			@include reset;

			font-family: var(--content-headings-font-family);
			font-weight: var(--content-headings-font-weight);
			font-size: var(--content-h1-font-size);
			line-height: var(--content-headings-line-height);
			color: var(--content-headings-color);
			margin-bottom: 0.5rem;
		}

		&__datetime {
			@include reset;

			display: inline;
			font-weight: 300;
			font-size: calc(var(--content-font-size) * 14 / 16);
			line-height: 1.25;
			color: var(--content-headings-color);
		}

		&__share {
			display: inline;
			font-weight: 300;
			font-size: calc(var(--content-font-size) * 14 / 16);
			line-height: 1.25;
			color: var(--content-headings-color);
		}
	}
</style>
