import React from 'react';
import PropTypes from 'prop-types';

import MainPicture from './MainPicture/MainPicture';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import VideoModal from './VideoModal/VideoModal';
import GoogleMap from './GoogleMap/GoogleMap';

const PhotographerPresentational = props => {
    const { mainPic } = props;
    const { name } = props;
    const { lifeYears } = props;
    const { about } = props;
    const { videoSrc } = props;
    const { googleMap } = props;
    const { googleLife } = props;

    return (
        <>
            <MainPicture mainPic={mainPic} />
            <GeneralInfo name={name} lifeYears={lifeYears} about={about} />
            <VideoModal videoSrc={videoSrc} />
            <GoogleMap  googleMap={googleMap} googleLife={googleLife} />
        </>
    );
};

PhotographerPresentational.propTypes = {
    name: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    mainPic: PropTypes.string.isRequired,
    lifeYears: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    googleMap: PropTypes.string.isRequired,
    googleLife: PropTypes.string.isRequired,
};

export default PhotographerPresentational;
