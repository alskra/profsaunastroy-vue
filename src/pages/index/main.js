import '../../js/base';
import NProgress from '../../js/nprogress';
import animate from '../../js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import StartSect from '../../components/StartSect';
import SaunaSect from '../../components/SaunaSect';
import FastLinks from '../../components/FastLinks';
import CatalogueSect from '../../components/CatalogueSect';
import ProjectSect from '../../components/ProjectSect';
import RequestSect from '../../components/RequestSect';

Vue.use(VueRouter);

const routes = [
	{
		path: '',
		name: 'home',
		components: {
			StartSect,
			SaunaSect,
			FastLinks,
			CatalogueSect,
			ProjectSect,
			RequestSect,
		},
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL,
});

NProgress.configure({showSpinner: false});

router.beforeEach((to, from, next) => {
	NProgress.start();
	next();
});

router.beforeResolve((to, from, next) => {
	NProgress.done();
	next();
});

new Vue({
	router,
	render (h) {
		return h(App);
	},
	mounted () {
		animate.init();
	},
}).$mount('#app');
