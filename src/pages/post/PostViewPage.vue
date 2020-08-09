<template>
	<div class="post-view-page">
		<!-- post가 로딩 중일 경우 -->
		<loading-spinner v-if="!post" />
		<template v-else>
			<post-view :post="post" />
			<div class="btn-container">
				<router-link class="btn md" :to="{ name: 'PostListPage' }"
					>목록</router-link
				>
				<router-link
					class="btn md"
					:to="{ name: 'PostEditPage', params: { postId } }"
					>수정</router-link
				>
				<button class="btn md">삭제</button>
			</div>
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostView from '@/components/post/PostView.vue';

import { mapActions, mapState } from 'vuex';

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
		...mapState(['post']),
	},
	methods: {
		...mapActions(['fetchPost']),
		fetchData() {
			try {
				// route에 params로 path 자원에 접근하는 대신 할당
				// this.postId = this.$route.params.postId;
				this.fetchPost(this.postId);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
