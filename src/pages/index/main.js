import '../../assets/js/base';
import animate from '../../assets/js/animate';
import Vue from 'vue';
import router from './router';
import App from '../../components/App';


new Vue({
	router,
	render: h => h(App),
	mounted() {
		animate.init();
	},
}).$mount('#app');
