import React from 'react';
import Blog from './Blog.js';
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div>
      <ul>
        {Blog.map(({ id, date }) =>
            <li key={id}>
              <Link to={`/posts/${id}`}>
                <span>{id}</span>
                <span>{date}</span>
              </Link>
            </li>
          )}
        </ul>
    </div>
  )
}
