import React from 'react';
import PropTypes from 'prop-types';

import './video-modal.css';

const VideoModal = props => {
    const { videoSrc } = props;
    const { hideModal } = props;
    const { showModal } = props;

    return showModal ? (
        <div onClick={hideModal} className="video-modal-show">
            <button className="close-btn" type="button">
                X
            </button>
            <div className="video-container">
                <iframe
                    title="myFrame"
                    width="560"
                    height="349"
                    src={videoSrc}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoPlay
                />
            </div>
        </div>
    ) : null;
};

VideoModal.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
};

export default VideoModal;
