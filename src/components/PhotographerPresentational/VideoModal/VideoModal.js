import React from 'react';
import PropTypes from 'prop-types';

import './video-modal.css';

class VideoModal extends React.Component {
    constructor(props) {
        super(props);

        this.videoSrc = props.videoSrc;
    }

    render() {
        return (
            <div className="video-container">
                <iframe
                    title="myFrame"
                    width="560"
                    height="315"
                    src={this.videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }
}

VideoModal.propTypes = {
    videoSrc: PropTypes.string.isRequired,
};

export default VideoModal;
