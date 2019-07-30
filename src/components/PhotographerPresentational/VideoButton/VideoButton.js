import React from 'react';
import PropTypes from 'prop-types';

import VideoModal from './VideoModal/VideoModal';

import './video-button.css';

class VideoButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
        };

        this.videoSrc = props.videoSrc;

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({ showModal: true });
    }

    hideModal() {
        this.setState({ showModal: false });
    }

    render() {
        const { showModal } = this.state;

        return (
            <>
                <VideoModal
                    videoSrc={this.videoSrc}
                    hideModal={this.hideModal}
                    showModal={showModal}
                />
                <button
                    type="button"
                    onClick={this.showModal}
                    className="video-button"
                >
                    Смотреть видео
                </button>
            </>
        );
    }
}

VideoButton.propTypes = {
    videoSrc: PropTypes.string.isRequired,
};

export default VideoButton;
