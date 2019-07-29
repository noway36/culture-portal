import React from 'react';

import Layout from '../../components/CreateLayout/Layout';
import SEO from '../../components/Seo';
import PhotographerPresentational from '../../components/PhotographerPresentational/PhotographerPresentational';

class Parfenok extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainPic:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Uladzimir_Parfianok.jpg/1200px-Uladzimir_Parfianok.jpg',
            name: 'Парфенок Владимир Петрович',
            lifeYears: '(16 марта 1964 г. - 23 января 2018 г.)',
            about:
                'Белорусский фотограф, куратор выставочных проектов, руководитель галереи визуальных искусств «NOVA». Живёт и работает в Минске. В творческой фотографии с середины 1980-х гг. Участвовал в многочисленных выставочных проектах в Беларуси и за рубежом. В фотографии — сторонник аналоговых технологий и ручной печати.',
            videoSrc: 'https://www.youtube.com/embed/EX_fVFPdDoY?autoplay=1',
            googleMap:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.700302404739!2d27.583234015738938!3d53.91930133934083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa125d183b7%3A0x247fd09224d3bf26!2svulica+Ku%C4%BAman+2%2C+Minsk+220089!5e0!3m2!1sen!2sby!4v1564320877626!5m2!1sen!2sby',
            googleLife: 'Руководитель галереи визуальных искусств «NOVA»',
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
                <SEO title="Парфенок" />
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

export default Parfenok;
