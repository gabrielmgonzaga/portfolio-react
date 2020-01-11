import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <h1>
                <Link to="/">Gabriel Gonzaga</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/case-studies">Case Studies</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}
