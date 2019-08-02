import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { withTranslation, Trans } from 'react-i18next';

import './photographers-list.css';
import personsList from '../../../../info/persons-list.json';

class Photographers extends React.Component {
    constructor(props) {
        super(props);
        this.searchQuery = props.searchQuery;
        this.personsList = personsList.data;
    }

    componentWillReceiveProps(nextProps) {
        const currentLanguage = i18n.language;
        let searchKey = 'fioRus';

        if (currentLanguage === 'ru') {
            searchKey = 'fioRus';
        } else if (currentLanguage === 'en') {
            searchKey = 'fioEng';
        } else if (currentLanguage === 'by') {
            searchKey = 'fioBel';
        }

        this.searchQuery = nextProps.searchQuery;
        this.personsList = personsList.data.filter(
            person =>
                person[searchKey]
                    .toLowerCase()
                    .indexOf(this.searchQuery.toLowerCase()) > -1 ||
                person.yearOfBirth === this.searchQuery,
        );
        if (this.personsList.length === 0) {
            this.personsList = [
                {
                    link: '/search',
                    fioRus: 'Ничего не найдено.',
                },
            ];
        }
    }

    render() {
        return (
            <ul className="photographers-list">
                {this.personsList.map(person => (
                    <li className="photographer-link" key={person.link}>
                        <Link to={person.link}>
                            <Trans>{person.fioEng}</Trans>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
}

Photographers.propTypes = {
    searchQuery: PropTypes.string,
};
Photographers.defaultProps = { searchQuery: '' };

export default withTranslation()(Photographers);
