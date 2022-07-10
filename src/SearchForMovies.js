import { useState } from 'react';
import React from 'react';
import './Search.css';
import { BiSearch } from 'react-icons/bi';

// search API used to search through database
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=607344dd3b63840652a4fbf0152c4e4f&query="


const Search = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    // Search form that fetches search API and returns results
    const submitForm = (e) => {
        e.preventDefault();

        // API used to search for any movie in the database
        fetch(searchUrl + search)
            .then(res => res.json())
            .then(data => {
                onSearch(data.results);
            })
        setSearch("");
    }

    const searchQuery = (e) => {
        setSearch(e.target.value)
    }

    return (

        <form className="rightNavMenu" onSubmit={submitForm}>
            <i class="fas fa-search"></i>
            <input
                className="searchBar"
                id="searchBar"
                type="search"
                placeholder="Search..."
                value={search}
                onChange={searchQuery}
            />
            <label for="searchBar" className="searchIcon" ><BiSearch /></label>
        </form>

    )
}

export default Search;