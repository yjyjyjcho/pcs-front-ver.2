import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
});

export default instance;

/**
 * 결론: 하나의 axios 객체로 작업을 이어가야 함!(적어도 이번 프로젝트에서는)
 * axios 객체를 리턴하는 형태로 코드를 진행하기 위해 여러 방향을 시도해봤지만
 * axios 객체가 리턴하는 형태로 코드를 작성하면 매번 새로운 객체로 리턴이 되는 것인지 token으로 인한 인증이 되지 않음
 * 그래서 이를 해결하기 위해 하나의 aixos 객체로 모두 작업
 */

// 인증이 필요없는 페이지는 다른 axios 객체를 사용해도 되는 것일까?
