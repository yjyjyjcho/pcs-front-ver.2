<template>
	<div class="post-list-page">
		<h2>게시판</h2>
		<loading-spinner v-if="isLoading" />
		<!-- loding template -->
		<template v-else>
			<post-list :posts="paginatedPosts" />
			<router-link class="btn md" :to="{ name: 'PostCreatePage' }">
				글쓰기
			</router-link>
			<!-- pagination -->
		</template>
		<app-pagination
			@onPaginate="onPaginate"
			:list-data="posts"
			:page-size="7"
		/>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import AppPagination from '@/components/common/AppPagination.vue';
import PostList from '@/components/post/PostList.vue';

import { mapActions, mapState } from 'vuex';

export default {
	name: 'PostListPage',
	components: {
		PostList,
		LoadingSpinner,
		AppPagination,
	},
	data() {
		return {
			isLoading: false,
			paginatedPosts: [], // PostList로 전달
		};
	},
	async created() {
		await this.fetchData();
	},
	computed: {
		...mapState(['posts']),
	},
	methods: {
		...mapActions(['fetchPosts']),
		async fetchData() {
			try {
				this.isLoading = true;
				await this.fetchPosts();
				// 초기값 설정을 위해 보여줄 개수만큼 paginatedPosts에 할당
				this.paginatedPosts = this.posts.slice(0, 7);
				this.isLoading = false;
			} catch (error) {
				console.log(error);
			}
		},
		onPaginate(paginatedPosts) {
			// console.log(paginatedPosts);
			// app-pagination 컴포넌트에서 보내준 값을 반영
			this.paginatedPosts = paginatedPosts;
		},
	},
};
</script>
