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

		<!-- item-list -->
		<div>
			<facility-list-item :paginatedData="paginatedData" />
		</div>
		<!-- <ul class="item-list">
			<li
				class="item"
				v-for="facilityItem in paginatedData"
				:key="facilityItem._id"
				@click="moveDetail(facilityItem.mt10id)"
			>
				<figure
					class="item-image"
					:style="{ backgroundImage: 'url(' + facilityItem.url + ')' }"
				></figure>
				<div class="item-desc">
					<h4>
						{{ facilityItem.fcltynm }}
					</h4>
					<p>{{ facilityItem.sidonm }} {{ facilityItem.gugunnm }}</p>
					<p>
						시설특성:
						{{ facilityItem.fcltychartr }}
						개관연도:
						{{ facilityItem.opende != null ? facilityItem.opende : '미표기' }}
					</p>
				</div>
			</li>
		</ul> -->
	</div>
</template>

<script>
import FacilityListItem from '@/components/facility/FacilityListItem.vue';

// https://pewww.tistory.com/5 페이지네이션 소스 참고
export default {
	name: 'FacilityList',
	components: {
		FacilityListItem,
	},
	props: {
		facilities: {
			type: Array,
			required: true,
		},
		pageSize: {
			type: Number,
			required: false,
			default: 9,
		},
	},
	data() {
		return {
			pageNum: 0,
		};
	},
	computed: {
		pageCount() {
			let listLeng = this.facilities.length,
				listSize = this.pageSize,
				page = Math.floor(listLeng / listSize);
			if (listLeng % listSize > 0) page += 1;

			/*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
			return page;
		},
		paginatedData() {
			const start = this.pageNum * this.pageSize,
				end = start + this.pageSize;
			return this.facilities.slice(start, end);
		},
	},
	methods: {
		test() {},
		nextPage() {
			this.pageNum += 1;
		},
		prevPage() {
			this.pageNum -= 1;
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
