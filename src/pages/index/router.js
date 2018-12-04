import NProgress from 'nprogress';
import animate from '../../assets/js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';
import StartSect from '../../components/StartSect';
import SaunaSect from '../../components/SaunaSect';
import FastLinks from '../../components/FastLinks';
import CatalogueSect from '../../components/CatalogueSect';
import ProjectSect from '../../components/ProjectSect';
import RequestSect from '../../components/RequestSect';
import ArticlesRouteView from '../../components/ArticlesRouteView';
import PageBreadcrumb from '../../components/PageBreadcrumb';
import ArticleRouteView from '../../components/ArticleRouteView';
import ArticleView from '../../components/ArticleView';

const NotFoundRouteView = () => import('../../components/NotFoundRouteView');
const HomeRouteView = () => import('../../components/HomeRouteView');

NProgress.configure({showSpinner: false});
Vue.use(VueRouter);

const routes = [
	{
		name: 'NotFound',
		path: '*',
		component: NotFoundRouteView,
		meta: {
			title: '404 — Not Found',
			breadcrumb: [
				{name: 'Home'},
				{name: 'NotFound'},
			],
		},
	},
	{
		path: '/',
		component: HomeRouteView,
		children: [
			{
				name: 'Home',
				path: '',
				components: {
					StartSect,
					SaunaSect,
					FastLinks,
					CatalogueSect,
					ProjectSect,
					RequestSect,
				},
				meta: {
					title: 'Главная',
					breadcrumb: [
						{name: 'Home'},
					],
				},
			},
		],
	},
	{
		path: '/articles',
		component: ArticlesRouteView,
		children: [
			{
				name: 'Articles',
				path: '',
				components: {
					PageBreadcrumb,
					RequestSect,
				},
				meta: {
					title: 'Полезные статьи',
					breadcrumb: [
						{name: 'Home'},
						{name: 'Articles'},
					],
				},
			},
		],
	},
	{
		path: '/articles/:articleId',
		component: ArticleRouteView,
		children: [
			{
				name: 'Article',
				path: '',
				components: {
					PageBreadcrumb,
					ArticleView,
					RequestSect,
				},
				meta: {
					title: 'Просмотр статьи',
					breadcrumb: [
						{name: 'Home'},
						{name: 'Articles'},
						{name: 'Article'},
					],
				},
			}
		],
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior(to, from, savedPosition) {
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

export default router;

router.beforeEach((to, from, next) => {
	NProgress.start();

	const breadcrumb = to.matched[to.matched.length - 1].meta.breadcrumb;
	let resolveBreadcrumb = Promise.resolve();

	breadcrumb.forEach(location => {
		const route = router.match(Object.assign(location, {params: to.params}));
		const routeRecord = route.matched[route.matched.length - 1];
		const title = routeRecord.meta.title;

		if (Object.keys(to.params).some(paramKey => routeRecord.path.indexOf(`:${paramKey}`) !== -1)) {
			resolveBreadcrumb = resolveBreadcrumb
				.then(() => fetch(process.env.VUE_APP_API_HOST + route.path))
				.then(response => response.json())
				.then(data => {
					localStorage[route.path] = JSON.stringify(data);
					routeRecord.meta.title = data.title || title;
				});
		}

		resolveBreadcrumb.then(() => location.title = routeRecord.meta.title);
	});

	resolveBreadcrumb
		.then(() => next())
		.catch((err) => next(err));
});

router.afterEach((to) => {
	NProgress.done();
	animate.update();
	document.title = `${to.matched[to.matched.length - 1].meta.title} \u2014 ${process.env.VUE_APP_TITLE}`;
});

router.onError((err) => {
	throw err;
});
