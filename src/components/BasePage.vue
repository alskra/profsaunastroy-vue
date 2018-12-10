<template lang="pug">
</template>

<script>
	import {getData} from '../api';

	const createMixin = reqUrl => {
		return {
			data() {
				return {
					err: null,
					page: {},
				};
			},
			metaInfo() {
				return {
					title: this.page.title,
					meta: this.page.meta || [],
				};
			},
			methods: {
				setData(err, page) {
					if (err) {
						this.err = err.toString();
					} else {
						this.page = page;
					}
				},
			},
			beforeRouteEnter(to, from, next) {
				getData(to, from, next, reqUrl || to.path)
					.then(page => next(vm => vm.setData(null, page)))
					.catch(err => next(vm => vm.setData(err, {})));
			},
			beforeRouteUpdate(to, from, next) {
				this.err = null;
				this.page = {};

				getData(to, from, next, reqUrl || to.path)
					.then(page => (this.setData(null, page), next()))
					.catch(err => (this.setData(err, {}), next()));
			},
		};
	};

	export default {
		name: 'BasePage',
		createMixin,
	}
</script>

<style lang="scss" scoped>
</style>
