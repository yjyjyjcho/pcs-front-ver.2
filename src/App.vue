<template>
	<div id="app">
		<div class="app-header">
			<app-header />
		</div>

		<div class="app-contents">
			<router-view name="contents" class="main" />
			<app-footer class="app-footer" />
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';

export default {
	name: 'App',
	components: {
		AppHeader,
		AppFooter,
	},
};
</script>

<style lang="scss">
@import '@/assets/scss/ui.scss'; // 요소별 UI를 정리한 scss

#app {
	display: flex;
	.app-header {
		width: 210px;
		min-height: 100vh;
		flex-shrink: 0;
	}
	.app-contents {
		width: 805px;
		min-width: 805px; // foooter를 위해서 min-width를 걸자
		padding: 20px 30px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	.main {
		width: 100%;
		margin: 20px auto 0;
		flex-grow: 1;
		// 각 페이지의 title
		h2 {
			margin-bottom: 20px;
			font-size: 2rem;
			color: $primary;
		}
	}
	.app-footer {
		align-items: flex-end;
	}
}
</style>
