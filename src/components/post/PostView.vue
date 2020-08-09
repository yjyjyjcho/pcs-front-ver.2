<template>
	<div class="post-view">
		<div>
			<h2>{{ post.title }}</h2>
			<span>게시글 번호: {{ post.id }}</span>
			<strong>{{ post.user.nickname }} {{ post.createdAt }}</strong>
		</div>
		<p>
			{{ post.contents }}
		</p>

		<div v-if="myPost" class="btn-container">
			<router-link
				class="btn md"
				:to="{ name: 'PostEditPage', params: { postId: post.id } }"
				>수정</router-link
			>
			<button @click="onDelete" class="btn md" type="button">
				삭제
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostView',
	props: {
		post: {
			type: Object,
			required: true,
			validator(post) {
				const isValidPostId = typeof post.id === 'number';
				const isValidTitle = !!post.title && post.title.length;
				const isValidContents = post.contents && post.contents.length;
				return isValidPostId && isValidTitle && isValidContents;
			},
		},
		myPost: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		onDelete() {
			this.$emit('delete', this.post.id);
		},
	},
};
</script>

<style></style>
