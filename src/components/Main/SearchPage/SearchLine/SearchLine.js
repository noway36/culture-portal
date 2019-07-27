import React from 'react';

import './search-line.css';

class SearchLine extends React.Component {
    render() {
        return (
            <input className="search-line" type="search" placeholder="Поиск" />
        );
    }
}

export default SearchLine;
