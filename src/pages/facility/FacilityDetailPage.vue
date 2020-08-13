<template>
	<div>
		<h2>시설 상세 페이지</h2>
		<loading-spinner v-if="isLoading" />
		<template v-else>
			<!-- facility detail -->
			<facility-detail :facility="facility" />
			<!-- tabmenu -->
			<app-tab
				v-bind:tabs="tabs"
				:selectedTab="selectedTab"
				v-on:@tab="onClickTab"
			/>
			<div v-if="selectedTab === tabs[0]">
				<p>데이터를 표시할 영역입니다.</p>
			</div>
			<div v-if="selectedTab === tabs[1]">
				<!-- if로 그려야 할 것 같은데? -->
				<p>진행공연 내역을 표시할 영역입니다.</p>
			</div>
			<div v-if="selectedTab === tabs[2]">
				<!-- center 위치 객체를 전달 -->
				<app-map :centerData="center" />
			</div>
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import AppTab from '@/components/common/AppTab.vue';
import AppMap from '@/components/common/AppMap.vue';
import FacilityDetail from '@/components/facility/FacilityDetail.vue';

import { mapState, mapActions } from 'vuex';

export default {
	components: {
		LoadingSpinner,
		AppTab,
		AppMap,
		FacilityDetail,
	},
	data() {
		return {
			isLoading: false,
			mt10id: '',
			tabs: ['데이터', '진행 공연', '위치'],
			selectedTab: '',
			// daum map 속성
			center: { lat: '', lng: '' }, // 지도의 중심 좌표
		};
	},
	async created() {
		await this.fetchData();
		this.selectedTab = this.tabs[0];
	},
	computed: {
		...mapState(['facility']),
	},
	methods: {
		...mapActions(['fetchFacility']),
		async fetchData() {
			try {
				this.isLoading = true;
				// 목록 컴포넌트로부터 아이템의 아이디를 받아서 넘기만 하면 됨
				this.mt10id = this.$route.params.mt10id;
				await this.fetchFacility(this.mt10id);
				this.isLoading = false;
				this.center = { lat: this.facility.la, lng: this.facility.lo };
			} catch (error) {
				console.error(error);
			}
		},
		onClickTab(tab) {
			this.selectedTab = tab;
		},
	},
};
</script>
