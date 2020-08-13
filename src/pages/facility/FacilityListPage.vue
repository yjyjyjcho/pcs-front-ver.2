<template>
	<div>
		<h2>시설 정보</h2>
		<loading-spinner v-if="isLoading" />
		<template v-else>
			<facility-list :facilities="facilities" />
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import FacilityList from '@/components/facility/FacilityList';

import { mapState, mapActions } from 'vuex';

export default {
	name: 'FacilityListPage',
	components: {
		FacilityList,
		LoadingSpinner,
	},
	data() {
		return {
			isLoading: false,
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
				this.isLoading = false;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
