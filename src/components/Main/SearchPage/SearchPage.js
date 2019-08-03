import React from 'react';
import SearchLine from './SearchLine/SearchLine';
import PhotographersList from './PhotographersList/PhotographersList';

class SearchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            searchQuery: '',
        };
        this.searchFio = this.searchFio.bind(this);
    }

    searchFio(evt) {
        evt.preventDefault();

        const searchQuery = evt.target.value;
        if (searchQuery !== this.state) {
            this.setState({ searchQuery });
        }
    }

    render() {
        const { searchQuery } = this.state;

        return (
            <>
                <SearchLine searchFio={this.searchFio} />
                <PhotographersList searchQuery={searchQuery} />
            </>
        );
    }
}

export default SearchPage;
