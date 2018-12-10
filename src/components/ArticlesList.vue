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
	import {getData} from "../api";

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
		beforeRouteEnter(to, from, next) {
			getData(to, from, next, '/articles')
				.then(articles => next(vm => vm.setData(null, articles)))
				.catch(err => next(vm => vm.setData(err, [])));
		},
		beforeRouteUpdate(to, from, next) {
			this.err = null;
			this.articles = [];

			getData(to, from, next, '/articles')
				.then(articles => (this.setData(null, articles), next()))
				.catch(err => (this.setData(err, []), next()));
		}
	}
</script>

<style lang="scss" scoped>
	.articles-list {
		@include reset;
	}
</style>
