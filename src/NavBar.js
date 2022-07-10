import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import styles from 'styled-components';
import './NavBar.css';
import NetflixHomeLogo from './Netflix-Logo2-removebg-preview.png';

const ModalBackGround = styles.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styles.div`
background-color: rgba(0,0,0,.8);
margin: 15% auto;
padding: 20px;
width: 250px;
height: 150px;
text-align: center;
`;

const NavBar = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    const [showModal, setShowModal] = useState(false);

    return (

        <nav className={`navContainer ${show && "navContainerBlack"}`}>
            <div className="navBarLogo">
                <NavLink to='/home-page' ><img src={NetflixHomeLogo} alt="" width="110px" /></NavLink>
            </div>

            <div className="leftNavMenu">
                <NavLink activeClassName="active" to='/home-page' className="navLink">Home</NavLink>
                <NavLink activeClassName="active" to='/tv-shows-page' className="navLink">TV Shows</NavLink>
                <NavLink activeClassName="active" to='/movies-page' className="navLink" >Movies</NavLink>
                <NavLink activeClassName="active" to='/new-and-popular-page' className="navLink" >New & Popular</NavLink>
                <NavLink activeClassName="active" to='/discover-page' className="navLink" >Discover More</NavLink>
            </div>

            <div className="rightNavMenu" >
                <button className="signOutBtn" onClick={() => setShowModal(!showModal)}>Sign out</button>
                {showModal && (
                    <ModalBackGround onClick={() => setShowModal(false)}>
                        <ModalBody onClick={e => e.stopPropagation()}>
                            <p className="warning">Are you sure you want to sign out?</p>
                            <div className="signOutBtnContainer">
                                <button type="button" className="signOutBtn" onClick={() => setShowModal(false)}>Cancel</button>
                                <Link to='/net-flix-clone-login-page'><button type="button" className="signOutBtn" onClick={() => setShowModal(false)}>Sign Out</button></Link>
                            </div>
                        </ModalBody>
                    </ModalBackGround>

                )}
            </div>
        </nav >
    )
}

export default NavBar;