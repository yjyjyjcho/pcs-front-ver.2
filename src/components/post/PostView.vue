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
	},
};
</script>

<style></style>
