<template>
	<div>
		<h2>회원가입 페이지</h2>
		<signup-form />
	</div>
</template>

<script>
import SignupForm from '@/components/sign/SignupForm.vue';

export default {
	name: 'SignupPage',
	components: {
		SignupForm,
	},
};
</script>

<style></style>
