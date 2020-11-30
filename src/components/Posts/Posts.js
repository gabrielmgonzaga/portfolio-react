import React from 'react';
import './Posts.scss';
import Blog from '../Data/Blog.js';
import Nav from '../Nav/Nav'
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Posts() {
  const location = useLocation()

  return (
    <div className="posts">
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Posts from Gabe Gonzaga" />
          <title>Posts - Gabe Gonzaga</title>
      </Helmet>

      { location.pathname === '/posts' ? <Nav /> : null }

      <div className="animate fadeIn">
        <h2>Posts <span role="img" aria-label="notebook">📓</span></h2>

        {Blog.map(({ id, title, date }) =>
          <Link className="post" to={`/posts/${id}`} key={id}>
            <span className="title">{title}</span>
            <span className="date">{date}</span>
          </Link>
        )}
      </div>
    </div>
  )
}
