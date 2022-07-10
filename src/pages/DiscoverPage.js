import React, { useState } from 'react';
import './DiscoverPage.css';
import Search from '../SearchForMovies';
import Movies from '../component/DisplayMovie';

const DiscoverPage = () => {

    const [movies, setMovies] = useState([]);

    return (
        <div className="discoverPageBody">
            <Search onSearch={setMovies} />
            <Movies movies={movies} onMovies={setMovies} />
        </div>
    )
}

export default DiscoverPage;