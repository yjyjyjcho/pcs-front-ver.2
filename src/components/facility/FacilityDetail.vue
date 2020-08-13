<template>
	<section class="info-section">
		<h2 class="prfm-title">
			{{ facility.fcltynm }}
		</h2>
		<div class="info-table">
			<table>
				<tr>
					<td>장소</td>
					<td>{{ facility.fcltynm }}</td>
				</tr>
				<tr>
					<td>시설특성</td>
					<td>{{ facility.fcltychartr }}</td>
				</tr>
				<tr>
					<td>개관연도</td>
					<td>{{ facility.opende }}</td>
				</tr>
				<tr>
					<td>객석수</td>
					<td>{{ facility.seatscale }}</td>
				</tr>
				<tr>
					<td>주소</td>
					<td>{{ facility.adres }}</td>
				</tr>
			</table>
		</div>
	</section>
</template>

<script>
export default {
	name: 'FacilityDetail',
	props: {
		facility: {
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
}
.info-table {
	display: flex;
	// height: 350px;

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
</style>
