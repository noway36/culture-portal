import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';

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
                    <Trans>Watch video</Trans>
                </button>
            </>
        );
    }
}

VideoButton.propTypes = {
    videoSrc: PropTypes.string.isRequired,
};

export default withTranslation()(VideoButton);
