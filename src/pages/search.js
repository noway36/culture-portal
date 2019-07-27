import React from 'react';

import SearchPage from '../components/Main/SearchPage/SearchPage';
import Layout from '../components/CreateLayout/Layout';
import SEO from '../components/Seo';

const Search = () => (
    <Layout>
        <SEO title="Поиск" />
        <SearchPage />
    </Layout>
);

export default Search;
