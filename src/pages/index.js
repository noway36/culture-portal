import React from 'react';

import HomePage from '../components/Main/HomePage/HomePage';
import Layout from '../components/CreateLayout/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Главная" />
        <HomePage />
    </Layout>
);

export default IndexPage;
