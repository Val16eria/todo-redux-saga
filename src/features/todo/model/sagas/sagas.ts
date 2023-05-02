import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { errorTodo, getTodos } from '../action';
import { TodoActionTypes } from '../types';
import { ITodo } from '../interfaces';

const getTodosSaga = () => {
	return axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');
}

function* getTodoSaga() {
	try {
		const response: AxiosResponse<ITodo[]> = yield call(getTodosSaga);
		yield put(getTodos(response.data));
	}
	catch (e:unknown) {
		yield put(errorTodo());
	}
}

function* todoSaga() {
	yield all([takeLatest(TodoActionTypes.ACTION_TODOS_REQUEST, getTodoSaga)]);
}

export default todoSaga;
