import '../../js/base';
import NProgress from '../../js/nprogress';
import animate from '../../js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueRouter);

const routes = [
	{
		path: '*',
		component: () => import('../../components/NotFoundPage'),
		name: '404',
		meta: {
			title: '404',
		},
	},
	{
		path: '',
		component: () => import('../../components/HomePage'),
		name: 'home',
		alias: [
			'home',
			'index.html',
		].map((aliasItem) => process.env.BASE_URL + aliasItem),
		meta: {
			title: 'Главная',
		},
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return {
				x: 0,
				y: 0,
			};
		}
	},
});

NProgress.configure({showSpinner: false});

router.beforeEach((to, from, next) => {
	NProgress.start();

	to.matched.slice().reverse().some((routeRecord) => {
		if (routeRecord.meta.title) {
			document.title = `${routeRecord.meta.title} - ${process.env.VUE_APP_TITLE}`;
		}

		return false;
	});

	next();
});

router.afterEach(() => {
	NProgress.done();
});

router.onError((err) => {
	alert(err);
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
