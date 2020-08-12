<template>
	<div>
		<h2>공연 상세 페이지</h2>
		<loading-spinner v-if="isLoading" />
		<template v-else>
			<!-- performance detail -->
			<performance-detail :performance="performance" />
			<!-- tabmenu -->
			<app-tab
				v-bind:tabs="tabs"
				:selectedTab="selectedTab"
				v-on:@tab="onClickTab"
			/>
			<section v-if="selectedTab === tabs[0]">
				<!-- 이미지가 없거나 하나만 있을 경우 처리하는 로직을 만들어야 함 -->
				<!-- 포스터 이미지가 한 장뿐인 경우 자료형을 배열로 교체 -->
				<figure>
					<img
						:src="performance.poster"
						class="poster"
						:alt="performance.prfnm"
					/>
				</figure>
			</section>
			<section v-if="selectedTab === tabs[1]">
				<!-- 지명, 주소 -->
				<h3>{{ performance.fcltynm }}</h3>
				<p>
					{{ performance.adres }}
				</p>
				<!-- 지도는 if로 그려야 함 -->
				<app-map :centerData="center" />
			</section>
			<section v-if="selectedTab === tabs[2]">
				<h3>연관 정보가 없습니다.</h3>
			</section>
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import AppTab from '@/components/common/AppTab.vue';
import AppMap from '@/components/common/AppMap.vue';

import PerformanceDetail from '@/components/performance/PerformanceDetail';

// import { fetchPerformanceAPI } from '@/api/performance';
import { getFacilityDetail } from '@/api/facility';

import { mapState, mapActions } from 'vuex';

export default {
	name: 'PerformanceDetailPage',
	components: {
		LoadingSpinner,
		AppTab,
		AppMap,
		PerformanceDetail,
	},
	props: {
		mt20id: { required: true },
	},
	data() {
		return {
			isLoading: false,
			tabs: ['공연상세', '공연시설', '연관정보'],
			selectedTab: '',
			// daum map 속성
			center: { lat: '', lng: '' }, // 지도의 중심 좌표
		};
	},
	async created() {
		console.log('퍼포먼스 아이디가 나간다!!', this.mt20id);
		await this.fetchData();
		this.selectedTab = this.tabs[0];
	},
	computed: {
		...mapState(['performance']),
	},
	methods: {
		...mapActions(['fetchPerformance']),
		async fetchData() {
			this.isLoading = true;
			// const { data } = await fetchPerformanceAPI(this.mt20id);
			await this.fetchPerformance(this.mt20id);
			console.log('state에 담기는 값은: ', this.performance);
			const facilityData = await getFacilityDetail(this.performance.mt10id);
			const { la, lo } = facilityData.data;
			this.center = { lat: la, lng: lo };
			this.isLoading = false;
		},
		onClickTab(tab) {
			this.selectedTab = tab;
		},
	},
};
</script>

<style lang="scss" scoped>
// 공연 소개 이미지 가로 사이즈 100%로 설정
.poster {
	width: 100%;
}
.map-table {
	border: 4px solid $primary-lighten-2;
	td {
		display: inline-block;
		margin: 0 5px;
	}
	input {
		color: red;
		background: red;
	}
	.map-label {
		font-size: $font-size-md;
		font-weight: bold;
	}
}
</style>
