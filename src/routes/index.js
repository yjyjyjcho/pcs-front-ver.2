import Vue from 'vue';
import VueRouter from 'vue-router';

// Routes
import SIGN_ROUTES from './sign';
import FACILITY_ROUTES from './facility';
import PERFORMANCE_ROUTES from './performance';
import POST_ROUTES from './post';

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
	...FACILITY_ROUTES,
	...PERFORMANCE_ROUTES,
	...POST_ROUTES,
];

export default new VueRouter({
	mode: 'history',
	routes,
});
