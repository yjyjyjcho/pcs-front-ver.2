<template>
	<div class="post-create-page">
		<h2>게시물 생성 페이지</h2>
		<post-create-form @submit="onSubmit" />
	</div>
</template>

<script>
import PostCreateForm from '@/components/post/PostCreateForm.vue';

import { mapActions, mapState } from 'vuex';

export default {
	name: 'PostCreatePage',
	components: {
		PostCreateForm,
	},
	computed: {
		...mapState(['post']),
	},
	methods: {
		...mapActions(['createPost']),
		async onSubmit(newPost) {
			try {
				// emit으로 넘어온 PostData를 비구조화 할당 없이 사용
				// await을 통해 순서 보장이 필요함
				await this.createPost(newPost);
				this.$router.push({
					name: 'PostViewPage',
					params: { postId: this.post.id },
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
