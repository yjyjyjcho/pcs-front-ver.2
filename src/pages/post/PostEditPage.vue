<template>
	<div class="post-edit-page">
		<h2>게시글 수정 페이지</h2>
		<loading-spinner v-if="!post" />
		<template v-else>
			<post-edit-form :post="post" @submit="onSubmit" />
		</template>
	</div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostEditForm from '@/components/post/PostEditForm.vue';

import { mapActions, mapState } from 'vuex';

export default {
	name: 'PostEditPage',
	components: {
		PostEditForm,
		LoadingSpinner,
	},
	props: {
		postId: {
			required: true,
		},
	},
	async created() {
		// 작성자가 접근할 때만 데이터를 가져와야 함
		this.fetchPost(this.postId);
	},
	computed: {
		...mapState(['post']),
	},
	methods: {
		...mapActions(['fetchPost', 'editPost']),
		async onSubmit(editedPost) {
			await this.editPost({ postId: this.postId, editedPost });
			this.$router.push({ name: 'PostViewPage', params: this.postId });
		},
	},
};
</script>
