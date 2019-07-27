import React from 'react';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

class Photographer1Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Парфенок Владимир Петрович',
            videoSrc: 'https://www.youtube.com/embed/EX_fVFPdDoY',
        };
    }

    render() {
        const { name } = this.state;
        const { videoSrc } = this.state;

        return (
            <Layout>
                <SEO title="Photographer1" />
                <PhotographerPresentational name={name} videoSrc={videoSrc} />
            </Layout>
        );
    }
}

export default Photographer1Page;
