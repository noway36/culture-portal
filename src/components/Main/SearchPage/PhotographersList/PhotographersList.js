import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './photographers-list.css';
import personsList from '../../../../info/persons-list.json';

class Photographers extends React.Component {
    constructor(props) {
        super(props);
        this.searchQuery = props.searchQuery;
        this.personsList = personsList.data;
    }

    componentWillReceiveProps(nextProps) {
        this.searchQuery = nextProps.searchQuery;
        this.personsList = personsList.data.filter((person) =>
            (person.fioRus.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1));
        if (this.personsList.length === 0) {
            this.personsList = [{
                link: '/search',
                fioRus: 'Ничего не найдено.'
            }]
        }
    }

    render() {
        return (
            <ul className="photographers-list">
                { this.personsList.map(person =>
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

Photographers.propTypes = {
    searchQuery: PropTypes.string,
};
Photographers.defaultProps = { searchQuery: '' };

export default Photographers;
