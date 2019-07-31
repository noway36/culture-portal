import React from 'react';
import { Link } from 'gatsby';

import './photographers-list.css';
import personsList from '../../../../info/persons-list.json';

class Photographers extends React.Component {
    render() {
        return (
            <ul className="photographers-list">
                { personsList.data.map(person =>
                    <li className="photographer-link" key={person.link}>
                        <Link to = {person.link}>
                            {person.fioRus}
                        </Link>
                    </li>
                )}
            </ul>
        );
    }
}

export default Photographers;
