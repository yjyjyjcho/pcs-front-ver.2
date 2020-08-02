import Vue from 'vue';
import VueRouter from 'vue-router';

// Routes
import SIGN_ROUTES from './sign';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/main',
		name: 'Main',
		components: {
			contents: () => import('@/pages/MainPage.vue'),
		},
	},
	...SIGN_ROUTES,
];

export default new VueRouter({
	mode: 'history',
	routes,
});
