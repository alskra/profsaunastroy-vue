import NProgress from './assets/js/nprogress';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';

const ArticlesPage = () => import('./components/ArticlesPage');
const ArticlePage = () => import('./components/ArticlePage');

NProgress.configure({showSpinner: false});

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
	{
		path: '*',
		name: 'NotFound',
		component: NotFoundPage,
	},
	{
		path: '/',
		name: 'Home',
		component: HomePage,
		meta: {
			breadcrumb: 'Главная',
		},
	},
	{
		path: '/articles',
		name: 'Articles',
		component: ArticlesPage,
		meta: {
			breadcrumb: 'Статьи',
		},
	},
	{
		path: '/articles/:postId',
		name: 'Article',
		component: ArticlePage,
		meta: {
			breadcrumb: 'Просмотр статьи',
		},
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
});

router.onError(err => alert(err));
