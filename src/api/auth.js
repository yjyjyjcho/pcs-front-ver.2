import api from '@/api';

function registerUser(newUserData) {
	return api.post('/auth/signup', newUserData);
}

function loginUser(userData) {
	return api.post('/auth/signin', userData);
}

function getMyData() {
	return api.get('/auth/me');
}

export { registerUser, loginUser, getMyData };
