<template>
	<div class="post-view-page">
		<!-- post가 로딩 중일 경우 -->
		<loading-spinner v-if="!post" />
		<template v-else>
			<post-view :post="post" @delete="onDelete" :isMyPost="isMyPost" />
		</template>
		<div class="btn-container">
			<router-link class="btn md" :to="{ name: 'PostListPage' }">
				목록
			</router-link>
		</div>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostView from '@/components/post/PostView.vue';

import { mapActions, mapState, mapGetters } from 'vuex';

export default {
	name: 'PostViewPage',
	components: { PostView, LoadingSpinner },
	props: {
		postId: { required: true },
	},
	created() {
		this.fetchData();
	},
	computed: {
		...mapState(['post', 'me']),
		...mapGetters(['isAuthorized']),
		isMyPost() {
			return this.isAuthorized && this.me.id === this.post.user.id;
		},
	},
	methods: {
		...mapActions(['fetchPost', 'deletePost']),
		async fetchData() {
			try {
				// path 자원에 접근하는 대신 route에 params의 자원을 할당
				// this.postId = this.$route.params.postId;
				await this.fetchPost(this.postId);
			} catch (error) {
				console.log(error);
			}
		},
		async onDelete(deleteId) {
			try {
				// 순서 보장을 위해 await
				// 자식 컴포넌트에서 전달하는 값 deleteId를 인자로 사용
				await this.deletePost(deleteId);
				this.$router.back();
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
