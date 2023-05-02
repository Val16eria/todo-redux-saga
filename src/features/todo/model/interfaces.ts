import { TodoActionTypes } from './types';

export interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface TodoState {
	list: ITodo[];
	loading: boolean;
	error: null | string;
}

export interface IToggleTodo {
	type: typeof TodoActionTypes.TOGGLE_TODO,
	payload: ITodo[],
}

interface ITodoAction {
	type: typeof TodoActionTypes.ACTION_TODOS_REQUEST,
}

interface ITodoSuccessAction {
	type: typeof TodoActionTypes.ACTION_TODOS_SUCCESS;
	payload: ITodo[];
}

interface ITodoErrorAction {
	type: typeof TodoActionTypes.ACTION_TODOS_ERROR;
	payload: string;
}

export type TodoActions =
	| ITodoAction
	| ITodoSuccessAction
	| ITodoErrorAction
	| IToggleTodo;
