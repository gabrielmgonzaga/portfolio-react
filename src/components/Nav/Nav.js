import React from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <h1>
                <Link to="/">Gabriel Gonzaga</Link>
            </h1>

            <ul>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
