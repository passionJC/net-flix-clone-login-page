import React, { useState, useEffect } from "react";
import './MoviesPage.css';
import Row from '../Row';
import requests from '../requests';
import MovieBanner from '../MovieBanner';


const MoviePage = () => {

    const [popularMoviesOnly, setPopularMoviesOnly] = useState([]);
    const [topRatedMoviesOnly, setTopRatedMoviesOnly] = useState([]);
    const [upComingMoviesOnly, setUpComingMoviesOnly] = useState([]);

    useEffect(() => {
        fetch(requests.fetchPopularMoviesOnly)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setPopularMoviesOnly(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchTopRatedMoviesOnly)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setTopRatedMoviesOnly(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchUpComingMoviesOnly)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setUpComingMoviesOnly(data.results);
            })
    }, [])

    return (
        <div>
            <div className="moviePageBody">
                <MovieBanner />
                <h2>Popular Movies</h2>
                <div className="flexRow">
                    {popularMoviesOnly.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
                </div>

                <h2>Top Rated Movies</h2>
                <div className="flexRow">
                    {topRatedMoviesOnly.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
                </div>

                <h2>Up Coming Movies</h2>
                <div className="flexRow">
                    {upComingMoviesOnly.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
                </div>

            </div>
        </div>
    )
}

export default MoviePage;
