import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';

import './googleMap.css';

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);

        this.googleMap = props.googleMap;
        this.googleLife = props.googleLife;
    }

    render() {
        return (
            <div className="google-map-container">
                <p className="google-life">
                    <Trans>{this.googleLife}</Trans>
                </p>
                <iframe
                    title="google-map"
                    className="google-map"
                    src={this.googleMap}
                />
            </div>
        );
    }
}

GoogleMap.propTypes = {
    googleMap: PropTypes.string.isRequired,
    googleLife: PropTypes.string.isRequired,
};

export default withTranslation()(GoogleMap);
