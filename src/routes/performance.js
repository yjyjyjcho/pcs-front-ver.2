const PERFORMANCE_ROUTES = [
	{
		path: '/performances',
		name: 'PerformanceListPage',
		components: {
			contents: () => import('@/pages/performance/PerformanceListPage.vue'),
		},
	},
	{
		path: '/performances/:mt20id',
		name: 'PerformanceDetailPage',
		components: {
			contents: () => import('@/pages/performance/PerformanceDetailPage.vue'),
		},
		props: {
			contents: true,
		},
	},
];

export default PERFORMANCE_ROUTES;
