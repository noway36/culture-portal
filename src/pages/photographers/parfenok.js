import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

import photographerInfo from '../../info/parfenok.json';

const Parfenok = () => {
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
    const { masterWorks } = photographerInfo;

    return (
        <Layout>
            <SEO title={t('Parfenok Vladimir Petrovich')} />
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
                masterWorks={masterWorks}
            />
        </Layout>
    );
};

export default Parfenok;
