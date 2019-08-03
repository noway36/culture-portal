import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

import photographerInfo from '../../info/klinov.json';

const Klinov = () => {
    const { t } = useTranslation();

    const { mainPic } = photographerInfo;
    const { name } = photographerInfo;
    const { lifeYears } = photographerInfo;
    const { about } = photographerInfo;
    const { videoSrc } = photographerInfo;
    const { googleMap } = photographerInfo;
    const { googleLife } = photographerInfo;
    const { timeLineDates } = photographerInfo;
    const { timeLineInfos } = photographerInfo;
    const { gallery } = photographerInfo;

    return (
        <Layout>
            <SEO title={t('Klinov Artur Aleksandrovich')} />
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
                gallery={gallery}
            />
        </Layout>
    );
};

export default Klinov;
