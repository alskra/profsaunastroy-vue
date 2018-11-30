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
const SingleArticlePage = () => import('../../components/SingleArticlePage');
const ArticleView = () => import('../../components/ArticleView');

Vue.use(VueRouter);

const baseUrl = process.env.BASE_URL;

const routes = [
	{
		name: 'NotFoundPage',
		path: '*',
		component: NotFoundPage,
		meta: {
			title: '404',
			breadcrumb: [
				{name: 'HomePage'},
				{name: 'NotFoundPage'},
			],
		},
	},
	{
		path: '/',
		component: HomePage,
		children: [
			{
				name: 'HomePage',
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
				meta: {
					title: 'Главная',
					breadcrumb: [
						{name: 'HomePage'},
					],
				},
			},
		],
	},
	{
		path: '/articles',
		component: ArticlesPage,
		children: [
			{
				name: 'ArticlesPage',
				path: '',
				components: {
					PageBreadcrumb,
					RequestSect,
				},
				meta: {
					title: 'Полезные статьи',
					breadcrumb: [
						{name: 'HomePage'},
						{name: 'ArticlesPage'},
					],
				},
			},
		],
	},
	{
		path: '/articles/:articleId',
		component: SingleArticlePage,
		children: [
			{
				name: 'SingleArticlePage',
				path: '',
				components: {
					PageBreadcrumb,
					ArticleView,
					RequestSect,
				},
				meta: {
					title: 'Просмотр статьи',
					breadcrumb: [
						{name: 'HomePage'},
						{name: 'ArticlesPage'},
						{name: 'SingleArticlePage'},
					],
				},
			}
		],
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
	base: baseUrl,
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

new Vue({
	router,
	render (h) {
		return h(App);
	},
	mounted () {
		animate.init();
	},
}).$mount('#app');
