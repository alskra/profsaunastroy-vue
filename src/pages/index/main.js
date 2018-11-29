import '../../js/base';
import NProgress from '../../js/nprogress';
import animate from '../../js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import StartSect from '../../components/StartSect';
const NotFoundPage = () => import('../../components/NotFoundPage');
const HomePage = () => import('../../components/HomePage');
const SaunaSect = () => import('../../components/SaunaSect');
const FastLinks = () => import('../../components/FastLinks');
const CatalogueSect = () => import('../../components/CatalogueSect');
const ProjectSect = () => import('../../components/ProjectSect');
const RequestSect = () => import('../../components/RequestSect');
const ArticlesPage = () => import('../../components/ArticlesPage');
const PageBreadcrumb = () => import('../../components/PageBreadcrumb');
const ArticleView = () => import('../../components/ArticleView');

Vue.use(VueRouter);

const baseUrl = process.env.BASE_URL;

const routes = [
	{
		name: 'NotFound',
		path: '*',
		component: NotFoundPage,
		meta: {
			title: '404',
			breadcrumb: true,
		},
	},
	{
		path: baseUrl,
		component: HomePage,
		meta: {
			title: 'Главная',
			breadcrumb: false,
		},
		children: [
			{
				name: 'Home',
				path: '',
				alias: ['index.html'],
				components: {
					StartSect,
					SaunaSect,
					FastLinks,
					CatalogueSect,
					ProjectSect,
					RequestSect,
				},
			},
		],
	},
	{
		path: `${baseUrl}articles`,
		component: ArticlesPage,
		meta: {
			title: 'Полезные статьи',
			breadcrumb: true,
		},
		children: [
			{
				name: 'Articles',
				path: '',
				components: {
				},
			},
			{
				name: 'ArticleView',
				path: ':articleId',
				components: {
					ArticleView,
				},
				meta: {
					title: 'Просмотр статьи',
					breadcrumb: true,
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

	let resolveRoutesMeta = Promise.resolve();

	to.matched.forEach((routeRecord, index, routeRecordArr) => {
		let title = routeRecord.meta.title;
		let url = routeRecord.path;

		if (Object.keys(to.params).some(paramKey => url.indexOf(`:${paramKey}`) !== -1)) {
			Object.keys(to.params).forEach(paramKey => {
				url = url.replace(`:${paramKey}`, to.params[paramKey]);
			});

			resolveRoutesMeta = resolveRoutesMeta
				.then(() => fetch(process.env.VUE_APP_API_HOST + url))
				.then(response => {
					// if (response.status === 404 && index === routeRecordArr.length - 1) {
					// 	next({name: 'NotFound'});
					// }

					return response.json();
				})
				.then(data => routeRecord.meta.title = data.title || title)
		}

		resolveRoutesMeta = resolveRoutesMeta.then(() => routeRecord.meta.url = url);
	});

	resolveRoutesMeta
		.then(() => next())
		.catch(() => next());
});

router.afterEach((to) => {
	NProgress.done();

	document.title = process.env.VUE_APP_TITLE;

	to.matched.slice().reverse().some((routeRecord) => {
		if (routeRecord.meta.title) {
			document.title = `${routeRecord.meta.title} \u2014 ${process.env.VUE_APP_TITLE}`;

			return true;
		}

		return false;
	});
});

router.onError((err) => {
	throw err;
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
