<template lang="pug">
	.page-content
		slot
</template>

<script>
	export default {
		name: "PageContent",
	}
</script>

<style lang="scss" scoped>
	.page-content {
		@include reset;

		padding: 6rem 0;

		@media (--lt-md) {
			padding: 3rem 0;
		}
	}
</style>
