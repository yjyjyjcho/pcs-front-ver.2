<template>
	<section class="info-section">
		<h3 class="prfm-title">
			{{ performance.prfnm }}
		</h3>
		<div class="info-table">
			<figure
				class="item-image"
				:style="{ backgroundImage: 'url(' + performance.poster + ')' }"
			></figure>
			<table>
				<tr>
					<th scope="row">기간</th>
					<td>{{ performance.prfpdfrom }} ~ {{ performance.prfpdto }}</td>
				</tr>
				<tr>
					<th scope="row">장소</th>
					<td>{{ performance.fcltynm }}</td>
				</tr>
				<tr>
					<th scope="row">출연진</th>
					<td>{{ performance.prfcast }}</td>
				</tr>
				<tr>
					<th scope="row">관람연령</th>
					<td>{{ performance.prfage }}</td>
				</tr>
				<tr>
					<th scope="row">기획제작사</th>
					<td>{{ performance.entrpsnm }}</td>
				</tr>
				<tr>
					<th scope="row">티켓가격</th>
					<td>{{ performance.pcseguidance }}</td>
				</tr>
				<tr>
					<th scope="row">장르</th>
					<td>{{ performance.genrenm }}</td>
				</tr>
				<tr>
					<th scope="row">공연시간</th>
					<td>{{ performance.dtguidance }}</td>
				</tr>
				<tr>
					<th scope="row">공연상태</th>
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
	h3.prfm-title {
		color: $primary-lighten-1;
		margin: 10px 0;
		font-size: 1.5rem;
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

			tr > th {
				width: 100px;
				padding: 10px 20px 10px 10px;
				font-weight: bold;
				border-bottom: 1px solid $gray-scale-2;
				background-color: $gray-scale-1;
				text-align: left;
			}
			tr > td {
				padding: 10px 0px 10px 10px;
			}
			tr:last-child > th {
				border-bottom: none;
			}
		}
	}
}
</style>
