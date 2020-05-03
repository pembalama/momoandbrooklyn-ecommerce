const initialState = {
	user: {},
};

const GET_USER = 'GET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

//action that will take the user object received from the database and will place it in redux state, making it available for all components to use.
export function getUser(userObj) {
	return {
		type: GET_USER,
		payload: userObj,
	};
}

//action that will clear the user from redux state when the user has logged out.
export function logoutUser() {
	return {
		type: LOGOUT_USER,
		payload: {},
	};
}

export default function reducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_USER:
			return { ...state, user: payload };
		case LOGOUT_USER:
			return { ...state, user: payload };
		default:
			return state;
	}
}
