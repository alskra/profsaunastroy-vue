<template lang="pug">

</template>

<script>
	import IconBase from './components/icons/IconBase';
	import IconVk from './components/icons/IconVk';
	import HelloWorld from './components/HelloWorld.vue'

	export default {
		name: 'App',
		components: {
			IconBase,
			IconVk,
			HelloWorld
		}
	}
</script>

<style lang="scss">
	$color: #2c3e50;

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $color;
		margin-top: 90px;

		@media (--lt-md) {
			content: env(--lg);
			display: flex;
			flex-grow: 1;
			color: red;
		}
	}
</style>
