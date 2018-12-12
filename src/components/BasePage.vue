<template lang="pug">
</template>

<script>
	export default {
		name: 'BasePage',
		data() {
			return {
				pageSlug: 'home',
				err: null,
				page: {},
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
			fetchData() {
				this.err = null;
				this.page = {};
				this.$Progress.start();

				fetch(`${process.env.VUE_APP_API_HOST}/${this.pageSlug}`)
					.then(response => response.json())
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
			this.fetchData();
		},
		watch: {
			'$route': 'fetchData',
		},
	}
</script>

<style lang="scss" scoped>
</style>
