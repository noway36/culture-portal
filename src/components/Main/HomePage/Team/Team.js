import React from 'react';
import './team.css';

import { withTranslation, Trans } from 'react-i18next';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.handleOver = this.handleOver.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.state = {
            creators: [],
            title: {},
            showInfo: ['none', 'none', 'none', 'none', 'none', 'none'],
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
                workDone: 'Team cards, colors, styling and translate.',
            },
            {
                id: '2',
                name_eng: 'TeamDren',
                src: 'team_images/dren.png',
                alt: 'Dren',
                gitHub: 'https://github.com/noway36',
                workDone: `Architecture, config, youtube-modal, stying and translate.`,
            },
            {
                id: '3',
                name_eng: 'TeamIvanchikov',
                src: 'team_images/ivanchikov.png',
                alt: 'Ivanchikov',
                gitHub: 'https://github.com/ilyaivanchikov',
                workDone: 'Google Map, galllery, masterwork, translate',
            },
            {
                id: '4',
                name_eng: 'TeamFomin',
                src: 'team_images/slava.png',
                alt: 'Fomin',
                gitHub: 'https://github.com/slava-ff',
                workDone: 'i18next configuration, language toggle function',
            },
            {
                id: '5',
                name_eng: 'TeamTsykala',
                src: 'team_images/tsyk.png',
                alt: 'Tsykala',
                gitHub: 'https://github.com/ihartsykala',
                workDone: 'Home page content, DailyPerson, translate',
            },
            {
                id: '6',
                name_eng: 'TeamShlembayev',
                src: 'team_images/kemal.png',
                alt: 'Shlembayev',
                gitHub: 'https://github.com/slider7',
                workDone:
                    'TimeLine, search, find and edit info about photographers',
            },
        ];
        const _title = 'TeamHeader';
        this.setState({
            creators: _creators,
            title: _title,
        });
    }

    handleOver(e) {
        const cards = [...document.querySelectorAll('.teamCard_photo')];
        const cardIndex = cards.indexOf(e.target);

        this.setState(state => {
            const showInfo = state.showInfo;
            showInfo[cardIndex] = 'block';

            return {
                showInfo,
            };
        });
    }

    handleLeave() {
        this.setState({
            showInfo: ['none', 'none', 'none', 'none', 'none', 'none'],
        });
    }

    render() {
        const { creators } = this.state;
        const { title } = this.state;
        const { showInfo } = this.state;

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
                                    <div
                                        className="teamCard_photo_layer1"
                                        id={`teamCard_photo${idx}`}
                                    >
                                        <div className="teamCard_photo_layer2">
                                            <div
                                                onMouseEnter={this.handleOver}
                                                onMouseLeave={this.handleLeave}
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
                                    <div
                                        style={{
                                            display: `${showInfo[idx]}`,
                                        }}
                                        className="teamCard_workDone"
                                    >
                                        <p>{el.workDone}</p>
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
