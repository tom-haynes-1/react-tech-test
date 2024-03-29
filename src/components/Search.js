import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import '../styles/search.css';
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
    const [value, setSearch] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    }

    return (
        <>
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
            className='search-input' 
            type='text'
            placeholder="Type here to being your search..."
            onChange={(e) => setSearch(e.target.value)} />
            <button className='search-btn' type='submit'>
                Search
            </button>
        </form>
        </>
    );
};

export default Search;

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired
};