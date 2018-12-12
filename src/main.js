import './assets/js/base';
import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import router from './router';
import store from './store';
import App from './components/App';

Vue.use(VueProgressBar, {
	color: 'var(--content-link-color)',
});

export default new Vue({
	...App,
	router,
	store,
}).$mount('#app');
