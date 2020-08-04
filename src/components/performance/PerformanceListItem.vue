<template>
	<!-- Item list -->
	<ul class="item-list">
		<!-- 아이템에 키값을 걸어야 한다. -->
		<li
			class="item"
			v-for="performanceItem in paginatedData"
			:key="performanceItem._id"
			@click="moveDetail(performanceItem.mt20id)"
		>
			<!-- <router-link :to="`info/${performanceItem.mt20id}`"> -->
			<figure
				class="item-image"
				:style="{ backgroundImage: 'url(' + performanceItem.poster + ')' }"
			></figure>
			<div class="item-desc">
				<h4>{{ performanceItem.prfnm }}</h4>
				<ul class="prf-list">
					<li>공연장명: {{ performanceItem.fcltynm }}</li>
					<li>
						공연일: {{ performanceItem.prfpdfrom }} ~
						{{ performanceItem.prfpdto }}
					</li>
					<li>연극: {{ performanceItem.genrenm }}</li>
					<li>공연상태: {{ performanceItem.prfstate }}</li>
				</ul>
			</div>
			<!-- </router-link> -->
		</li>
	</ul>
</template>

<script>
export default {
	name: 'PerformanceListItem',
	props: {
		paginatedData: {
			type: Array,
			required: true,
		},
	},
	methods: {
		moveDetail(item) {
			// console.log(item);
			try {
				this.$router.push({
					name: 'PerformanceDetailPage',
					params: { mt20id: item },
				});
			} catch (error) {
				this.$router.push({ name: 'Main' });
				// console.log(error.response.msg);
				console.error(error);
				if (error) {
					//
				}
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
	padding-bottom: 90%;
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

	h4 {
		font-size: 13px;
	}
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
