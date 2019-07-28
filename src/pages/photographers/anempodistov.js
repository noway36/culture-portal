import React from 'react';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

class Amnepodistov extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainPic:
                'https://politring.com/uploads/posts/2018-01/medium/1516784716_dcee3768-9ddd-4175-9eb4-f2303fae8c40_cx0_cy3_cw0_w1023_r1_s.jpg',
            name: 'Анемподистов Михаил Владимирович',
            lifeYears: '(16 марта 1964 г. - 23 января 2018 г.)',
            about:
                'Белорусский художник, дизайнер, поэт, культуролог, искусствовед.',
            videoSrc: 'https://www.youtube.com/embed/nqFtaTVS_OI',
        };
    }

    render() {
        const { mainPic } = this.state;
        const { name } = this.state;
        const { lifeYears } = this.state;
        const { about } = this.state;
        const { videoSrc } = this.state;

        return (
            <Layout>
                <SEO title="Photographer1" />
                <PhotographerPresentational
                    mainPic={mainPic}
                    name={name}
                    lifeYears={lifeYears}
                    about={about}
                    videoSrc={videoSrc}
                />
            </Layout>
        );
    }
}

export default Amnepodistov;
