import React from 'react';
import './team.css';

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
                name_eng: 'Dzmitri Faryna',
                name_ru: 'Дмитрий Фарина',
                name_by: 'Дзмiтрый Фарына',
                src: 'team_images/esoshyki.png',
                alt: 'Faryna',
                gitHub: 'https://github.com/esoshyki',
            },
            {
                id: '2',
                name_eng: 'Aleksandr Dren',
                name_ru: 'Александр Дрень',
                name_by: 'Аляксандр Дрэнь',
                src: 'team_images/default.png',
                alt: 'Dren',
                gitHub: 'https://github.com/noway36',
            },
            {
                id: '3',
                name_eng: 'Ilya Ivanchikov',
                name_ru: 'Илья Иванчиков',
                name_by: 'Iлля Iванчыкоy',
                src: 'team_images/ivanchikov.png',
                alt: 'Ivanchikov',
                gitHub: 'https://github.com/ilyaivanchikov',
            },
            {
                id: '4',
                name_eng: 'Stanislau Famin',
                name_ru: 'Станислав Фомин',
                name_by: 'Станiслау Фамин',
                src: 'team_images/default.png',
                alt: 'Famin',
                gitHub: 'https://github.com/slava-ff',
            },
            {
                id: '5',
                name_eng: 'Ihar Tsykala',
                name_ru: 'Игорь Цыкало',
                name_by: 'Игар Цыкала',
                src: 'team_images/default.png',
                alt: 'Tsykala',
                gitHub: 'https://github.com/ihartsykala',
            },
            {
                id: '6',
                name_eng: 'Mukhamed Talaspaev',
                name_ru: 'Мухаммед Таласпаев',
                name_by: 'Мухамед Таласпаеу',
                src: 'team_images/default.png',
                alt: 'Talaspaev',
                gitHub: 'https://github.com/talaspaev',
            },
            {
                id: '7',
                name_eng: 'Kemalkhan Shlembayev',
                name_ru: 'Кемалхан Шлембаев',
                name_by: 'Кемалхан Шлямбяеу',
                src: 'team_images/default.png',
                alt: 'Shlembayev',
                gitHub: 'https://github.com/slider7',
            },
        ];
        const _title = {
            en: 'This site was created by delevopers:',
            ru: 'Этот сайт создан командой разработчиков:',
            by: 'Гэты сайт створаны камандай распрацоўшчыкаў:',
        };
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
                    <h2>{title.ru}</h2>
                    <div className="teamCard_container">
                        {creators.map((el, idx) => {
                            return (
                                <div className="teamCard" key={el.id} id={`teamCard${idx}`}>
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
                                            {el.name_ru}
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

export default Team;
