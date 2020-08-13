import api from '@/api';

// 시설 목록을 조회하는 API
function fetchFacilitiesAPI() {
	return api.get('/facilities');
}

// 특정 시설을 조회하는 API
function fetchFacilityAPI(item) {
	return api.get(`/facilities/${item}`);
}

export { fetchFacilitiesAPI, fetchFacilityAPI };
