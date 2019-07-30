import React from 'react';
import './home-page-about.css';
import { Link } from 'gatsby';

function Head() {
    return <h2 className='home-page-about-head'>Союз фотографов в Беларуси</h2>;
}

function Content() {
    return <div className='home-page-about-content'>
        <p>
            <span style={{ fontWeight: '600'}}>Союз фотографов</span> (<span style={{ fontStyle: 'italic'}}>Белорусское общественное объединение фотографов</span>) - единственная в Беларуси некоммерческая организация, созданная фотографами для фотографов.
        </p>
        <p>
            Миссия Союза фотографов состоит в том, чтобы создавать условия и возможности для вашей успешной профессиональной деятельности в области фотографии, как в коммерческой так и в творческой.
        </p>
        <p>
            Союз фотографов был создан учредительным съездом 20 декабря 2003 года, на котором было принято решение о создании творческого Союза фотографов. В работе съезда приняли участие 179 человек со всех регионов Беларуси. 25 августа 2004 года Министерством юстиции Республики Беларусь было зарегистрировано Белорусское общественное объединение «Фотоискусство». В феврале 2005 года Союз фотографов вступил в Белорусскую конфедерацию творческих союзов.
        </p>
        <p>
            В августе 2016 года состоялся съезд, на котором было принято решение о переименовании организации в <span style={{ fontWeight: '600'}}>Белорусское общественное объединение фотографов</span>.
        </p>
        <p>
            Белорусское общественное объединение фотографов является членом Федерации европейских фотографов (FEP/ Federation of European Photographers). Это дает возможность членам объединения получать квалификации The European Photographer (EP), The Qualified European Photographer (QEP) или The Master Qualified European Photographer (MQEP).
        </p>
    </div>;
}

function DailyPerson() {
    return <div className='home-page-about-daily'>
        <h3>Фотограф дня</h3>
        <h4>Анемподистов Михаил Владимирович</h4>
        <h5>16 марта 1964 г. - 23 января 2018 г.</h5>
        <p>Белорусский художник, дизайнер, поэт, культуролог, искусствовед.</p>
        <img src="https://politring.com/uploads/posts/2018-01/medium/1516784716_dcee3768-9ddd-4175-9eb4-f2303fae8c40_cx0_cy3_cw0_w1023_r1_s.jpg" alt="Foto" />
        <Link to="/photographers/anempodistov">
            <button type="button">Перейти</button>
        </Link>
    </div>
}

class HomePageAbout extends React.Component {
    render() {
        return (
            <>
                <div className='home-page-about'>
                    <Head />
                    <Content />
                    <DailyPerson />
                </div>
            </>
        );
    }
}

export default HomePageAbout;
