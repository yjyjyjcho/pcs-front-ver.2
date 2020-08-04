<template>
	<div>
		<h2>시설 정보</h2>
		<LoadingSpinner v-if="isLoading" />
		<template v-else>
			<facility-list :facilities="facilities" />
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import FacilityList from '@/components/facility/FacilityList';

import { getAllFacilities } from '@/api/facility.js';

export default {
	name: 'FacilityListPage',
	components: {
		FacilityList,
		LoadingSpinner,
	},
	data() {
		return {
			isLoading: false,
			facilities: [], // 컴포넌트로 값을 전달
		};
	},
	created() {
		this.fetchInfo();
	},
	methods: {
		async fetchInfo() {
			try {
				this.isLoading = true;
				const { data } = await getAllFacilities();
				this.facilities = data;
				this.isLoading = false;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
