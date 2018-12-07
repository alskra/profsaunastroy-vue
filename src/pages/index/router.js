import NProgress from '../../assets/js/nprogress';
import animate from '../../assets/js/animate';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import VueBreadcrumbs from 'vue-breadcrumbs';

import NotFoundPage from '../../components/NotFoundPage';
import HomePage from '../../components/HomePage';
import StartSect from '../../components/StartSect';

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
Vue.use(VueBreadcrumbs);

const routes = [
	{
		path: '*',
		name: 'NotFound',
		component: NotFoundPage,
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
					breadcrumb: 'Главная',
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
					RequestSect,
				},
				meta: {
					breadcrumb: 'Полезные статьи',
				},
			},
		],
	},
	{
		path: '/articles/:article_id',
		component: ArticlePage,
		children: [
			{
				path: '',
				name: 'Article',
				components: {
					RequestSect,
				},
				meta: {
					breadcrumb: 'Просмотр статьи',
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
