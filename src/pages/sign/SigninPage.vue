<template>
	<div>
		<h2>로그인 페이지</h2>
		<signin-form />
	</div>
</template>

<script>
import SigninForm from '@/components/sign/SigninForm.vue';

export default {
	name: 'SigninPage',
	components: {
		SigninForm,
	},
};
</script>

<style></style>
