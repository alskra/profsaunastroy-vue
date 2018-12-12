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
				this.page = {};
				this.err = null;

				fetchApiData(this.apiUrl)
					.then(page => {
						this.$Progress.finish();
						this.page = page;
					})
					.catch(err => {
						this.$Progress.fail();
						this.err = err.toString();
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
