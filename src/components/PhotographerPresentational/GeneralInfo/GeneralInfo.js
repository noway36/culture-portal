import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';

import './general-info.css';

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);

        this.name = props.name;
        this.lifeYears = props.lifeYears;
        this.about = props.about;
    }

    render() {
        return (
            <div className="general-info-container">
                <h2 className="photographer-name">
                    <Trans>{this.name}</Trans>
                </h2>
                <p className="photographer-life-years">
                    <Trans>{this.lifeYears}</Trans>
                </p>
                <p className="photographer-about">
                    <Trans>{this.about}</Trans>
                </p>
            </div>
        );
    }
}

GeneralInfo.propTypes = {
    name: PropTypes.string.isRequired,
    lifeYears: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

export default withTranslation()(GeneralInfo);
