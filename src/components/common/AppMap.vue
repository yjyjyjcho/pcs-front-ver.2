<template>
	<div>
		<vue-daum-map
			:appKey="appKey"
			:center.sync="center"
			:level.sync="level"
			:mapTypeId="mapTypeId"
			:libraries="libraries"
			@load="onLoad"
			@center_changed="onMapEvent('center_changed', $event)"
			@zoom_start="onMapEvent('zoom_start', $event)"
			@zoom_changed="onMapEvent('zoom_changed', $event)"
			@bounds_changed="onMapEvent('bounds_changed', $event)"
			@click="onMapEvent('click', $event)"
			@dblclick="onMapEvent('dblclick', $event)"
			@rightclick="onMapEvent('rightclick', $event)"
			@mousemove="onMapEvent('mousemove', $event)"
			@dragstart="onMapEvent('dragstart', $event)"
			@drag="onMapEvent('drag', $event)"
			@dragend="onMapEvent('dragend', $event)"
			@idle="onMapEvent('idle', $event)"
			@tilesloaded="onMapEvent('tilesloaded', $event)"
			@maptypeid_changed="onMapEvent('maptypeid_changed', $event)"
			style="width:100%;height:400px;"
		/>
		<table class="map-table">
			<tr>
				<td>
					<span class="map-label">확대 수준</span>
				</td>
				<td>
					<input type="range" min="1" max="10" v-model.number="level" />
				</td>
				<td>{{ level }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
import VueDaumMap from 'vue-daum-map';

export default {
	name: 'AppMap',
	components: {
		VueDaumMap,
	},
	props: {
		centerData: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			// daum map 속성
			appKey: 'cf5d5d277e8b176d490837d7be11b835', // 테스트용 appkey
			center: { lat: '', lng: '' }, // 지도의 중심 좌표
			// center: { lat: this.centerData.lat, lng: this.centerData.lng }, // 지도의 중심 좌표
			level: 2, // 지도의 레벨(확대, 축소 정도),
			mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
			libraries: [], // 추가로 불러올 라이브러리
			map: null, // 지도 객체. 지도가 로드되면 할당됨.
			mapObject: null,
		};
	},
	created() {
		this.center = this.centerData;
	},
	methods: {
		// 지도가 로드 완료되면 load 이벤트 발생
		onLoad(map) {
			// this.map = map;
			// 지도의 현재 영역을 얻어옵니다
			var bounds = map.getBounds();
			// 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
			var boundsStr = bounds.toString();
			console.log('Daum Map Loaded', boundsStr);
			this.mapObject = map;
		},
		onMapEvent(event, params) {
			console.log(`Daum Map Event(${event})`, params);
		},
	},
};
</script>

<style></style>
