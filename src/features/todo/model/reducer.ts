import { TodoActions, TodoState } from './interfaces';
import { TodoActionTypes } from './types';

const initialState: TodoState = {
	list: [],
	loading: false,
	error: null,
}

export const todoReducers = (state = initialState, action: TodoActions) => {
	switch (action.type) {
		case TodoActionTypes.ACTION_TODOS_REQUEST:
			return {
				...state,
				loading: true
			};
		case TodoActionTypes.ACTION_TODOS_SUCCESS:
			return {
				...state,
				loading: false,
				list: action.payload
			};
		case TodoActionTypes.ACTION_TODOS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case TodoActionTypes.TOGGLE_TODO:
			return {
				...state,
				list: state.list.map((el) => (
					{ ...el, completed: el.id === Number(action.payload) ? !el.completed : el.completed }
				))
			};
		default:
			return state;
	}
}
