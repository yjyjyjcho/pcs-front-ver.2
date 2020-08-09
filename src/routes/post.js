import store from '@/store';

const POST_ROUTES = [
	{
		path: '/posts',
		name: 'PostListPage',
		components: {
			contents: () => import('@/pages/post/PostListPage.vue'),
		},
	},
	{
		path: '/posts/create',
		name: 'PostCreatePage',
		components: {
			contents: () => import('@/pages/post/PostCreatePage.vue'),
		},
		props: {
			contents: true,
		},
		beforeEnter(to, from, next) {
			const { isAuthorized } = store.getters;
			if (!isAuthorized) {
				alert('로그인이 필요합니다.');
				next({ name: 'Signin' });
			}
			next();
		},
	},
	{
		path: '/posts/:postId',
		name: 'PostViewPage',
		components: {
			contents: () => import('@/pages/post/PostViewPage.vue'),
		},
		props: {
			// route에 params로 path 자원에 접근하는 대신 할당
			// 컴포넌트의 props를 통해 라우트의 파라미터에 접근 설정
			// router-view와 1:1 대응되어야 함
			contents: true,
		},
	},
	{
		path: '/posts/:postId/edit',
		name: 'PostEditPage',
		components: {
			contents: () => import('@/pages/post/PostEditPage.vue'),
		},
		props: {
			contents: true,
		},
		beforeEnter(to, from, next) {
			const { isAuthorized } = store.getters;
			if (!isAuthorized) {
				alert('로그인이 필요합니다.');
				next({ name: 'Signin' });
			}
			// next();
			// 글 작성자와 현재 로그인된 사용자를 비교해야 함
			// dispatch를 통해 action 호출
			store
				.dispatch('fetchPost', to.params.postId)
				.then(() => {
					const post = store.state.post;

					const isAuthor = post.user.id === store.state.me.id;
					if (isAuthor) {
						return next();
					} else {
						alert('게시물 작성자만 수정할 수 있음');
						next(from);
					}
				})
				.catch(err => {
					alert(err.response.data.msg);
					next(from);
				});
		},
	},
];

export default POST_ROUTES;
