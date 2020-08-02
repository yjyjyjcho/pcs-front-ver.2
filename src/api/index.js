import axios from 'axios';

const createInstance = () => {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
};

function createInstanceWith(url) {
	return axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
}

export const instance = createInstance();
export const auth = createInstanceWith('auth');
