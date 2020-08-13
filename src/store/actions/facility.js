import { FETCH_FACILITY_LIST, FETCH_FACILITY } from '../mutations-types';
// Facility API
import { fetchFacilitiesAPI, fetchFacilityAPI } from '@/api/facility';

export default {
	fetchFacilities({ commit }) {
		return fetchFacilitiesAPI().then(res => {
			commit(FETCH_FACILITY_LIST, res.data);
		});
	},
	fetchFacility({ commit }, facilityId) {
		return fetchFacilityAPI(facilityId).then(res => {
			commit(FETCH_FACILITY, res.data);
		});
	},
};
