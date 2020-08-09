import {
	FETCH_POST,
	FETCH_POST_LIST,
	EDIT_POST,
	DELETE_POST,
} from '../mutations-types';

// Post API
import {
	fetchPostAPI,
	fetchPostsAPI,
	createPostAPI,
	editPostAPI,
	deletePostAPI,
} from '@/api/posts';

export default {
	fetchPost({ commit }, postId) {
		return fetchPostAPI(postId).then(res => {
			// FETCH_POST 변이 실행과 함께 post 데이터 전달
			commit(FETCH_POST, res.data);
		});
	},
	fetchPosts({ commit }) {
		return fetchPostsAPI().then(res => {
			// FETCH_POST 변이 실행과 함께 post 데이터 전달
			commit(FETCH_POST_LIST, res.data);
		});
	},
	createPost({ commit }, newPost) {
		return createPostAPI(newPost).then(res => {
			// Backend 데이터 생성 요청과 함께 FETCH_POST 변이 실행하여 post state에 데이터 저장
			commit(FETCH_POST, res.data);
		});
	},
	editPost({ commit }, payload) {
		const { postId, editedPost } = payload;
		return editPostAPI(postId, editedPost).then(res => {
			commit(EDIT_POST, res.data);
		});
		// catch에 대한 로직이 필요한지 점검
	},
	deletePost({ commit }, postId) {
		return deletePostAPI(postId).then(() => {
			commit(DELETE_POST);
		});
	},
};
