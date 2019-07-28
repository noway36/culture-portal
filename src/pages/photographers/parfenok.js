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
            videoSrc: 'https://www.youtube.com/embed/EX_fVFPdDoY',
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

export default Parfenok;
