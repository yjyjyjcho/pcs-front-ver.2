<template>
	<!-- pagination button -->
	<div class="pagination">
		<button
			:disabled="pageNum === 0"
			@click="prevPage"
			class="page-btn"
			type="button"
		>
			<span class="material-icons">
				navigate_before
			</span>
			<!-- 이전 -->
		</button>
		<span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} page</span>
		<button
			:disabled="pageNum >= pageCount - 1"
			@click="nextPage"
			class="page-btn"
			type="button"
		>
			<span class="material-icons">
				navigate_next
			</span>
			<!-- 다음 -->
		</button>
	</div>
</template>

<script>
export default {
	name: 'AppPagination',
	props: {
		listData: {
			type: Array,
			required: true,
		},
		pageSize: {
			type: Number,
			required: false,
			default: 6,
		},
		// AppPagination 컴포넌트의 범용성을 위해 selectedTab 추가하고, required 값 false로 설정
		selectedTab: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			pageNum: 0,
		};
	},
	watch: {
		// watch 속성을 이용해 탭메뉴 항목이 바뀔 때마다 페이지네이션 데이터 0으로 초기화
		// 이를 통해 1페이지로 초기화됨
		selectedTab() {
			this.pageNum = 0;
		},
	},
	computed: {
		// 최대 페이징할 개수를 구하는 함수
		pageCount() {
			let listLeng = this.listData.length,
				listSize = this.pageSize,
				page = Math.floor(listLeng / listSize);
			if (listLeng % listSize > 0) page += 1;

			return page;
		},
		// 한 번에 보여줄 데이터 개수를 구하는 함수
		paginatedData() {
			const start = this.pageNum * this.pageSize;
			const end = start + this.pageSize;
			return this.listData.slice(start, end);
		},
	},
	methods: {
		prevPage() {
			this.pageNum -= 1;
			this.$emit('onPaginate', this.paginatedData);
		},
		nextPage() {
			this.pageNum += 1;
			this.$emit('onPaginate', this.paginatedData);
		},
	},
};
</script>

<style lang="scss" scoped>
.pagination {
	margin: 1.5rem 0;
	text-align: center;

	& .page-btn {
		width: 4rem;
		height: 2rem;
		letter-spacing: 0.5px;
		color: $gray-scale-0;
		background-color: $primary;
		border-radius: 5px;
	}
	.page-count {
		padding: 0 1rem;
		color: $gray-scale-6;
	}
}
</style>
