import React from 'react';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

class Photographer1Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Анемподистов Михаил Владимирович',
            videoSrc: 'https://www.youtube.com/embed/nqFtaTVS_OI',
        };
    }

    render() {
        const { name } = this.state;
        const { videoSrc } = this.state;

        return (
            <Layout>
                <SEO title="Photographer1" />
                <PhotographerPresentational videoSrc={videoSrc} name={name} />
            </Layout>
        );
    }
}

export default Photographer1Page;
