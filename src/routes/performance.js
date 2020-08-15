// store를 사용해 상세보기 페이지로 이동할 때 데이터 요청 실패에 대응하는 error 처리를 진행해보자
import store from '@/store';

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
		beforeEnter(to, from, next) {
			// fetchData
			store
				.dispatch('fetchPerformance', to.params.mt20id)
				.then(() => {
					const performance = store.state.performance;
					const isFetch = performance.mt20id === to.params.mt20id;
					if (isFetch) {
						next();
					}
				})
				.catch(err => {
					console.log('API 오류로 인한 error가 발생');
					alert(err.response.data.msg);
					next(from);
				});
		},
	},
];

export default PERFORMANCE_ROUTES;
