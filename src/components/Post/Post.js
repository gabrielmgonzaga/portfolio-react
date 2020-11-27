import React from 'react';
import Blog from '../Posts/Blog.js';

export default function Post({ match }) {
  const blog = Blog.find(({ id }) => id == match.params.postId)

  return (
    <div>
      {blog.content.map(({ heading, paragraph, img }) =>
        <div>
          { heading === '' ? null : <h2>{heading}</h2> }
          { img.url === '' ? null : <img src={img.url} alt={img.alt} /> }
          { Array.isArray(paragraph) ? paragraph.map(paragraph => <p>{paragraph}</p>) : null }
        </div>
      )}
    </div>
  )
}
