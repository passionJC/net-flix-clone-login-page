import React from 'react';

const base_url = "https://image.tmdb.org/t/p/original";

const MovieBox = ({ title, largerRow, poster_path, backdrop_path, overview, vote_average, release_date }) => {


    return (
        <div className="row">
            <div className="row_poster">
                <h2>Title: {title}</h2>
                <img
                    className={`row_poster_img  ${largerRow && "row_poster_img_larger"}`}
                    src={`${base_url}${largerRow ? poster_path : backdrop_path}`} alt={title} />
                <p>Release Date: {release_date}</p>
                <p>Rating: {vote_average}</p>
                <p>Overview: {overview}</p>
            </div>
        </div>
    )
}

export default MovieBox;