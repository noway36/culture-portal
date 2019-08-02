import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import './search-line.css';

const SearchLine = props => {
    const { searchFio } = props;
    const { t } = useTranslation();

    return (
        <input
            className="search-line"
            type="search"
            placeholder={t('Search')}
            onChange={searchFio}
        />
    );
};

SearchLine.propTypes = {
    searchFio: PropTypes.func.isRequired,
};

export default SearchLine;
