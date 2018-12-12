<template lang="pug">
</template>

<script>
	import {resolveUrl, getData} from '../api';

	export default {
		name: 'BasePage',
		data() {
			return {err: null};
		},
		computed: {
			page() {
				return this.$store.state.page;
			},
		},
		metaInfo() {
			const {
				title = null,
				meta = [],
			} = this.page;

			return {
				title,
				meta,
			};
		},
		methods: {
			resetData() {
				this.err = null;
				this.$store.commit('setData', {page: {}});
			},
			setData(err, page) {
				if (err) {
					this.err = err.toString();
				} else {
					this.$store.commit('setData', {page});
				}
			},
		},
		beforeRouteEnter(to, from, next) {
			getData(resolveUrl(to), {to, from, next})
				.then(page => next(vm => vm.setData(null, page)))
				.catch(err => next(vm => vm.setData(err, {})));
		},
		beforeRouteUpdate(to, from, next) {
			this.resetData();

			getData(resolveUrl(to), {to, from, next})
				.then(page => (this.setData(null, page), next()))
				.catch(err => (this.setData(err, {}), next()));
		},
	}
</script>

<style lang="scss" scoped>
</style>
