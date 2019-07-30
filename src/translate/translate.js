import React from 'react';
import { useTranslation } from 'react-i18next';

import i18n from './i18n';

import './translate.css';

export default function Translate () {
    useTranslation();

    const changeLanguage = (locale) => {
        i18n.changeLanguage(locale);
    };

    const handleChange = (event) => {
        changeLanguage(`${event.target.value}`);
    };

    return (
        <div className='language-select'>
            <select onChange={handleChange}>
                <option value='ru'>рус</option>
                <option value='be'>бел</option>
                <option value='en'>en</option>
            </select>
        </div>
    );
};
