<template lang="pug">
  div.app#app
    icon-base(
    icon-name="vk"
    )
      icon-vk
    img(
    alt="Vue logo"
    src="./assets/logo.png"
    )
    HelloWorld.__hello(msg="Welcome to Your Vue.js App")
</template>

<script>
  import IconBase from './components/icons/IconBase';
  import IconVk from './components/icons/IconVk';
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
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
    margin-top: 60px;

    @media (--lt-md) {
      content: env(--lg);
    }
  }
</style>
