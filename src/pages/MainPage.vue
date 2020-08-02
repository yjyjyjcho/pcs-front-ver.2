<template>
	<div class="wrapper">
		<h2>MainPage</h2>
		<!-- Intro Image를 구분하기 위한 영역 -->
		<div class="img-container">
			<img src="@/assets/img/intro-img.png" alt="소개" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'MainPage',
};
</script>

<style lang="scss" scoped>
.img-container {
	margin: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 80%;
	}
}
</style>
