import '../../js/base';
import NProgress from '../../js/nprogress';
import animate from '../../js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import StartSect from '../../components/StartSect';

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
		children: [
			{
				path: '',
				components: {
					StartSect,
					SaunaSect: () => import('../../components/SaunaSect'),
					FastLinks: () => import('../../components/FastLinks'),
					CatalogueSect: () => import('../../components/CatalogueSect'),
					ProjectSect: () => import('../../components/ProjectSect'),
					RequestSect: () => import('../../components/RequestSect'),
				},
				name: 'home',
				alias: [
					'home',
					'index.html',
				],
				meta: {
					title: 'Главная',
				},
			},
		],
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
			document.title = `${routeRecord.meta.title} \u2014 ${process.env.VUE_APP_TITLE}`;

			return true;
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
