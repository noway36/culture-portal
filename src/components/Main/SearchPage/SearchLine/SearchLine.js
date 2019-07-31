import React from 'react';
import PropTypes from 'prop-types';

import './search-line.css';

class SearchLine extends React.Component {
    constructor(props) {
        super(props);

        this.searchFio = props.searchFio;
    }

    render() {
        return (
            <input
                className="search-line"
                type="search"
                placeholder="Поиск"
                onChange={this.searchFio}/>
        );
    }
}

SearchLine.propTypes = {
    searchFio: PropTypes.func.isRequired,
};


export default SearchLine;
