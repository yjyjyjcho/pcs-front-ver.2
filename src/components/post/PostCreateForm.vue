<template>
	<div class="post-create">
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
				<router-link :to="{ name: 'PostListPage' }" class="btn md">
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
		<p class="log">
			{{ logMessage }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'PostCreateForm',
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	methods: {
		onSubmit() {
			try {
				const { title, contents } = this;
				if (!title || !contents) {
					this.logMessage = '내용을 입력해주세요';
					return false;
				}
				// 사용자가 값을 입력하지 않을 경우 log Message 출력하도록 설정
				console.log(title, contents);
				this.$emit('submit', { title, contents });
			} catch (error) {
				// this.logMessage = '내용을 입력해주세요';
			}
		},
	},
};
</script>
