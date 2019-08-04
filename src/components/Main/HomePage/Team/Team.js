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
            infoShow: false,
            coordinates: []
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
                workDone: 'Team component, global styles of site',
                show: false
            },
            {
                id: '2',
                name_eng: 'TeamDren',
                src: 'team_images/dren.png',
                alt: 'Dren',
                gitHub: 'https://github.com/noway36',
                workDone: `gatsby structure + basic layout and rooting
                implement photographer pages interaction logic
                implement youtube-overlay
                add template json files and 3 new authors
                content translate
                `,
                show: false
            },
            {
                id: '3',
                name_eng: 'TeamIvanchikov',
                src: 'team_images/ivanchikov.png',
                alt: 'Ivanchikov',
                gitHub: 'https://github.com/ilyaivanchikov',
                workDone: 'googleMap components, loader for map, galllery components',
                show: false
            },
            {
                id: '4',
                name_eng: 'TeamFomin',
                src: 'team_images/slava.png',
                alt: 'Fomin',
                gitHub: 'https://github.com/slava-ff',
                workDone: 'Implement i18next configuration, add json lexicon , add language toggle function , rite README about i18next in this project ',
                show: false
            },
            {
                id: '5',
                name_eng: 'TeamTsykala',
                src: 'team_images/tsyk.png',
                alt: 'Tsykala',
                gitHub: 'https://github.com/ihartsykala',
                workDone: 'add HomePageAbout Head, Content, DailyPerson components',
                show: false
            },
            {
                id: '6',
                name_eng: 'TeamShlembayev',
                src: 'team_images/kemal.png',
                alt: 'Shlembayev',
                gitHub: 'https://github.com/slider7',
                workDone: 'Implement TimeLine component, implement SearchPage component, find, edit and prepare info about photographers',
                show: false
            },
        ];
        const _title = 'TeamHeader';
        this.setState({
            creators: _creators,
            title: _title,
        });
    }

    handleOver = (event) => {
        console.log(event.clientX)
        this.setState({
            infoShow: true,
            coordinates: [event.clientX, event.clientY]})
    }

    handleLeave = (event,el) => {
        console.log(el)
        this.setState({infoShow: false})
    }

    render() {
        const { creators } = this.state;
        const { title } = this.state;
        const { infoShow } = this.state;
        const { coordinates } = this.state;
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
                                    <div onMouseEnter={this.handleOver}
                                          onMouseLeave={this.handleLeave}
                                        className="teamCard_photo_layer1"
                                        id={`teamCard_photo${idx}`}>
                                        <div className="teamCard_photo_layer2"
                                            onMouseEnter = {() => {el.show = true; console.log(el.show)}}
                                            onMouseLeave = {() => {el.show = false; console.log(el.show)}}>
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
                                    <div className='teamCard_workDone'
                                        style={{
                                            display: infoShow && el.show ? 'block' : 'none',
                                            left: `${coordinates[0]}px`,
                                            top: `${coordinates[1]}px`
                                        }}
                                    ><p>{el.workDone}</p></div>
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
