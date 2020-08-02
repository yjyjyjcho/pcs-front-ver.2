const SIGN_ROUTES = [
	{
		path: '/signup',
		name: 'Signup',
		components: {
			contents: () => import('@/pages/sign/SignupPage.vue'),
		},
	},
	{
		path: '/signin',
		name: 'Signin',
		components: {
			contents: () => import('@/pages/sign/SigninPage.vue'),
		},
	},
];

export default SIGN_ROUTES;
