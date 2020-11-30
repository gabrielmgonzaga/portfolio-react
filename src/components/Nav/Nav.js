import React from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <nav>
      <div>
        <Link to="/">← Home</Link>
      </div>

      {<ul className="nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link Link to="/posts">Posts</Link>
          </li>
        </ul>}
    </nav>
  )
}
