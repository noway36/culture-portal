import React from 'react';
import './team.css';

import { withTranslation, Trans } from 'react-i18next';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creators: [],
            title: {},
        };
    }

    componentDidMount() {
        const _creators = [
            {
                id: '1',
                name_eng: 'TeamFaryna',
                src: 'team_images/esoshyki.png',
                alt: 'Faryna',
                gitHub: 'https://github.com/esoshyki',
            },
            {
                id: '2',
                name_eng: 'TeamDren',
                src: 'team_images/dren.png',
                alt: 'Dren',
                gitHub: 'https://github.com/noway36',
            },
            {
                id: '3',
                name_eng: 'TeamIvanchikov',
                src: 'team_images/ivanchikov.png',
                alt: 'Ivanchikov',
                gitHub: 'https://github.com/ilyaivanchikov',
            },
            {
                id: '4',
                name_eng: 'TeamFomin',
                src: 'team_images/slava.png',
                alt: 'Fomin',
                gitHub: 'https://github.com/slava-ff',
            },
            {
                id: '5',
                name_eng: 'TeamTsykala',
                src: 'team_images/tsyk.png',
                alt: 'Tsykala',
                gitHub: 'https://github.com/ihartsykala',
            },
            {
                id: '6',
                name_eng: 'TeamTalaspaev',
                src: 'team_images/muham.png',
                alt: 'Talaspaev',
                gitHub: 'https://github.com/talaspaev',
            },
            {
                id: '7',
                name_eng: 'TeamShlembayev',
                src: 'team_images/kemal.png',
                alt: 'Shlembayev',
                gitHub: 'https://github.com/slider7',
            },
        ];
        const _title = 'TeamHeader';
        this.setState({
            creators: _creators,
            title: _title,
        });
    }

    render() {
        const { creators } = this.state;
        const { title } = this.state;
        return (
            <>
                <div className="team_container">
                    <h2>
                        <Trans>{title}</Trans>
                    </h2>
                    <div className="teamCard_container">
                        {creators.map((el, idx) => {
                            return (
                                <div
                                    className="teamCard"
                                    key={el.id}
                                    id={`teamCard${idx}`}
                                >
                                    <div className="teamCard_photo_layer1">
                                        <div className="teamCard_photo_layer2">
                                            <div
                                                className="teamCard_photo"
                                                style={{
                                                    background: `url(${el.src})`,
                                                    backgroundPosition:
                                                        'center',
                                                    backgroundSize: '110px',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="teamCard_name">
                                        <h4
                                            style={{
                                                lineHeight: '20px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Trans>{el.name_eng}</Trans>
                                        </h4>
                                    </div>
                                    <div className="teamCard_github">
                                        <a href={`${el.gitHub}`}>
                                            <i className="fab fa-github" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default withTranslation()(Team);
