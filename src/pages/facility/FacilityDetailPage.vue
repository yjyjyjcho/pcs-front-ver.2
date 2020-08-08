<template>
	<div>
		<h2>시설 상세 페이지</h2>
		<loading-spinner v-if="isLoading" />
		<template v-else>
			<section class="info-section">
				<h2 class="prfm-title">
					{{ facilityData.fcltynm }}
				</h2>
				<div class="info-table">
					<table>
						<tr>
							<td>장소</td>
							<td>{{ facilityData.fcltynm }}</td>
						</tr>
						<tr>
							<td>시설특성</td>
							<td>{{ facilityData.fcltychartr }}</td>
						</tr>
						<tr>
							<td>개관연도</td>
							<td>{{ facilityData.opende }}</td>
						</tr>
						<tr>
							<td>객석수</td>
							<td>{{ facilityData.seatscale }}</td>
						</tr>
						<tr>
							<td>주소</td>
							<td>{{ facilityData.adres }}</td>
						</tr>
					</table>
				</div>
			</section>
			<!-- tabmenu -->
			<app-tab
				v-bind:tabs="tabs"
				:selectedTab="selectedTab"
				v-on:@tab="onClickTab"
			/>
			<div v-if="selectedTab === tabs[0]"></div>
			<div v-if="selectedTab === tabs[1]">
				<!-- if로 그려야 할 것 같은데? -->
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

import { getFacilityDetail } from '@/api/facility';

export default {
	components: {
		LoadingSpinner,
		AppTab,
		AppMap,
	},
	data() {
		return {
			isLoading: false,
			mt10id: '',
			tabs: ['데이터', '진행 공연', '위치'],
			selectedTab: '',
			facilityData: [],
			// daum map 속성
			center: { lat: '', lng: '' }, // 지도의 중심 좌표
		};
	},
	async created() {
		await this.getDetail();
		this.selectedTab = this.tabs[0];
	},
	methods: {
		async getDetail() {
			try {
				this.isLoading = true;
				// 목록 컴포넌트로부터 아이템의 아이디를 받아서 넘기만 하면 됨
				this.mt10id = this.$route.params.mt10id;
				const { data } = await getFacilityDetail(this.mt10id);
				console.log('뭐가 나오나..?', data);
				this.facilityData = data;
				this.isLoading = false;
				this.center = { lat: this.facilityData.la, lng: this.facilityData.lo };
				// this.setCenter(this.facilityData.la, this.facilityData.lo);
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

<style lang="scss" scoped>
.info-section {
	h2.prfm-title {
		color: $primary-lighten-2;
		margin: 10px 0;
	}
}

.info-table {
	display: flex;
	// height: 350px;

	.item-image {
		width: 300px;
		padding-top: 10%;
		background-color: lightgray;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	table {
		flex-grow: 1;
		// width: 50%;
		margin-left: 10px;

		tr > td:first-child {
			width: 100px;
			padding: 10px 20px 10px 10px;
			font-weight: bold;
			border-bottom: 1px solid $gray-scale-2;
			background-color: $gray-scale-1;

			&:last-child {
				border-bottom: none;
				color: red;
			}
		}
		tr > td:last-child {
			padding: 10px 0px 10px 10px;
		}
	}
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
