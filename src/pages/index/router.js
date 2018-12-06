import NProgress from '../../assets/js/nprogress';
import animate from '../../assets/js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import HomePage from '../../components/HomePage';
import StartSect from '../../components/StartSect';
import PageBreadcrumb from '../../components/PageBreadcrumb';

const NotFoundPage = () => import('../../components/NotFoundPage');
const ArticlesPage = () => import('../../components/ArticlesPage');
const ArticlePage = () => import('../../components/ArticlePage');

const SaunaSect = () => import('../../components/SaunaSect');
const FastLinks = () => import('../../components/FastLinks');
const CatalogueSect = () => import('../../components/CatalogueSect');
const ProjectSect = () => import('../../components/ProjectSect');
const RequestSect = () => import('../../components/RequestSect');

NProgress.configure({showSpinner: false});
Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
	{
		path: '*',
		name: 'NotFound',
		component: NotFoundPage,
		meta: {
			breadcrumb: '',
		},
	},
	{
		path: '/',
		component: HomePage,
		children: [
			{
				path: '',
				name: 'Home',
				components: {
					StartSect,
					SaunaSect,
					FastLinks,
					CatalogueSect,
					ProjectSect,
					RequestSect,
				},
				meta: {
					breadcrumb: '',
				},
			},
		],
	},
	{
		path: '/articles',
		component: ArticlesPage,
		children: [
			{
				path: '',
				name: 'Articles',
				components: {
					PageBreadcrumb,
					RequestSect,
				},
				meta: {
					breadcrumb: '',
				},
			},
		],
	},
	{
		path: '/articles/:articleId',
		component: ArticlePage,
		children: [
			{
				path: '',
				name: 'Article View',
				components: {
					PageBreadcrumb,
					RequestSect,
				},
				meta: {
					breadcrumb: '',
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
	next();
});

router.afterEach(() => {
	NProgress.done();
	animate.update();
});

router.onError((err) => {
	alert(err);
});
