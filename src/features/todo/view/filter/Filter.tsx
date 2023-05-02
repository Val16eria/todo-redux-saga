import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './Filter.css';

export const Filter: FC = () => {
	return (
		<div className='filter__links'>
			<NavLink to='/'>All</NavLink>
			<NavLink to='/completed'>Completed</NavLink>
			<NavLink to='/active'>Active</NavLink>
		</div>
	);
}
