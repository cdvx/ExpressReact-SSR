import React, { useState, useEffect } from 'react';
import useDebounce from './UseDebounce';
import WithStore from './WithStore'

const SearchBar = ({store}) => {
    const [searchInput, setInput] = useState('');

    const debouncedSearchTerm = useDebounce(searchInput, 500);

    useEffect(()=> {
        store.setSearchTerm(debouncedSearchTerm)
    }, [debouncedSearchTerm, store])

    const handleSearch =(e)=> {
        setInput(e.target.value)
    }

    return (
        <input
        // ref={input => searchInput = input}
        type="search"
        placeholder="Enter search term"
        value={searchInput}
        onChange={handleSearch}
        />
    )
}


export default WithStore()(SearchBar);
