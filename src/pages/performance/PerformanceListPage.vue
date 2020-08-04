<template>
	<div class="wrapper">
		<h2>공연 정보</h2>
		<LoadingSpinner v-if="isLoading"></LoadingSpinner>
		<template v-else>
			<!-- Tabmenu -->
			<AppTab
				v-bind:tabs="tabs"
				:selectedTab="selectedTab"
				v-on:@tab="onClickTab"
			/>
			<!-- 공연 목록 -->
			<performance-list :performanceItems="performanceItems" />
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PerformanceList from '@/components/performance/PerformanceList.vue';
import AppTab from '@/components/common/AppTab.vue';

import { getAllPerformances } from '@/api/performance';

export default {
	name: 'PerformanceListPage',
	components: {
		PerformanceList,
		LoadingSpinner,
		AppTab,
	},
	data() {
		return {
			performanceItems: [],
			isLoading: false,
			tabs: ['클래식', '뮤지컬', '연극'],
			selectedTab: '',
		};
	},
	created() {
		this.fetchPerformanceInfo();
		this.selectedTab = this.tabs[0];
		this.onClickTab(this.selectedTab); // 첫 번째 탭을 인자로 넘김
	},
	methods: {
		async fetchPerformanceInfo() {
			try {
				this.isLoading = true;
				const { data } = await getAllPerformances();
				this.performanceItems = data;
				this.isLoading = false;
				// 데이터를 return하여 호출하는 곳에서 사용하도록 처리
				return data;
			} catch (error) {
				console.log(error);
			}
		},
		async onClickTab(tab) {
			try {
				// parameter로 넘어온 탭 이름에 해당하는 장르를 performanceItems에 할당
				const data = await this.fetchPerformanceInfo();
				this.selectedTab = tab;
				this.performanceItems = data.filter(item => item.genrenm === tab);
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>
