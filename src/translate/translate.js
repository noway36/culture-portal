import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Translate () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (locale) => {
        i18n.changeLanguage(locale);
    };

    const handleChange = (event) => {
        changeLanguage(`${event.target.value}`);
    };

    return (
        <div className='App'>
            <div className='App-header'>
                <h1>{t('titleee.onee')}</h1>
                {/* we can use construction #1: 't{'some key from lexicon'}' */}
                <h2>{t('Welcome to React')}</h2>
                <select onChange={handleChange}>
                    <option value='ru'>рус</option>
                    <option value='be'>бел</option>
                    <option value='en'>en</option>
                </select>
            </div>
            <div className='App-intro'>
                {/* we can use construction #3: <Trans i18nKey='some_key_from_lexicon'></Trans> */}
                <p><Trans i18nKey='hello_world_key' /></p>
            </div>
        </div>
    );
};
