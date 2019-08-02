import React from 'react';
import './content.css';
import { withTranslation, Trans } from 'react-i18next';

class Content extends React.Component {

    render() {
        return <div className='home-page-about-content'><Trans>home-page-about-content</Trans></div>;
    }

}

export default withTranslation()(Content);
