import NProgress from '../../assets/js/nprogress';
import animate from '../../assets/js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';

import PageMainHome from '../../components/PageMainHome';
import StartSect from '../../components/StartSect';
import PageBreadcrumb from '../../components/PageBreadcrumb';

const PageMainNotFound = () => import('../../components/PageMainNotFound');
const PageMainArticles = () => import('../../components/PageMainArticles');
const PageMainArticle = () => import('../../components/PageMainArticle');

const SaunaSect = () => import('../../components/SaunaSect');
const FastLinks = () => import('../../components/FastLinks');
const CatalogueSect = () => import('../../components/CatalogueSect');
const ProjectSect = () => import('../../components/ProjectSect');
const RequestSect = () => import('../../components/RequestSect');

NProgress.configure({showSpinner: false});
Vue.use(VueRouter);

const routes = [
	{
		name: 'NotFound',
		path: '*',
		component: PageMainNotFound,
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
		component: PageMainHome,
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
		component: PageMainArticles,
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
		component: PageMainArticle,
		children: [
			{
				name: 'Article',
				path: '',
				components: {
					PageBreadcrumb,
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
