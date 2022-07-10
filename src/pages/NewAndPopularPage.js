import React, { useState, useEffect } from "react";
import './NewAndPopularPage.css';
import requests from '../requests';
import Row from '../Row';

const NewAndPopular = () => {

    const [newRelease, setNewRelease] = useState([]);
    const [popularTVShows, setPopularTVShows] = useState([]);
    const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);
    const [popularMoviesOnly, setPopularMoviesOnly] = useState([]);
    const [upComingMoviesOnly, setUpComingMoviesOnly] = useState([]);

    useEffect(() => {
        fetch(requests.fetchNewRelease)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setNewRelease(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchPopularTVShows)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setPopularTVShows(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchAiringTodayTVShows)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setAiringTodayTVShows(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchPopularMoviesOnly)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setPopularMoviesOnly(data.results);
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
        <div className="newAndPopularPageBody">

            <h2>New Release</h2>
            <div className="flexRow">
                {newRelease.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

            <h2>Popular TV Shows</h2>
            <div className="flexRow">
                {popularTVShows.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

            <h2>Airing Today TV Shows</h2>
            <div className="flexRow">
                {airingTodayTVShows.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

            <h2>Popular Movies</h2>
            <div className="flexRow">
                {popularMoviesOnly.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

            <h2>Up Coming Movies</h2>
            <div className="flexRow">
                {upComingMoviesOnly.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

        </div>
    )
}

export default NewAndPopular;