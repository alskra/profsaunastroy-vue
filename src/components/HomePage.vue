<template lang="pug">
	main.home-page(v-if="err || data")
		.err(v-if="err") {{ err }}

		template(v-else)
			router-view(
				name="StartSect"
				data-page-header-theme="transparent"
			)
			router-view(name="SaunaSect")
			router-view(
				name="FastLinks"
				data-page-header-theme="dark"
			)
			router-view(name="CatalogueSect")
			router-view(
				name="ProjectSect"
				data-page-header-theme="dark"
			)
			router-view(name="RequestSect")
</template>

<script>
	import {getData} from '../api';

	const reqUrl = '/pages/home';

	export default {
		name: 'HomePage',
		data() {
			return {
				err: null,
				data: null,
			};
		},
		metaInfo() {
			return this.data ? {
				title: this.data.title,
				meta: this.data.meta,
			} : {};
		},
		methods: {
			setData(err, data) {
				if (err) {
					this.err = err.toString();
				} else {
					this.data = data;
				}
			},
		},
		beforeRouteEnter(to, from, next) {
			getData(to, from, next, reqUrl)
				.then(data => next(vm => vm.setData(null, data)))
				.catch(err => next(vm => vm.setData(err, null)));
		},
		beforeRouteUpdate(to, from, next) {
			this.err = null;
			this.data = null;

			getData(to, from, next, reqUrl)
				.then(data => (this.setData(null, data), next()))
				.catch(err => (this.setData(err, null), next()));
		}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		@include reset;

		margin-top: -3.5rem;
	}
</style>
