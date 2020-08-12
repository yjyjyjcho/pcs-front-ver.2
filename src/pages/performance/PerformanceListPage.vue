<template>
	<div class="wrapper">
		<h2>공연 정보</h2>
		<loading-spinner v-if="isLoading" />
		<template v-else>
			<!-- Tabmenu -->
			<app-tab
				v-bind:tabs="tabs"
				:selectedTab="selectedTab"
				v-on:@tab="onClickTab"
			/>
			<app-pagination
				:selectedTab="selectedTab"
				:list-data="tabbedPerformances"
				@onPaginate="onPaginate"
			/>
			<!-- 공연 목록 -->
			<performance-list :paginatedPerformances="paginatedPerformances" />
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PerformanceList from '@/components/performance/PerformanceList.vue';
import AppTab from '@/components/common/AppTab.vue';
import AppPagination from '@/components/common/AppPagination';

import { mapState, mapActions } from 'vuex';

export default {
	name: 'PerformanceListPage',
	components: {
		PerformanceList,
		LoadingSpinner,
		AppTab,
		AppPagination,
	},
	data() {
		return {
			tabbedPerformances: [],
			paginatedPerformances: [],
			isLoading: false,
			tabs: ['클래식', '뮤지컬', '연극'],
			selectedTab: '',
		};
	},
	computed: {
		...mapState(['performances']),
	},
	async created() {
		await this.fetchPerformanceInfo();
		this.selectedTab = this.tabs[0];
		await this.onClickTab(this.selectedTab); // 첫 번째 탭을 인자로 넘김
	},
	methods: {
		...mapActions(['fetchPerformances']),
		async fetchPerformanceInfo() {
			try {
				this.isLoading = true;
				await this.fetchPerformances();
				this.isLoading = false;
			} catch (error) {
				console.log(error);
			}
		},
		async onClickTab(tab) {
			try {
				/**
				 * parameter로 넘어온 탭 이름에 해당하는 장르를 tabbedPerformances를 통해 분류
				 * 데이터를 여러번 호출하지는 않는지 확인해보기
				 */
				this.selectedTab = tab;
				// Array.from()을 통해 배열을 복사해야 하는지 고민했지만 정답은 filter
				this.tabbedPerformances = await this.performances.filter(
					performance => performance.genrenm === tab,
				);
				this.paginatedPerformances = this.tabbedPerformances.slice(0, 6);
			} catch (error) {
				console.error(error);
			}
		},
		onPaginate(paginatedPerformances) {
			// console.log(paginatedPerformances);
			this.paginatedPerformances = paginatedPerformances;
		},
	},
};
</script>

<style lang="scss" scoped></style>
