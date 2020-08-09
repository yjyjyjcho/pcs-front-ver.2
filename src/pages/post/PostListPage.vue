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

import { mapActions, mapState } from 'vuex';

export default {
	name: 'PostListPage',
	components: {
		PostList,
		LoadingSpinner,
	},
	data() {
		return {
			isLoading: false,
		};
	},
	created() {
		this.fetchData();
	},
	computed: { ...mapState(['posts']) },
	methods: {
		...mapActions(['fetchPosts']),
		async fetchData() {
			try {
				this.isLoading = true;
				await this.fetchPosts();
				this.isLoading = false;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
