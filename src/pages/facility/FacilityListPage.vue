<template>
	<div>
		<h2>시설 정보</h2>
		<loading-spinner v-if="isLoading" />
		<template v-else>
			<app-pagination :list-data="facilities" @onPaginate="onPaginate" />
			<facility-list :facilities="paginatedFacilities" />
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import AppPagination from '@/components/common/AppPagination.vue';

import FacilityList from '@/components/facility/FacilityList';

import { mapState, mapActions } from 'vuex';

export default {
	name: 'FacilityListPage',
	components: {
		FacilityList,
		LoadingSpinner,
		AppPagination,
	},
	data() {
		return {
			isLoading: false,
			paginatedFacilities: [],
		};
	},
	created() {
		this.fetchData();
	},
	computed: {
		...mapState(['facilities']),
	},
	methods: {
		...mapActions(['fetchFacilities']),
		async fetchData() {
			try {
				this.isLoading = true;
				await this.fetchFacilities();
				// Test
				this.paginatedFacilities = this.facilities.slice(0, 6);
				this.isLoading = false;
			} catch (error) {
				console.log(error);
			}
		},
		onPaginate(paginatedFacilities) {
			// app-pagination 컴포넌트에서 보내준 값을 반영
			this.paginatedFacilities = paginatedFacilities;
		},
	},
};
</script>
