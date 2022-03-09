import React, { useContext } from 'react';
import styled from 'styled-components';
import './component_css/home.css';
import { DarkNavContext } from './DarkNavContext';

function Navbar() {
    const [context, setContext] = useContext(DarkNavContext);
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top z-index-2 p-0 ${context}`}>
            <div className="container-fluid addBlur">
                <a className="navbar-brand ms-2 d-flex align-items-center" href="/">
                    <BrandImage src="/images/icon.gif" width='40' height='40' className="rounded-circle mt-1 me-2" alt=".."/>
                    <BrandName href="/contactme" className="mt-2 text-decoration-none text-white">Akash Mishra</BrandName>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" aria-current="page" href="/">
                                <i className="fa-solid fa-house-user text-white me-1"></i>HOME
                            </ListElement>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" href="/resume">
                                <i className="fa-solid fa-file text-white me-1"></i>RESUME
                            </ListElement>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" href="https://github.com/akash4-sys" target="_blank">
                                <i className="fa-brands fa-github text-white me-1"></i>GITHUB
                            </ListElement>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" href="/myprojects">
                                <i className="fa-solid fa-folder text-white me-1"></i>MYPROJECTS
                            </ListElement>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" href="https://www.linkedin.com/in/akash-mishra-242964230/" target="_blank">
                                <i className="fa-brands fa-linkedin text-white me-1"></i>LINKEDIN
                            </ListElement>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

const ListElement = styled.a`

    position:relative;
    letter-spacing:1.15px;

    &::after{
        content: "";
        height: 2px;
        background-color: white;
        position:absolute;
        right:0;
        left:0;
        bottom:-2px;
        opacity:0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
    }

    &:hover::after{
        opacity:1;
        transform: scaleY(1);
    }

    @media (max-width: 992px) {
        margin-bottom: 13vh !important;
        font-size:2.3vh;
    }

    @media (min-width:1920px) {
        font-size:2.5vh;
        margin-bottom:5px;
        letter-spacing:4px;
    }
`

const BrandName = styled.span`
    position:relative;
    letter-spacing:1.15px;
    
    &::after{
        content: "";
        height: 2px;
        background-color: white;
        position:absolute;
        right:0;
        left:0;
        bottom:-2px;
        opacity:0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
    }
    
    &:hover::after{
        opacity:1;
        transform: scaleY(1);
    }
    
    @media (max-width: 992px) {
        font-size:2.7vh;
        padding-bottom:1vh;
    }

    @media (min-width:1920px) {
        font-size:2.65vh;
        letter-spacing:4px;
    }
`

const BrandImage = styled.img`
    @media (min-width:1920px) {
        margin-top:10px;
        width:50px;
        height:50px;
    }
`