<template lang="pug">
	.articles-list(v-if="err || articles.length")
		.err(v-if="err") {{ err }}

		template(v-else)
			.grid
				.col(v-for="article in articles")
					router-link.article-item(:to="{name: 'Article', params: {article_id: article.id}}")
						h2.__title {{ article.title }}
</template>

<script>
	export default {
		name: 'ArticlesList',
		data() {
			return {
				err: null,
				articles: [],
			};
		},
		methods: {
			setData(err, articles) {
				if (err) {
					this.err = err.toString();
				} else {
					this.articles = articles;
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.articles-list {
		@include reset;
	}
</style>
