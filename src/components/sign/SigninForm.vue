<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="email">email: </label>
					<input id="email" type="text" v-model="email" />
					<p class="validation-text">
						<span class="warning" v-if="email && !isEmailValid">
							이메일 형식에 맞추어 아이디를 입력하세요
						</span>
					</p>
				</div>
				<div>
					<label for="password">password:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					:disabled="!isEmailValid || !password"
					type="submit"
					class="btn md"
					:class="!isEmailValid || !password ? 'disabled' : null"
				>
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { validateEmail } from '@/utils/validation.js';
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			email: '',
			password: '',
			logMessage: '',
		};
	},
	computed: {
		isEmailValid() {
			return validateEmail(this.email);
		},
	},
	methods: {
		...mapActions(['signin']),
		submitForm() {
			const { email, password } = this;
			const userData = { email, password };
			this.signin(userData)
				.then(() => {
					alert('로그인이 완료됨'); // delete
					this.$router.push({ name: 'Main' });
				})
				.catch(err => {
					console.log(err);
				});
		},
		initForm() {
			this.email = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
