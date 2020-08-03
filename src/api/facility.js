import api from '@/api';

function getAllFacilities() {
	return api.get('/facilities');
}

// 특정 공연 목록을 조회하는 API
function getFacilityDetail(item) {
	return api.get(`/facilities/${item}`);
}

export { getAllFacilities, getFacilityDetail };
