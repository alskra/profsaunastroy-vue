<template lang="pug">
</template>

<script>
	import {fetchApiData} from '../api';

	export default {
		name: 'BasePage',
		data() {
			return {
				apiUrl: '/home',
				page: {},
				err: null,
			};
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
			setData() {
				this.$Progress.start();

				fetchApiData(this.apiUrl)
					.then(page => {
						this.page = page;
						this.err = null;
						this.$Progress.finish();
						this.$Progress.loading = false;
					})
					.catch(err => {
						this.page = {};
						this.err = err.toString();
						this.$Progress.fail();
						this.$Progress.loading = false;
					});
			},
		},
		created() {
			this.setData();
		},
		watch: {
			'$route': 'setData',
		},
	}
</script>

<style lang="scss" scoped>
</style>
