import React from 'react';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

import photographerInfo from '../../info/savchenko.json';

class Savchenko extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainPic: photographerInfo.mainPic,
            name: photographerInfo.name,
            lifeYears: photographerInfo.lifeYears,
            about: photographerInfo.about,
            videoSrc: photographerInfo.videoSrc,
            googleMap: photographerInfo.googleMap,
            googleLife: photographerInfo.googleLife,
            timeLineDates: photographerInfo.timeLineDates,
            timeLineInfos: photographerInfo.timeLineInfos,
        };
    }

    render() {
        const { mainPic } = this.state;
        const { name } = this.state;
        const { lifeYears } = this.state;
        const { about } = this.state;
        const { videoSrc } = this.state;
        const { googleMap } = this.state;
        const { googleLife } = this.state;
        const { timeLineDates } = this.state;
        const { timeLineInfos } = this.state;

        return (
            <Layout>
                <SEO title="Савченко" />
                <PhotographerPresentational
                    mainPic={mainPic}
                    name={name}
                    lifeYears={lifeYears}
                    about={about}
                    videoSrc={videoSrc}
                    googleLife={googleLife}
                    googleMap={googleMap}
                    timeLineDates={timeLineDates}
                    timeLineInfos={timeLineInfos}
                />
            </Layout>
        );
    }
}

export default Savchenko;
