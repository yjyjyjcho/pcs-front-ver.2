import { FETCH_PERFORMANCE_LIST, FETCH_PERFORMANCE } from '../mutations-types';

// Performance API
import { fetchPerformancesAPI, fetchPerformanceAPI } from '@/api/performance';

export default {
	fetchPerformances({ commit }) {
		return fetchPerformancesAPI().then(res => {
			commit(FETCH_PERFORMANCE_LIST, res.data);
		});
	},
	fetchPerformance({ commit }, performanceId) {
		return fetchPerformanceAPI(performanceId).then(res => {
			commit(FETCH_PERFORMANCE, res.data);
		});
	},
};
