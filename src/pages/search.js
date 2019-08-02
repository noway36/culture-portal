import React from 'react';
import { useTranslation } from 'react-i18next';

import SearchPage from '../components/Main/SearchPage/SearchPage';
import Layout from '../components/CreateLayout/Layout';
import SEO from '../components/Seo';

const Search = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <SEO title={t('Search')} />
            <SearchPage />
        </Layout>
    );
};

export default Search;
