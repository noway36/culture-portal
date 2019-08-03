import React from 'react';
import { useTranslation } from 'react-i18next';

import HomePage from '../components/Main/HomePage/HomePage';
import Layout from '../components/CreateLayout/Layout';
import SEO from '../components/Seo';

const IndexPage = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <SEO title={t('Home')} />
            <HomePage />
        </Layout>
    );
};

export default IndexPage;
