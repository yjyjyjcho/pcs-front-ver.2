<template>
	<section class="info-section">
		<h2 class="prfm-title">
			{{ performance.prfnm }}
		</h2>
		<div class="info-table">
			<figure
				class="item-image"
				:style="{ backgroundImage: 'url(' + performance.poster + ')' }"
			></figure>
			<table>
				<tr>
					<td>기간</td>
					<td>{{ performance.prfpdfrom }} ~ {{ performance.prfpdto }}</td>
				</tr>
				<tr>
					<td>장소</td>
					<td>{{ performance.fcltynm }}</td>
				</tr>
				<tr>
					<td>출연진</td>
					<td>{{ performance.prfcast }}</td>
				</tr>
				<tr>
					<td>관람연령</td>
					<td>{{ performance.prfage }}</td>
				</tr>
				<tr>
					<td>기획제작사</td>
					<td>{{ performance.entrpsnm }}</td>
				</tr>
				<tr>
					<td>티켓가격</td>
					<td>{{ performance.pcseguidance }}</td>
				</tr>
				<tr>
					<td>장르</td>
					<td>{{ performance.genrenm }}</td>
				</tr>
				<tr>
					<td>공연시간</td>
					<td>{{ performance.dtguidance }}</td>
				</tr>
				<tr>
					<td>공연상태</td>
					<td>{{ performance.prfstate }}</td>
				</tr>
			</table>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PerformanceDetail',
	props: {
		performance: {
			type: Object,
			required: true,
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
}
</style>
