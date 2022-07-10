import React, { useState, useEffect } from "react";
import './HomePage.css';
import Row from '../Row';
import requests from '../requests';
import Banner from '../Banner';
//import MovieBox from '../MovieBox';

function HomePage() {

    const [netFlixOriginals, setNetFlixOriginals] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [horror, setHorror] = useState([]);

    useEffect(() => {
        fetch(requests.fetchPopularMovies)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setPopular(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchNewRelease)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setNewRelease(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchNetflixOriginals)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setNetFlixOriginals(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchTrending)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setTrending(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchTopRated)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setTopRated(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchActionMovies)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setAction(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchComedyMovies)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setComedy(data.results);
            })
    }, [])

    useEffect(() => {
        fetch(requests.fetchHorrorMovies)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setHorror(data.results);
            })
    }, [])

    return (
        <div className="homePageBody">
            <Banner />

            <h2>Popular</h2>
            <div className="flexRow">
                {popular.map((movie) => <Row largerRow={true} key={movie.id} {...movie} />)}
            </div>

            <h2>New Release</h2>
            <div className="flexRow">
                {newRelease.map((movie) => <Row key={movie.id} {...movie} />)}
            </div>

            <h2>Netflix Original</h2>
            <div className="flexRow">
                {netFlixOriginals.map((movie) => <Row key={movie.id} {...movie} />)}
            </div>

            <h2>Trending</h2>
            <div className="flexRow">
                {trending.map((movie) => <Row key={movie.id} {...movie} />)}
            </div>

            <h2>Top Rated</h2>
            <div className="flexRow">
                {topRated.map((movie) => <Row key={movie.id} {...movie} />)}
            </div>

            <h2>Action</h2>
            <div className="flexRow">
                {action.map((movie) => <Row key={movie.id} {...movie} />)}
            </div>

            <h2>Comedy</h2>
            <div className="flexRow">
                {comedy.map((movie) => <Row key={movie.id} {...movie} />)}
            </div>

            <h2>Horror</h2>
            <div className="flexRow">
                {horror.map((movie) => <Row key={movie.id} {...movie} />)}
            </div>
        </div >
    )
}

export default HomePage;