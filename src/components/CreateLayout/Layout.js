import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import './layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
