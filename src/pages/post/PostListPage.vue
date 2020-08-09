<template>
	<div class="post-list-page">
		<h2>게시판</h2>
		<loading-spinner v-if="isLoading" />
		<!-- loding template -->
		<template v-else>
			<post-list :posts="posts" />
			<router-link class="btn md" :to="{ name: 'PostCreatePage' }">
				글쓰기
			</router-link>
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostList from '@/components/post/PostList.vue';

import { fetchPosts } from '@/api/posts';

export default {
	name: 'PostListPage',
	components: {
		PostList,
		LoadingSpinner,
	},
	data() {
		return {
			posts: [],
			isLoading: false,
		};
	},
	created() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.posts = data;
			// console.log(data);
			this.isLoading = false;
		},
	},
};
</script>
