<template>
	<div>
		<h2>공연 상세 페이지</h2>
		<LoadingSpinner v-if="isLoading"></LoadingSpinner>
		<template v-else>
			<section class="info-section">
				<h2 class="prfm-title">
					{{ prfData.prfnm }}
				</h2>
				<div class="info-table">
					<figure
						class="item-image"
						:style="{ backgroundImage: 'url(' + prfData.poster + ')' }"
					></figure>
					<table>
						<tr>
							<td>기간</td>
							<td>{{ prfData.prfpdfrom }} ~ {{ prfData.prfpdto }}</td>
						</tr>
						<tr>
							<td>장소</td>
							<td>{{ prfData.fcltynm }}</td>
						</tr>
						<tr>
							<td>출연진</td>
							<td>{{ prfData.prfcast }}</td>
						</tr>
						<tr>
							<td>관람연령</td>
							<td>{{ prfData.prfage }}</td>
						</tr>
						<tr>
							<td>기획제작사</td>
							<td>{{ prfData.entrpsnm }}</td>
						</tr>
						<tr>
							<td>티켓가격</td>
							<td>{{ prfData.pcseguidance }}</td>
						</tr>
						<tr>
							<td>장르</td>
							<td>{{ prfData.genrenm }}</td>
						</tr>
						<tr>
							<td>공연시간</td>
							<td>{{ prfData.dtguidance }}</td>
						</tr>
						<tr>
							<td>공연상태</td>
							<td>{{ prfData.prfstate }}</td>
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
			<section v-if="selectedTab === tabs[0]">
				<!-- 이미지가 없거나 하나만 있을 경우 처리하는 로직을 만들어야 함 -->
				<!-- 포스터 이미지가 한 장뿐인 경우 자료형을 배열로 교체 -->
				<figure>
					<img :src="prfData.poster" class="poster" :alt="prfData.prfnm" />
				</figure>
			</section>
			<section v-if="selectedTab === tabs[1]">
				<!-- 지명, 주소 -->
				<h3>{{ prfData.fcltynm }}</h3>
				<p>
					{{ prfData.adres }}
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

import { getPerformanceDetail } from '@/api/performance';
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
			mt20id: '',
			tabs: ['공연상세', '공연시설', '연관정보'],
			selectedTab: '',
			prfData: [],
			// daum map 속성
			center: { lat: '', lng: '' }, // 지도의 중심 좌표
		};
	},
	async created() {
		await this.getPerformanceDetail();
		this.selectedTab = this.tabs[0];
	},
	methods: {
		async getPerformanceDetail() {
			this.isLoading = true;
			this.mt20id = this.$route.params.mt20id;
			const { data } = await getPerformanceDetail(this.mt20id);
			const facilityData = await getFacilityDetail(data.mt10id);
			const { la, lo } = facilityData.data;
			this.center = { lat: la, lng: lo };
			this.prfData = data;
			// console.log(data);
			this.isLoading = false;
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
	height: 350px;
	// TabMenu와 거리를 띄우기 위해 margin 설정
	margin-bottom: 50px;
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
