import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toggleTodo } from '../model/action';

import './Card.css';

export const Card: FC = () => {

	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const handleClick = () => {
		navigate(-1);
	}

	const [isComplete, setComplete] = useState(location?.state?.completed);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(toggleTodo(location?.state?.id));
		setComplete(!isComplete);
	};

	return (
		<div className='card__container'>
			<div className='card__title'>
				<p>TASK #{location?.state?.id}</p>
				<a href='#' onClick={handleClick}>BACK TO LIST</a>
			</div>
			<div className='card__content'>
				<p>{location?.state?.title}</p>
			</div>
			<div className='card__footer'>
				<label>
					<input
						type='checkbox'
						onChange={handleChange}
						checked={isComplete}
					/>
					{isComplete=== true ? 'CLOSED' : 'OPENED'}
				</label>
			</div>
		</div>
	);
}
