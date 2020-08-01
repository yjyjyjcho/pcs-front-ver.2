import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/main',
		name: 'MainPage',
		components: {
			contents: () => import('@/pages/MainPage.vue'),
		},
	},
];

export default new VueRouter({
	mode: 'history',
	routes,
});
