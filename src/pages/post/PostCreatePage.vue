<template>
	<div class="post-create-page">
		<h2>게시물 생성 페이지</h2>
		<post-create-form @submit="onSubmit" />
	</div>
</template>

<script>
import PostCreateForm from '@/components/post/PostCreateForm.vue';

// api
import { createPost } from '@/api/posts';

export default {
	name: 'PostCreatePage',
	components: {
		PostCreateForm,
	},
	methods: {
		async onSubmit(newPostData) {
			try {
				// emit으로 넘어온 PostData를 비구조화 할당 없이 사용
				const { data } = await createPost(newPostData);
				this.$router.push({
					name: 'PostViewPage',
					params: { postId: data.id },
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
