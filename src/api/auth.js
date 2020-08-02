import { auth } from './index';

function registerUser(userData) {
	return auth.post('/signup', userData);
}

export { registerUser };
