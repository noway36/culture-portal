import React from 'react';
import SearchLine from './SearchLine/SearchLine';
import PhotographersList from './PhotographersList/PhotographersList';

class SearchPage extends React.Component {


    render() {
        return (
            <>
                <SearchLine />
                <PhotographersList />
            </>
        );
    }
}

export default SearchPage;
