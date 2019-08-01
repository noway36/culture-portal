import React from 'react';
import './daily-person.css';
import { Link } from 'gatsby';

export default function DailyPerson() {
    return <div className='home-page-about-daily'>
        <h3>Фотограф дня</h3>
        <h4>Анемподистов Михаил Владимирович</h4>
        <h5>16 марта 1964 г. - 23 января 2018 г.</h5>
        <p>Белорусский художник, дизайнер, поэт, культуролог, искусствовед.</p>
        <img src="https://i.ibb.co/0GB7fxV/anempodistov.jpg" alt="Foto" />
        <Link to="/photographers/anempodistov">
            <button type="button">Перейти</button>
        </Link>
    </div>
}
