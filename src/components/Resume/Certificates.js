import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from '../Utils/ImageSlider';
import './Certificates.css'

function Certificates() {

    const [imageSlider, setImageSlider] = useState(0);

    useEffect(() => {
        document.querySelector('div.slick-slider').classList.add('shrinkSlider');
    }, [])

    function fullPageMode() {
        let grid = document.getElementById('gridContainer').classList;
        grid.remove('grid_certificates_appear');
        grid.add('grid_certificates_dissappear');
        document.querySelector('div.slick-slider').classList.remove('shrinkSlider');
        document.querySelector('div.slick-slider').classList.add('fullPage');
        setTimeout(() => {
            grid.add('grid_certificates_size_zero')
        }, 750);
        setImageSlider(1);
    }
    
    function gridPageMode() {
        document.querySelector('div.slick-slider').classList.remove('fullPage');
        document.querySelector('div.slick-slider').classList.add('shrinkSlider');
        let gridContainer = document.getElementById('gridContainer').classList;
        gridContainer.remove('grid_certificates_dissappear');
        gridContainer.remove('grid_certificates_size_zero');
        gridContainer.add('grid_certificates_appear');
        setImageSlider(0);
    }

    return (
        <Page>
            <Container className="m-5">
                <div className="d-flex justify-content-between align-items-center fs-1">
                    <PageTitle className="fw-bold my-5 RevealProjectTitle">My Certificates</PageTitle>
                    {
                        (imageSlider) ? <PageLayout onClick={gridPageMode} className="fas fa-th"></PageLayout> : <PageLayout onClick={fullPageMode} className="fa-brands fa-slideshare"></PageLayout>
                    }
                </div>
                <GridContainer id="gridContainer">
                    <FolderItems>
                        <Image src="/images/GFG_HTML.jpg" alt="images" />
                        <FlexContainer className="d-flex align-items-center justify-content-between m-3">
                            <div className="fs-4">HTML Certificate</div>
                            <CertificateLink href="https://media.geeksforgeeks.org/courses/certificates/a2e2419c8dda3ae17f9f2a201001893e.pdf" id="ProjectLink" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></CertificateLink>
                        </FlexContainer>
                    </FolderItems>
                    <FolderItems >
                        <Image src="/images/GFGC++.jpg" alt="images" />
                        <FlexContainer className="d-flex align-items-center justify-content-between m-3">
                            <div className="fs-4">C++ Productivity Certificate</div>
                            <CertificateLink href="https://media.geeksforgeeks.org/courses/certificates/a2e2419c8dda3ae17f9f2a201001893e.pdf" id="ProjectLink" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></CertificateLink>
                        </FlexContainer>
                    </FolderItems>
                    <FolderItems >
                        <Image src="/images/GFG_Python.jpg" alt="images" />
                        <FlexContainer className="d-flex align-items-center justify-content-between m-3">
                            <div className="fs-4">Python for C++ dev Certificate</div>
                            <CertificateLink href="https://media.geeksforgeeks.org/courses/certificates/a2e2419c8dda3ae17f9f2a201001893e.pdf" id="ProjectLink" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></CertificateLink>
                        </FlexContainer>
                    </FolderItems>
                    <FolderItems className="ProjectAnimation">
                        <Image src="/images/React.jpg" alt="images" />
                        <FlexContainer className="d-flex align-items-center justify-content-between m-3">
                            <div className="fs-4">React Certificate</div>
                            <CertificateLink href="https://media.geeksforgeeks.org/courses/certificates/a2e2419c8dda3ae17f9f2a201001893e.pdf" id="ProjectLink" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></CertificateLink>
                        </FlexContainer>
                    </FolderItems>
                </GridContainer>
                <ImageSlider />
            </Container>
            <div className="text-center mb-5 mt-5" style={{color:"#ccd6f6"}}>
                All Certificate's Owned by Akash mishra
                <p>Total Certificate's: 4</p>
            </div>
        </Page>
    )
}

export default Certificates;

const Page = styled.section`
    background-color:#0a192f;
    overflow-x:hidden;
    height: 100vh;
    width: 100vw;
`

const Container = styled.div`
    margin-top:10vh !important;
`

const PageLayout = styled.i`
    color:#ccd6f6;
    &:hover {
        color:#58e2c4;
        cursor:pointer;
    }

    @media (max-width: 576px) {
        width:0px;
        height:0px;
        font-size:larger;
    }
`

const PageTitle = styled.div`
    color:#ccd6f6;
    display:flex;
    align-items:center;

    &::after{
        content: "";
        display: block;
        width: 20vw;
        height: 1px;
        margin-left: 20px;
        margin-top:4px;
        background-color: #4e4e4e;

        @media (max-width:768px) {
            width:10vw;
        }

        @media (max-width:480px) {
            width:4vw;
            margin-left:10px;
        }

        @media (max-width:400px) {
           width:0vw; 
        }
    }

    @media (max-width:480px) {
        font-size: 6vw !important;
        margin-bottom:10px !important;
    }

    @media (min-width: 1920px){
        font-size: 3vw !important;
    }
`

const GridContainer = styled.div`
    display:grid;
    grid-gap:2vw;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    color:#ccd6f6;

    @media (max-width:768px) {
        grid-template-columns:1fr;
        grid-gap:5vw;
    }

    @media (max-width:576px) {
        margin-top:6vh;
    }

    div:nth-child(n+1){ animation-delay:0.5s; }
    div:nth-child(n+2){ animation-delay:0.6s; }
    div:nth-child(n+3){ animation-delay:0.7s; }
`

const FolderItems = styled.div`
    border-radius:7px;
    background-color:#112240;
    opacity:0;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    animation: 2s ease-in forwards fadeIn;
    // cursor:pointer;
    // transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    // &:hover{
    //     transform:scale(1.05) !important;
    //     box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    //     border-color:rgba(249, 249, 249, 0.8);
    //     span{
    //         color:#58e2c4;
    //     }
    // }

    span{
        display:block;
        @media (min-width: 1920px){
            font-size: 2vw !important;
        }
    }
`

const Image = styled.img`
    width:100%;
    max-height:35vh;
    border-radius:7px 7px 0px 0px;
`

const FlexContainer = styled.div`
`

const CertificateLink = styled.a`
    text-decoration: none;
    color:#ccd6f6;

    &:hover{
        color:#58e2c4 !important;
        cursor:pointer !important;
    }

    @media (min-width: 1920px) {
        font-size: 1vw !important;
    }
`