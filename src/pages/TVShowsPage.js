import React, { useState, useEffect } from "react";
import './TVShowsPage.css';
import Row from '../Row';
import requests from '../requests';
import TVBanner from '../TVBanner';


const TVShowsPage = () => {

    const [popularTVShows, setPopularTVShows] = useState([]);
    const [topRatedTVShows, setTopRatedTVShows] = useState([]);
    const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);

    useEffect(() => {
        fetch(requests.fetchPopularTVShows)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setPopularTVShows(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchTopRatedTVShows)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setTopRatedTVShows(data.results);
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

    return (
        <div className="tvShowPageBody">
            <TVBanner />

            <h2>Popular TV Shows</h2>
            <div className="flexRow">
                {popularTVShows.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

            <h2>Top Rated TV Shows</h2>
            <div className="flexRow">
                {topRatedTVShows.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

            <h2>Airing Today TV Shows</h2>
            <div className="flexRow">
                {airingTodayTVShows.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

        </div>
    )
}

export default TVShowsPage;
