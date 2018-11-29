<template lang="pug">
	article.article-view(v-if="err || article")
		.err(v-if="err") {{ err }}

		template(v-else)
			header.header
				h1.__title {{ article.title }}

				.__row.row.justify-content-between
					.__col.col-auto.mw-100
						time.__datetime(
							:datetime="new Date(article.date).toISOString()"
							:title="`${dateString} ${timeString}`"
						)
							| {{ dateString }}

			.content(v-html="article.body")
</template>

<script>
	export default {
		name: "ArticleView",
		data () {
			return {
				err: null,
				article: null,
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
			setData (err, article) {
				if (err) {
					this.err = err.toString();
				} else {
					this.article = article;
				}
			}
		},
		beforeRouteEnter (to, from, next) {
			fetch(process.env.VUE_APP_API_HOST + '/articles/' + to.params.articleId)
				.then(response => response.json())
				.then(article => next(vm => vm.setData(null, article)))
				.catch(err => next(vm => vm.setData(err, null)));
		},
		beforeRouteUpdate (to, from, next) {
			fetch(process.env.VUE_APP_API_HOST + '/articles/' + to.params.articleId)
				.then(response => response.json())
				.then(article => (this.setData(null, article), next()))
				.catch(err => (this.setData(err, null), next()));
		},
	}
</script>

<style lang="scss" scoped>
	.article-view {
		@include reset;
	}

	.header {
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
			font-weight: 300;
			font-size: calc(var(--content-font-size) * 14 / 16);
			line-height: 1.25;
			color: var(--content-headings-color);
		}
	}
</style>
