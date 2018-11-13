import '../js/base';
import Vue from 'vue';
import App from './App';
import animate from '../js/animate';

new Vue({
	el: '#app',
	render(h) {
		return h(App);
	},
	mounted() {
		animate.init();
	},
});
