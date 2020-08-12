import api from '@/api';

// 공연 목록을 조회하는 API
function fetchPerformancesAPI() {
	return api.get('/performances');
}

// 특정 공연을 조회하는 API
function fetchPerformanceAPI(performanceId) {
	return api.get(`/performances/${performanceId}`);
}

export { fetchPerformancesAPI, fetchPerformanceAPI };
