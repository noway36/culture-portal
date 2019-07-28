import React from 'react';
import PropTypes from 'prop-types';

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
                <h2 className="photographer-name">{this.name}</h2>
                <p className="photographer-life-years">{this.lifeYears}</p>
                <p className="photographer-about">{this.about}</p>
            </div>
        );
    }
}

GeneralInfo.propTypes = {
    name: PropTypes.string.isRequired,
    lifeYears: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

export default GeneralInfo;
