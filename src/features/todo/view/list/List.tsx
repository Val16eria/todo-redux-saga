import React, {FC, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypeSelector } from '../../../../store';
import { requestTodos } from '../../model/action';

import { Filter } from '../filter';
import { Item } from '../item';

import './List.css';

export const List: FC = () => {

	const dispatch = useDispatch();
	const { filter } = useParams();
	const { loading, error, list } = useTypeSelector(state => state.todos);

	useEffect(() => {
		if (list.length === 0)
			dispatch(requestTodos());
	}, []);

	const filterList = () => {
		if (filter === 'completed')
			return list.filter((el) => el.completed);

		if (filter === 'active')
			return list.filter((el) => !el.completed);

		return list;
	};

	const filteredList = filterList();

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div className='list__container'>
			<h1>Tasks list</h1>
			<Filter />
			<ul className='list__tasks'>
				{filteredList.map((el: any) => (
					<Item key={el.id} {...el} />
				))}
			</ul>
		</div>
	);
}
