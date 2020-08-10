<template>
	<div>
		<!-- pagination button -->
		<div class="btn-cover">
			<button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
				<span class="material-icons">
					navigate_before
				</span>
				<!-- 이전 -->
			</button>
			<span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
			<button
				:disabled="pageNum >= pageCount - 1"
				@click="nextPage"
				class="page-btn"
			>
				<span class="material-icons">
					navigate_next
				</span>
				<!-- 다음 -->
			</button>
		</div>

		<!-- performance gallery list -->
		<div>
			<performance-gallery :paginatedData="paginatedData" />
		</div>
	</div>
</template>

<script>
import PerformanceGallery from '@/components/performance/PerformanceGallery.vue';

export default {
	name: 'PerformanceList',
	components: {
		PerformanceGallery,
	},
	props: {
		performanceItems: {
			type: Array,
			required: true,
		},
		pageSize: {
			type: Number,
			required: false,
			default: 6,
		},
	},
	data() {
		return {
			pageNum: 0,
			id: '',
		};
	},
	computed: {
		// 최대 페이징할 개수를 구하는 함수
		pageCount() {
			let listLeng = this.performanceItems.length,
				listSize = this.pageSize,
				page = Math.floor(listLeng / listSize);
			if (listLeng % listSize > 0) page += 1;

			return page;
		},
		// 한 번에 보여줄 데이터 개수를 구하는 함수
		paginatedData() {
			const start = this.pageNum * this.pageSize,
				end = start + this.pageSize;
			return this.performanceItems.slice(start, end);
		},
	},
	methods: {
		prevPage() {
			this.pageNum -= 1;
		},
		nextPage() {
			this.pageNum += 1;
		},
		moveDetail(item) {
			console.log(item);
		},
	},
};
</script>

<style lang="scss" scoped>
.btn-cover {
	margin: 1rem 0;
	text-align: center;

	.page-btn {
		width: 4rem;
		height: 2rem;
		letter-spacing: 0.5px;
		color: $gray-scale-0;
		background-color: $primary-lighten-1;
		border-radius: 5px;
	}
	.page-count {
		padding: 0 1rem;
	}
}
</style>
