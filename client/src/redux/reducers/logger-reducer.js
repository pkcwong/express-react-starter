const initialState = {
	logs: []
};

export const LoggerReducer = (state = initialState, action) => {
	switch (action['type']) {
		case 'Logger/WRITE-COMPLETE': {
			return Object.assign({}, state, {
				logs: [
					...state['logs'],
					action['payload']['log']
				]
			});
		}
		default: {
			return state;
		}
	}
};
