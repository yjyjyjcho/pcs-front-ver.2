import { FETCH_PERFORMANCE_LIST } from '../mutations-types';

// Performance API
import { fetchPerformancesAPI } from '@/api/performance';

export default {
	fetchPerformances({ commit }) {
		return fetchPerformancesAPI().then(res => {
			commit(FETCH_PERFORMANCE_LIST, res.data);
		});
	},
};
