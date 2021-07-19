import React from 'react';
import './Post.scss';

export const Post = (props) => {
	const date = new Date(props.created * 1000).toLocaleDateString('en-GB').replaceAll('/', '-');

	return (
		<div className="post">
			<a
				href={props.url}
				target="_blank"
				className="post-link"
				rel="noreferrer"
			>
				{props.title}
			</a>
			<div className="post-author">Posted by {props.author_fullname}</div>
			<div className="post-date">{date}</div>
		</div>
	)
}
