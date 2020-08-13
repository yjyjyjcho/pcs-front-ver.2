<template>
	<div>
		<!-- Item list -->
		<ul class="item-list">
			<!-- 아이템에 키값을 걸어야 한다. -->
			<li
				class="item"
				v-for="performance in paginatedPerformances"
				:key="performance._id"
			>
				<!-- li 태그 안에 이벤트를 사용하는 대신 a태그를 의미하는 router-link 사용 -->
				<!-- @click="moveDetail(performance.mt20id)" -->
				<router-link
					:to="{
						name: 'PerformanceDetailPage',
						params: { mt20id: performance.mt20id },
					}"
					on-abort="callback"
				>
					<figure
						class="item-image"
						:style="{ backgroundImage: 'url(' + performance.poster + ')' }"
					></figure>
					<div class="item-desc">
						<h4>{{ performance.prfnm }}</h4>
						<ul class="prf-list">
							<li>공연장명: {{ performance.fcltynm }}</li>
							<li>
								공연일: {{ performance.prfpdfrom }} ~
								{{ performance.prfpdto }}
							</li>
							<li>연극: {{ performance.genrenm }}</li>
							<li>공연상태: {{ performance.prfstate }}</li>
						</ul>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'PerformanceList',
	props: {
		paginatedPerformances: {
			type: Array,
			required: true,
		},
	},
	methods: {
		// API 오류로 인해 경로 이동에 실패할 경우 어떻게 대처하는가?
		// moveDetail(performanceId) {
		// 	// console.log(performanceId);
		// 	try {
		// 		this.$router.push({
		// 			name: 'PerformanceDetailPage',
		// 			params: { mt20id: performanceId },
		// 		});
		// 	} catch (error) {
		// 		this.$router.push({ name: 'Main' });
		// 		// console.log(error.response.msg);
		// 	}
		// },
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
