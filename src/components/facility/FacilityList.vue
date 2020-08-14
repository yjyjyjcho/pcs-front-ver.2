<template>
	<div>
		<ul class="item-list">
			<!-- 아이템에 키값을 걸어야 한다. -->
			<li class="item" v-for="facility in facilities" :key="facility._id">
				<router-link
					:to="{
						name: 'FacilityDetailPage',
						params: { mt10id: facility.mt10id },
					}"
				>
					<figure
						class="item-image"
						:style="{ backgroundImage: 'url(' + facility.url + ')' }"
					></figure>
					<div class="item-desc">
						<h4>
							{{ facility.fcltynm }}
						</h4>
						<p>{{ facility.sidonm }} {{ facility.gugunnm }}</p>
						<p>
							시설특성:
							{{ facility.fcltychartr }}
							개관연도:
							{{ facility.opende != null ? facility.opende : '미표기' }}
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'FacilityList',
	props: {
		facilities: {
			type: Array,
			required: true,
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
