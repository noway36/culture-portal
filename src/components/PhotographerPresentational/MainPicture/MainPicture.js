import React from 'react';
import PropTypes from 'prop-types';

import './main-picture.css';

class MainPicture extends React.Component {
    constructor(props) {
        super(props);

        this.mainPic = props.mainPic;
    }

    render() {
        return (
            <div className="picture-container">
                <img
                    className="main-picture"
                    alt="photographer-pic"
                    src={this.mainPic}
                />
            </div>
        );
    }
}

MainPicture.propTypes = {
    mainPic: PropTypes.string.isRequired,
};

export default MainPicture;
