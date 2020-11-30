import React from 'react';
import './Footer.scss';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/gabriel-gonzaga">LinkedIn</a>
                </li>
                <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/gabrielmgonzaga">Github</a>
                </li>
            </ul>
        </footer>
    )
}
