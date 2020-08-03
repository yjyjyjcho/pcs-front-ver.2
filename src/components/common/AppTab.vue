<template>
	<ul class="tabs">
		<li
			v-for="(tab, index) in tabs"
			@click="onClickTab(tab)"
			v-bind:class="{ active: tab === selectedTab }"
			:key="index"
		>
			{{ tab }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'AppTab',
	props: {
		tabs: {
			type: Array,
			required: true,
		},
		selectedTab: {
			type: String,
			required: true,
		},
	},
	methods: {
		onClickTab(tab) {
			// console.log('on tab', tab);
			// this.selectedTab = tab; // 아래서도 탭을 건드리면 에러 발생
			this.$emit('@tab', tab);
		},
	},
};
</script>

<style lang="scss" scoped>
ul.tabs {
	display: flex;
	margin: 35px 0 15px 0;
}

.tabs li {
	display: inline-block;
	width: 50%;
	padding: 15px;
	text-align: center;
	box-sizing: border-box;
	border-bottom: 1px solid #ccc;
	background-color: #eee;
	color: #999;
	cursor: pointer;
}
.tabs li.active {
	// background-color: #2ac1bc;
	background-color: $primary-lighten-1;
	color: #fff;
}
</style>
