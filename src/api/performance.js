import api from '@/api';

function getAllPerformances() {
	return api.get('/performances');
}

// 특정 공연 목록을 조회하는 API
function getPerformanceDetail(item) {
	return api.get(`/performances/${item}`);
}

export { getAllPerformances, getPerformanceDetail };
