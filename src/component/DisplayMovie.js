import React, { useEffect } from "react";
import './DisplayMovies.css';

const images = "https://image.tmdb.org/t/p/w500/";

// main API used to display trending page
const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=607344dd3b63840652a4fbf0152c4e4f&page=`;


const DisplayMovie = ({ movies, onMovies }) => {

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                onMovies(data.results)
            })
    }, []);

    return (
        <div className="moviesList">
            {movies.length > 0 ? movies.map((movie) => {

                return (
                    <div className="moviePoster">
                        <img src={movie.poster_path ? `${images}${movie.poster_path}`
                            : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} />
                    </div>
                );
            }) : <p class="noResults">No results found. Please try again.</p>}
        </div>


    )
}

export default DisplayMovie;

