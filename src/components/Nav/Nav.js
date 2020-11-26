import React from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <h1>
                <Link to="/">GG</Link>
            </h1>

            {
              <ul className="nav">
                  <li>
                    <Link to="/work">Work</Link>
                  </li>
                  <li>
                    <Link to="/posts">Blog</Link>
                  </li>
              </ul>
            }
        </nav>
    )
}
