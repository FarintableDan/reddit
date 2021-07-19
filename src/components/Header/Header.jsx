import React from 'react';
import './Header.scss';

export const Header = ({ query, setQuery, getPosts }) => {
	return (
		<header>
			<input
				type="text"
				placeholder="Введите топик"
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<button
				className="button button_search"
				onClick={(e) => getPosts(e)}
			>
				Поиск
			</button>
		</header>
	)
};
