import React from 'react';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

class Photographer1Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Парфенок Владимир Петрович' };
    }

    render() {
        const { name } = this.state;

        return (
            <Layout>
                <SEO title="Photographer1" />
                <PhotographerPresentational info={name} />
            </Layout>
        );
    }
}

export default Photographer1Page;
