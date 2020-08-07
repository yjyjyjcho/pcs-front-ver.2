<template>
	<div class="header">
		<!-- 로고에 메인페이지로 이동하는 라우터 링크 -->
		<h1 class="logo">
			<router-link to="/">
				pcs<span class="material-icons">music_note</span>
			</router-link>
		</h1>
		<!-- user -->
		<div class="__user-container">
			<template v-if="isAuthorized">
				<div class="__user-section">
					<strong>{{ me.nickname }}님 환영합니다.</strong>
					<button @click="onSignout" class="btn md bg-wh">로그아웃</button>
				</div>
			</template>
			<template v-else>
				<div class="__sign-section">
					<router-link to="/signin" class="item">
						<span class="material-icons">login</span>
						로그인
					</router-link>
					<router-link to="/signup" class="item">
						<span class="material-icons">assignment_ind</span>
						회원가입
					</router-link>
				</div>
			</template>
		</div>
		<ul class="nav">
			<li class="naviItem">
				<router-link :to="{ name: 'PerformanceListPage' }">
					<span class="material-icons">info</span>
					공연 정보
				</router-link>
			</li>
			<li class="naviItem">
				<router-link :to="{ name: 'FacilityListPage' }">
					<span class="material-icons">domain</span>
					공연 시설
				</router-link>
			</li>
			<li class="naviItem">
				<router-link :to="{ name: 'PostListPage' }">
					<span class="material-icons">article</span>
					게시판
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

// 이 헤더 페이지에서 URL에 따라 바꿀 수는 없는 걸까?
// AppHeader를 라우팅 처리할 수는 없을까?
export default {
	name: 'AppHeader',
	computed: {
		...mapState(['me']),
		...mapGetters(['isAuthorized']),
	},
	methods: {
		...mapActions(['signout']),
		onSignout() {
			this.signout();
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	width: 210px;
	height: 100vh;
	top: 0;
	left: 0;
	padding: 20px;
	color: #fff;
	background-color: $primary-lighten-1;

	-webkit-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 4px 0px 5px 0px rgba(0, 0, 0, 0.5);

	.logo {
		color: #fff;
		// margin-top: 20px;
		font-size: $font-size-xl;

		span {
			font-size: $font-size-xl;
		}
	}
}

// 사용자 영역
.__user-container {
	height: 80px;

	.__user-section {
		margin-top: 10px;
		height: 80px;
		button {
			margin-top: 10px;
		}
	}
	.__sign-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		// margin: 10px 0;
		.item {
			height: 80px;
			line-height: 80px;
		}
		.item:last-child {
			margin-right: 10px;
		}
	}
}

.nav {
	.naviItem {
		color: #fff;
		font-size: $font-size-md;
		display: block;
		width: 100%;
		margin: 16px 0;
	}
}
</style>
