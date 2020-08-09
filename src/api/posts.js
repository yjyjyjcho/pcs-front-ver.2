import api from '@/api';

// 게시글 목록 조회
function fetchPostsAPI() {
	return api.get('/posts');
}

// 게시글 상세 내용 조회
function fetchPostAPI(postId) {
	return api.get(`/posts/${postId}`);
}

function createPostAPI(postData) {
	return api.post('/posts', postData);
}

function editPostAPI(postId, postData) {
	return api.put(`/posts/${postId}`, postData);
}

function deletePostAPI(postId) {
	return api.delete(`/posts/${postId}`);
}

export {
	fetchPostsAPI,
	fetchPostAPI,
	createPostAPI,
	editPostAPI,
	deletePostAPI,
};
