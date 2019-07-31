import React from 'react';
import SearchLine from './SearchLine/SearchLine';
import PhotographersList from './PhotographersList/PhotographersList';

class SearchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            searchQuery : '',
        }
        this.searchFio = this.searchFio.bind(this);
    }

    searchFio(evt){
        evt.preventDefault();

        const searchQuery = evt.target.value;
        if (searchQuery !== this.state) {
            this.setState({ searchQuery });
        }
    }

    render() {
        return (
            <>
                <SearchLine searchFio = {this.searchFio} />
                <PhotographersList searchQuery = {this.state.searchQuery} />
            </>
        );
    }
}

export default SearchPage;
