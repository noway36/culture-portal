import React from 'react';
import HeadLogo from './HeadLogo/HeadLogo';
import Navigation from './Navigation/Navigation';
import Translate from '../../translate/translate';

import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <HeadLogo />
                <Navigation />
                <Translate />
            </header>
        );
    }
}

export default Header;
