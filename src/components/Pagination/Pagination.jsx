import React from 'react';
import './Pagination.scss';

export const Pagination = ({ before, after, getPosts }) => {
	const buttons = [
		{
			value: 'before',
			disabled: !before,
			text: 'Предыдущая'
		},
		{
			value: 'after',
			disabled: !after,
			text: 'Следующая'
		},
	];

	return (
		<div className="pagination">
			{buttons.map((button, index) => (
				<button
					key={index}
					value={button.value}
					disabled={button.disabled}
					onClick={(e) => getPosts(e)}
					className="button button_pagination"
				>
					{button.text}
				</button>
			))}
		</div>
	)
}
