import React from 'react';
import { Link } from 'gatsby';

import './navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navigation-container">
                <ul className="navigation">
                    <li className="navigation-link">
                        <Link to="/">На главную</Link>
                    </li>
                    <li className="navigation-link">
                        <Link to="/search">Поиск фотографа</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
