import React from 'react';
import './head.css';
import { withTranslation, Trans } from 'react-i18next';

class Head extends React.Component {

    render() {
        return <h2 className='home-page-about-head'><Trans>Union of Photographers in Belarus</Trans></h2>;
    }

}

export default withTranslation()(Head);
