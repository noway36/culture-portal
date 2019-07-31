import React from 'react';
import { withTranslation, Trans } from 'react-i18next';

import './head-logo.css';

class HeadLogo extends React.Component {

    render() {
        return <h1 className="head-logo"><Trans>Photographers of Belarus</Trans></h1>;
    }
}

export default withTranslation()(HeadLogo);
