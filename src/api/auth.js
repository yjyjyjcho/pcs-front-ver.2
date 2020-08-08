import api from '@/api';

function registerUser(newUserData) {
	return api.post('/auth/signup', newUserData);
}

function loginUser(userData) {
	return api.post('/auth/signin', userData);
}

function getMyInfo() {
	return api.get('/auth/me');
}

export { registerUser, loginUser, getMyInfo };
