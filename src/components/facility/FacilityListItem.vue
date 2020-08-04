<template>
	<ul class="item-list">
		<!-- 아이템에 키값을 걸어야 한다. -->
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
	</ul>
</template>

<script>
export default {
	name: 'FacilityListItem',
	props: {
		paginatedData: {
			type: Array,
			required: true,
		},
	},
	methods: {
		async moveDetail(item) {
			try {
				// item은 시설상세 id
				this.$router.push({
					name: 'FacilityDetailPage',
					params: { mt10id: item },
				});
			} catch (error) {
				console.error(error);
				this.$router.push({ name: 'FacilityListPage' });
			}
		},
	},
};
</script>

<style lang="scss" scoped>
/* card list */
.item {
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	width: 50%;
}

.item-image {
	height: 0;
	padding-bottom: 60%;
	background-color: lightgray;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}

.item-desc {
	flex: 1 1 auto;
	padding: 1rem;
	// background-color: #fff;
	background-color: $gray-scale-0;
}

@media (min-width: 710px) {
	.item-list {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -1rem;
	}
	.item {
		width: 50%;
		padding: 0 1rem;
	}
}

@media (min-width: 1200px) {
	.item {
		width: 33.3333%;
	}
}
</style>
