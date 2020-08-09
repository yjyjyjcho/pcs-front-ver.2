<template>
	<div class="post-edit">
		<form @submit.prevent="onSubmit">
			<fieldset>
				<label for="title">title</label>
				<input
					v-model="title"
					type="text"
					id="title"
					name="title"
					placeholder="제목을 입력해주세요"
				/>
				<label for="contents">contents</label>
				<textarea
					v-model="contents"
					name="contents"
					id="contents"
					rows="10"
					placeholder="내용을 입력해주세요"
				/>
			</fieldset>
			<div class="btn-container">
				<router-link
					:to="{ name: 'PostViewPage', params: { postId: post.id } }"
					class="btn md"
				>
					Cancel
				</router-link>
				<button
					type="submit"
					class="btn md"
					:class="!title || !contents ? 'disabled' : 'null'"
					:disabled="!title || !contents"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'PostEditForm',
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
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	created() {
		this.title = this.post.title;
		this.contents = this.post.contents;
	},
	methods: {
		onSubmit() {
			const { title, contents } = this;
			this.$emit('submit', { title, contents });
		},
		onCancel() {
			this.$router.back();
		},
	},
};
</script>
