import React from 'react';
import styled from 'styled-components';
import './component_css/home.css'

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top z-index-2 p-0">
            <div className="container-fluid addBlur">
                <a className="navbar-brand ms-3" href="/">
                    <UserImg src="/images/icon.gif" />
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
                            <ListElement className="nav-link active" href="/">
                                <i className="fa-solid fa-file text-white me-1"></i>RESUME
                            </ListElement>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" href="/">
                                <i className="fa-brands fa-github text-white me-1"></i>GITHUB
                            </ListElement>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" href="/">
                                <i className="fa-solid fa-file text-white me-1"></i>MYPROJECTS
                            </ListElement>
                        </li>
                        <li className="nav-item mx-3 d-flex align-items-center justify-content-center">
                            <ListElement className="nav-link active" href="/">
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
`

const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
    margin-top:2px;
`