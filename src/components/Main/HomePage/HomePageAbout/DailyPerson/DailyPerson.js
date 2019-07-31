import React from 'react';
import './daily-person.css';
import { Link } from 'gatsby';

export default function DailyPerson() {
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
