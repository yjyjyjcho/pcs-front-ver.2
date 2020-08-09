import Cookies from 'js-cookie';

// API
// import { instance as api } from '@/api'; // 같은 axios 객체라도 다른가?..!
// import { instance } from '@/api/';
import api from '@/api/'; // auth 객체로 인증은 안되는 것 같은데
// 그래서 하나의 axios 객체에서 작업
// import { instance as api } from '@/api';

import {
	SET_ACCESS_TOKEN,
	SET_MY_INFO,
	DESTROY_ACCESS_TOKEN,
	DESTROY_MY_INFO,
	FETCH_POST,
	EDIT_POST,
} from './mutations-types';

export default {
	[SET_ACCESS_TOKEN](state, accessToken) {
		if (accessToken) {
			state.accessToken = accessToken;
			// HTTP 메시지의 헤더에 토큰을 등록하기 위해 axios 의 객체에 토큰을 심어줌
			// api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
			api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
			// 쿠키에 토큰 저장
			Cookies.set('accessToken', accessToken);
		}
	},
	[SET_MY_INFO](state, me) {
		// 사용자 정보를 스토어 상태에 반영, 로그인이 진행되는 과정 속에 할당
		if (me) state.me = me;
	},
	[DESTROY_ACCESS_TOKEN](state) {
		// SET_ACCESS_TOKEN 의 반대 작업
		state.accessToken = '';
		delete api.defaults.headers.common.Authorization;
		Cookies.remove('accessToken');
	},
	[DESTROY_MY_INFO](state) {
		state.me = null;
	},
	[FETCH_POST](state, post) {
		state.post = post;
	},
	[EDIT_POST](state, post) {
		state.post = post;
	},
};
