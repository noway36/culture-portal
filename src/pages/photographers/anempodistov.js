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
            videoSrc: 'https://www.youtube.com/embed/nqFtaTVS_OI?autoplay=1',
            googleMap:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.669878107178!2d27.575082815738952!3d53.91984193930004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf84a9511139%3A0x3be3534f5f48775e!2sKamaro%C5%ADski+Rynak!5e0!3m2!1sen!2sby!4v1564319456577!5m2!1sen!2sby',
            googleLife:
                'Жил Анемподистов Михаил Владимирович большую часть жизни в районе Комаровки',
        };
    }

    render() {
        const { mainPic } = this.state;
        const { name } = this.state;
        const { lifeYears } = this.state;
        const { about } = this.state;
        const { videoSrc } = this.state;
        const { googleMap } = this.state;
        const { googleLife } = this.state;

        return (
            <Layout>
                <SEO title="Anempodistov" />
                <PhotographerPresentational
                    mainPic={mainPic}
                    name={name}
                    lifeYears={lifeYears}
                    about={about}
                    videoSrc={videoSrc}
                    googleLife={googleLife}
                    googleMap={googleMap}
                />
            </Layout>
        );
    }
}

export default Amnepodistov;
