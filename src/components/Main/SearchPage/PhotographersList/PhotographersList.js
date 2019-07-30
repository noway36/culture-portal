import React from 'react';
import { Link } from 'gatsby';

import './photographers-list.css';

class Photographers extends React.Component {
    render() {
        return (
            <ul className="photographers-list">
                <li className="photographer-link">
                    <Link to="/photographers/anempodistov">
                        Анемподистов Михаил Владимирович
                    </Link>
                </li>
                <li className="photographer-link">
                    <Link to="/photographers/parfenok">
                        Парфенок Владимир Петрович
                    </Link>
                </li>
                <li className="photographer-link">
                    <Link to="/photographers/savchenko">
                        Савченко Игорь Викторович
                    </Link>
                </li>
                <li className="photographer-link">
                    <Link to="/photographers/kachan">
                        Качан Вадим Аркадьевич
                    </Link>
                </li>
                <li className="photographer-link">
                    <Link to="/photographers/klinov">
                        Клинов Артур Александрович
                    </Link>
                </li>
            </ul>
        );
    }
}

export default Photographers;
