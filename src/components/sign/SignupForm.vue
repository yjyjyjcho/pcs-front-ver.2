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
					<label for="nickname">nickname: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<div>
					<label for="password">password: </label>
					<input id="password" type="text" v-model="password" />
				</div>
				<div>
					<label for="passwordConfirm">password confirm: </label>
					<input id="passwordConfirm" type="text" v-model="passwordConfirm" />
				</div>
				<button
					type="submit"
					class="btn md"
					:class="isNotFormDataValid ? 'disabled' : null"
					:disabled="isNotFormDataValid"
				>
					회원 가입
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
	<!-- :class="!isEmailValid || !password || !nickname ? 'disabled' : null" -->
	<!-- :disabled="!isEmailValid || !nickname || !password || !passwordConfirm" -->
</template>

<script>
import { validateEmail } from '@/utils/validation.js';
import { registerUser } from '@/api/auth';

export default {
	name: 'SignupForm',
	data() {
		return {
			email: '',
			nickname: '',
			password: '',
			passwordConfirm: '',
			logMessage: '',
		};
	},
	computed: {
		isEmailValid() {
			return validateEmail(this.email);
		},
		isNotFormDataValid() {
			return (
				!this.isEmailValid ||
				!this.nickname ||
				!this.password ||
				!this.passwordConfirm
			);
		},
	},
	methods: {
		async submitForm() {
			const { email, nickname, password, passwordConfirm } = this;
			if (!email || !nickname || !password || !passwordConfirm) {
				this.logMessage = '모든 항목을 입력해주세요.';
			}
			if (password !== passwordConfirm) {
				this.logMessage = '비밀번호가 일치하지 않습니다.';
				return;
			}

			const newUserData = { email, nickname, password };
			try {
				const { data } = await registerUser(newUserData);
				// console.log(data);
				this.logMessage = `${data.nickname}님이 가입되었습니다.`;
				this.initForm();
			} catch (error) {
				// console.log(error.response.data);
				this.logMessage = '이미 중복된 아이디가 존재합니다.';
			}
		},
		initForm() {
			this.email = '';
			this.nickname = '';
			this.password = '';
			this.passwordConfirm = '';
		},
	},
};
</script>

<style lang="scss" scoped></style>
