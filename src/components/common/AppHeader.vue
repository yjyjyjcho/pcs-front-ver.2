<template>
	<div class="header">
		<!-- 로고에 랑우터 링크 만들기 -->
		<h1 class="logo">
			<router-link to="/">
				pcs<span class="material-icons">music_note</span>
			</router-link>
		</h1>
	</div>
</template>

<script>
// 이 헤더 페이지에서 URL에 따라 바꿀 수는 없는 걸까?
// AppHeader를 라우팅 처리할 수는 없을까?
export default {
	name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	width: 210px;
	height: 100vh;
	top: 0;
	left: 0;
	padding: 0 20px;
	color: #fff;
	background-color: $primary-lighten-1;

	-webkit-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.5);

	.logo {
		color: #fff;
		margin-top: 20px;
		font-size: $font-size-xl;

		span {
			font-size: $font-size-xl;
		}
	}
}
</style>
