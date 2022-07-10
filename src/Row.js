import React, { useState } from "react";
import './Row.css';
import styles from 'styled-components';

const ModalBackGround = styles.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.9);
`;

const ModalBody = styles.div`
background-color: rgba(0,0,0,0.9);
margin: 5% auto;
padding: 20px;
width: 300px;
height: max-content;
text-align: left;
font-size: 1rem;
`;

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, largerRow, poster_path, backdrop_path, overview, vote_average, release_date, name }) {

    const [showMovieInfo, setShowMovieInfo] = useState(false);

    const [showMore, setShowMore] = useState(false);

    const toggleInfo = () => {
        setShowMovieInfo(!showMovieInfo);
    }

    return (
        <div className="row">
            <div className="row_posters">
                <img onClick={toggleInfo}
                    className={`row_poster_img  ${largerRow && "row_poster_img_larger"}`}
                    src={`${base_url}${largerRow ? poster_path : backdrop_path}`} alt={title || name} />
            </div>
            {showMovieInfo && (
                <div className="movieInfo">
                    <ModalBackGround onClick={() => setShowMovieInfo(false)}>
                        <ModalBody onClick={e => e.stopPropagation()}>
                            <div>
                                <img src={base_url + poster_path} alt={title} width="260px" />
                                <div className="opsBtn">
                                    <button type="btn">Play</button>
                                    <button onClick={() => setShowMovieInfo(false)} type="btn">Cancel</button>
                                </div>
                                <button onClick={() => setShowMore(!showMore)} type="btn">
                                    {!showMore ? "Show More" : "Show Less"}</button>
                                <h2>Title: {title || name}</h2>
                            </div>
                            {showMore && (
                                <>
                                    <p>Release Date: {release_date}</p>
                                    <p>Rating: {vote_average}</p>
                                    <p>Overview:</p>
                                    <p>{overview}</p>
                                </>
                            )}

                        </ModalBody>
                    </ModalBackGround>
                </div>
            )
            }
        </div >
    )
}

export default Row;