import React from 'react';
import HeadLogo from './HeadLogo/HeadLogo';
import Navigation from './Navigation/Navigation';

import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <HeadLogo />
                <Navigation />
            </header>
        );
    }
}

export default Header;
