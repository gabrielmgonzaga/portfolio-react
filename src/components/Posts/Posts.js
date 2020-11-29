import React from 'react';
import './Posts.scss';
import Blog from '../Data/Blog.js';
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div className="posts">
      <h2>Blog <span role="img" aria-label="notebook">📓</span></h2>
      <hr />

      {Blog.map(({ id, title, date }) =>
          <Link to={`/posts/${id}`} key={id}>
            <span className="title">{title}</span>
            <span className="date">{date}</span>
          </Link>
        )}
    </div>
  )
}
