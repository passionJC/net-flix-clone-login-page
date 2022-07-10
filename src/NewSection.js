import React, { useEffect, useState } from "react";
import axios from './axios';
import './NewSection.css';

const base_url = "https://image.tmdb.org/t/p/original";



function NewSection({ title, fetchUrl, largerRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return (
        <div className="newSection">
            {movies.map(movie => (
                <img
                    key={movie.id}
                    className="newSectionPosterImg"
                    src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}
        </div>
    )
}

export default NewSection;