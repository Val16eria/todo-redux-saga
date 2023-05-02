import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todoReducers } from '../features/todo/model/reducer';
import { rootSaga } from '../features/todo/model/sagas/rootSaga';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import logger from 'redux-logger';

const rootReducer = combineReducers({
	todos: todoReducers,
})

export type RootState = ReturnType<typeof rootReducer>
export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector

//saga
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
