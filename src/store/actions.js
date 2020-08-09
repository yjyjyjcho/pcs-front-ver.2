import {
	SET_ACCESS_TOKEN,
	SET_MY_INFO,
	DESTROY_ACCESS_TOKEN,
	DESTROY_MY_INFO,
	FETCH_POST,
	EDIT_POST,
} from './mutations-types';

// Auth
import { loginUser, getMyInfo } from '@/api/auth';
import { fetchPostAPI, editPostAPI } from '@/api/posts';

export default {
	signin({ commit }, payload) {
		const { email, password } = payload;
		return loginUser({ email, password })
			.then(res => {
				// console.log('res.data는 accessToken', res.data);
				const { accessToken } = res.data;
				// console.log('token을 쿠키에 저장');
				commit(SET_ACCESS_TOKEN, accessToken);
				// 토큰에 해당하는 사용자의 정보를 요청하는 API
				return getMyInfo();
			})
			.then(res => {
				// console.log('응답받은 사용자 정보를 state에 저장');
				commit(SET_MY_INFO, res.data);
			});
	},
	signinByToken({ commit }, token) {
		// 추후 개선할 지점이 있는 로직
		// 실제 서비스에서는 사용자 정보를 다시 쿠키에 저장할 필요는 없을 것 같음
		commit(SET_ACCESS_TOKEN, token);
		// 사용자의 정보를 받아온 후 스토어에 커밋
		return getMyInfo().then(res => {
			commit(SET_MY_INFO, res.data);
		});
	},
	signout({ commit }) {
		// DESTROY_ACCESS_TOKEN 과 DESTROY_MY_INFO 변이를 하나의 signout action으로 정의
		commit(DESTROY_ACCESS_TOKEN);
		commit(DESTROY_MY_INFO);
	},
	fetchPost({ commit }, postId) {
		return fetchPostAPI(postId).then(res => {
			// FETCH_POST 변이 실행과 함께 post 데이터 전달
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
};
