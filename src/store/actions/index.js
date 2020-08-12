import SIGN_ACTIONS from './sign';
import POST_ACTIONS from './post';
import PERFORMANCE_ACTIONS from './performance';

export default {
	...SIGN_ACTIONS,
	...POST_ACTIONS,
	...PERFORMANCE_ACTIONS,
};
