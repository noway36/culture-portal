import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Translate () {
    const { i18n } = useTranslation();

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
