import React from 'react';
import PropTypes from 'prop-types';

import MainPicture from './MainPicture/MainPicture';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import VideoButton from './VideoButton/VideoButton';
import GoogleMap from './GoogleMap/GoogleMap';
import TimeLine from './TimeLine/TimeLine';
import Gallery from './Gallery/Gallery';
import MasterWorks from './MasterWorks/MasterWorks';
const PhotographerPresentational = props => {
    const { mainPic } = props;
    const { name } = props;
    const { lifeYears } = props;
    const { about } = props;
    const { videoSrc } = props;
    const { googleMap } = props;
    const { googleLife } = props;
    const { timeLineDates } = props;
    const { timeLineInfos } = props;
    const { gallery } = props;
    const { masterWorks } = props;

    return (
        <>
            <MainPicture mainPic={mainPic} />
            <GeneralInfo name={name} lifeYears={lifeYears} about={about} />
            <TimeLine
                timeLineDates={timeLineDates}
                timeLineInfos={timeLineInfos}
            />
            <MasterWorks masterWorks={masterWorks} />
            <VideoButton videoSrc={videoSrc} />
            <GoogleMap googleMap={googleMap} googleLife={googleLife} />
            <Gallery gallery={gallery} />
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
    timeLineDates: PropTypes.arrayOf(PropTypes.string).isRequired,
    timeLineInfos: PropTypes.arrayOf(PropTypes.string).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    masterWorks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PhotographerPresentational;
