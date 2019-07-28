import React from 'react';
import './team.css';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creators: [{alt: 'faryna'}]
        };
    };

    componentDidMount() {
        const creat = [
            {
                name_eng: 'Dzmitri Faryna',
                name_ru: 'Дмитрий Фарина',
                name_by: 'Дзмiтрый Фарына',
                src: './team_photos/ivanchikov.png',
                alt: 'Faryna',
                gitHub: 'https://github.com/esoshyki',
            },
            {
                name_eng: 'Aleksandr Dren',
                name_ru: 'Александр Дрен',
                name_by: 'Аляксандр Дрэн',
                src: './team_photos/ivanchikov.png',
                alt: 'Dren',
                gitHub: 'https://github.com/noway36'
            },
            {
                name_eng: 'Ilya Ivanchikov',
                name_ru: 'Илья Иванчиков',
                name_by: 'Iлля Iванчыкоy',
                src: './team_photos/ivanchikov.png',
                alt: 'Ivanchikov',
                gitHub: 'https://github.com/ilyaivanchikov'
            },
            {
                name_eng: 'Stanislau Famin',
                name_ru: 'Станислав Фомин',
                name_by: 'Станiслау Фамин',
                src: './team_photos/ivanchikov.png',
                alt: 'Famin',
                gitHub: 'https://github.com/slava-ff'
            },
            {
                name_eng: 'Ihar Tsykala',
                name_ru: 'Игорь Цыкало',
                name_by: 'Игар Цыкала',
                src: './team_photos/ivanchikov.png',
                alt: 'Tsykala',
                gitHub: 'https://github.com/ihartsykala'
            },
            {
                name_eng: 'Mukhamed Talaspaev',
                name_ru: 'Мухаммед Таласпаев',
                name_by: 'Мухамед Таласпаеу',
                src: './team_photos/ivanchikov.png',
                alt: 'Talaspaev',
                gitHub: 'https://github.com/talaspaev'
            },
        ];
        this.setState({
            creators: creat
        })

    };

    render() {
        const {creators} = this.state;
        return (
            <>
                <div className='team_container'>
                    <h2>Team Work</h2>
                    <div className='teamCard_container'>
                        {creators.map((el,idx) => {
                            return (
                                <div className="teamCard" id={`teamCard${idx}`}>
                                    <div className='teamCard_photo_layer1'>
                                        <div className='teamCard_photo_layer2'>
                                            <div className='teamCard_photo'
                                                style={{
                                                    background: `url(${el.src})`,
                                                    backgroundPosition: 'center'
                                                }} />
                                        </div>
                                    </div>
                                    <br />
                                    <h4 style={{
                                        lineHeight: '20px',
                                        textAlign: 'center'
                                    }}>{el.name_eng}</h4>
                                    <div className='teamCard_github'>
                                        <a href={`${el.gitHub}`}>
                                            <i className="fab fa-github" />
                                        </a>
                                    </div>
                                </div>)
                        })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Team;
