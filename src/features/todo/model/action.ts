import { TodoActionTypes } from './types';

export const requestTodos = () => {
	return { type: TodoActionTypes.ACTION_TODOS_REQUEST }
}

export const getTodos = (data: any[]) => {
	return { type: TodoActionTypes.ACTION_TODOS_SUCCESS, payload: data }
}

export const errorTodo = () => {
	return { type: TodoActionTypes.ACTION_TODOS_ERROR, payload: 'Проблемсы' }
}

export const toggleTodo = (id: number) => {
	return { type: TodoActionTypes.TOGGLE_TODO, payload: id }
}
