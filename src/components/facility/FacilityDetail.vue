<template>
	<section class="info-section">
		<h3 class="prfm-title">
			{{ facility.fcltynm }}
		</h3>
		<div class="info-table">
			<table>
				<tr>
					<th scope="row">장소</th>
					<td>{{ facility.fcltynm }}</td>
				</tr>
				<tr>
					<th scope="row">시설특성</th>
					<td>{{ facility.fcltychartr }}</td>
				</tr>
				<tr>
					<th scope="row">개관연도</th>
					<td>{{ facility.opende }}</td>
				</tr>
				<tr>
					<th scope="row">객석수</th>
					<td>{{ facility.seatscale }}</td>
				</tr>
				<tr>
					<th scope="row">주소</th>
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
	h3.prfm-title {
		color: $primary-lighten-1;
		margin: 10px 0;
		font-size: 1.5rem;
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
</style>
