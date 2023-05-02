import React, {ChangeEvent, FC} from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggleTodo } from '../../model/action';

import './Item.css';

interface IItem {
	completed: boolean;
	id: number;
	title: string;
}

export const Item: FC<IItem> = ({ completed, title, id }) => {

	const dispatch  = useDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(toggleTodo(id));
	};

	return (
		<li className='item__description' >
			<label>
				<input
					type='checkbox'
					onChange={handleChange}
					checked={completed}
				/>
				<NavLink
					to={`/card/${id}`}
					state={{completed: completed, title: title, id: id}}
				>
					{title}
				</NavLink>
			</label>
		</li>
	);
}
