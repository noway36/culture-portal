import React from 'react';
import { Link } from 'gatsby';
import { withTranslation, Trans } from 'react-i18next';
import Button from '@material-ui/core/Button';

import './navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navigation-container">
                <ul className="navigation">
                    <li className="navigation-link">
                        <Link to="/">
                            <Button variant='contained' color='primary' fullWidth={true}>
                                <Trans>Home page</Trans>
                            </Button>
                        </Link>
                    </li>
                    <li className="navigation-link">
                        <Link to="/search">
                            <Button variant='contained' color='primary' fullWidth={true}>
                                <Trans>Search page</Trans>
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withTranslation()(Navigation);
