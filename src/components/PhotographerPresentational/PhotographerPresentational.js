import React from 'react';
import PropTypes from 'prop-types';

import VideoModal from './VideoModal/VideoModal';

const PhotographerPresentational = props => {
    const { name } = props;
    const { videoSrc } = props;

    return (
        <>
            <h2>{name}</h2>
            <VideoModal videoSrc={videoSrc} />
        </>
    );
};

PhotographerPresentational.propTypes = {
    name: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
};

export default PhotographerPresentational;
