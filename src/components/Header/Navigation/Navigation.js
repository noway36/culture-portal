import React from 'react';
import { Link } from 'gatsby';
import { withTranslation, Trans } from 'react-i18next';

import './navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navigation-container">
                <ul className="navigation">
                    <li className="navigation-link">
                        <Link to="/">
                            <Trans>Home page</Trans>
                        </Link>
                    </li>
                    <li className="navigation-link">
                        <Link to="/search">
                            <Trans>Search page</Trans>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withTranslation()(Navigation);
