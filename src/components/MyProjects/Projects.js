import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DarkNavContext } from '../DarkNavContext';
import './Projects.css'

function Projects() {

    const [context, setContext] = useContext(DarkNavContext);
    useEffect(() => {
        setContext('bg-transparent');
    });

    function handleScroll() {
        
        var reveals = document.querySelectorAll('.content');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50;
            if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("ProjectAnimation");
            } 
          }
    }

    return (
        <Container className="p-5" onWheel={handleScroll} id="container">
            <CenterContainer className="container">
                <PageTitle className="fs-1 fw-bold my-5 ms-2 RevealProjectTitle">Some Things I've Built</PageTitle>
                <Grid>

                    <ProjectImage className="rounded-3 firstProject" />
                    <LeftCol className="text-success text-end my-5 firstProject">
                        <Title>
                            <FeaturedProject className="fs-5">Featured Project</FeaturedProject>
                            <ProjectTitle href="/" className="fs-1">Animezone</ProjectTitle>
                        </Title>
                        <RightProjectDescription className="text-white p-3 rounded shadow">
                            A mongodb and nodejs based website where you can read manga, watch anime and even write your own manga and publish it for community.
                        </RightProjectDescription>
                        <Tech>
                            Node.js &nbsp;&nbsp; Express &nbsp;&nbsp; Heroku &nbsp;&nbsp; CRUD &nbsp;&nbsp; SendGrid &nbsp;&nbsp; MongoDB
                        </Tech>
                        <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                    </LeftCol>

                    <RightCol className="text-success text-start my-5 content">
                        <Title>
                            <FeaturedProject className="fs-5">Featured Project</FeaturedProject>
                            <ProjectTitle href="/" className="fs-1">UltraChat</ProjectTitle>
                        </Title>
                        <LeftProjectDescription className="text-white p-3 rounded shadow">
                            A MERN stack based chat application with Stream and Twilio. Download or send media, text, GIF, emoji's in Real time.
                            Create your account to join the community!
                        </LeftProjectDescription>
                        <Tech>
                            MERN &nbsp;&nbsp; Stream &nbsp;&nbsp; Twilio &nbsp;&nbsp; Netlify &nbsp;&nbsp; CRUD &nbsp;&nbsp; Heroku
                        </Tech>
                        <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                    </RightCol>
                    <LeftProjectImage className="rounded-3 content" />

                    <ProjectImage2 className="rounded-3 content" />
                    <LeftCol className="text-success text-end my-5 content thirdProject">
                        <Title>
                            <FeaturedProject className="fs-5">Featured Project</FeaturedProject>
                            <ProjectTitle href="/" className="fs-1">Runner</ProjectTitle>
                        </Title>
                        <RightProjectDescription className="text-white p-3 rounded shadow">
                            A minimal, game developed in Vanilla Javascript just for your browser. Play the game,
                            create your own levels and enjoy and beat people in leaderboard score.
                        </RightProjectDescription>
                        <Tech>
                            JavaScript &nbsp;&nbsp; Heroku &nbsp;&nbsp; CRUD
                        </Tech>
                        <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                    </LeftCol>
                    
                </Grid>
            </CenterContainer>
        </Container>
    )
}

export default Projects;

const Container = styled.section`
    background-color:#0a192f;
    height:100%;
`

const CenterContainer = styled.div`
    @media (min-width: 1920px) {
        max-width:2020px;
    }
`

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:auto;
    row-gap:8rem;

    @media (max-width:768px) {
        grid-template-columns: 1fr;
    }
`

const LeftCol = styled.div`
    grid-column: 2/2;
    animation-delay:1.2s;
    opacity:0;

    @media (max-width:768px) {
        padding:10%;
        text-align: left !important;
    }

    @media (min-width: 1920px) {
        margin-top: 3vw !important;
        margin-bottom: 3vw !important;
    }
`

const RightCol = styled.div`
    grid-column: 1/3;   //column start / column end
    grid-row: 2/4;
    z-index:2;
    animation-delay:1.2s;
    opacity:0;

    @media (max-width:768px) {
        padding:3% 8%;
    }

    @media (max-width:480px) {
        padding: 0 8%;
        margin: 10% 0% !important;
    }
`

const ProjectImage = styled.div`
    background: url('images/coding2.jpg') center center;
    background-size: cover;
    background-repeat: no-repeat;
    content:"";
    animation-delay: 0.8s;
    opacity:0;

    @media (max-width:768px){
        display:none;
    }
`

const ProjectImage2 = styled(ProjectImage)`
    grid-row:4;
    animation-delay: 250ms;
    opacity:0;
`

const LeftProjectImage= styled(ProjectImage)`
    background: url('images/laptop.jpg') center center;
    grid-column: 2/4;
    grid-row: 2/4;
    animation-delay: 250ms;
    opacity:0;

    @media (max-width: 768px) {
        box-shadow: inset 0 0 0 1000px #0a192f98;
        border: 0.2px solid green;
        display:inherit;
    }
`

const FeaturedProject = styled.div`
    @media (min-width: 1920px){
        font-size: 1.5vw !important;
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

        @media (max-width:480px) {
            width:4vw;
            margin-left:10px;
        }
    }

    @media (max-width:480px) {
        font-size: 6vw !important;
    }

    @media (min-width: 1920px){
        font-size: 3vw !important;
    }
`

const Title = styled.div`
    font-family:"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
`

const ProjectTitle = styled.a`
    text-decoration:none;
    font-family:"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    color:#ccd6f6;
    transition:250ms;
    cursor:pointer;
    
    &:hover{
        color:#198754;
    }

    @media (min-width: 1920px){
        font-size: 3vw !important;
    }
`

const Tech = styled.div`
    color:#ccd6f6;
    margin-bottom:10px;

    @media (min-width: 1920px) {
        font-size: 1vw !important;
    }
`
const RightProjectDescription = styled.div`
    background-color:#29636d;
    font-family: 'Montserrat', sans-serif;
    margin-left:-13%;
    margin-bottom:10px;

    @media (max-width:768px) {
        margin-left:0%;
        background-color:transparent;
        box-shadow: none !important;
        padding: 0px !important;
    }

    @media (min-width: 1920px){
        font-size: 1vw !important;
    }
`

const LeftProjectDescription = styled(RightProjectDescription)`
    margin-left:0px;
    width:57%;

    @media (max-width:768px) {
        width: 100%;
    }
`

const ProjectLink = styled.a`
    text-decoration: none;
    color:#ccd6f6;

    &:hover{
        color:green !important;
        cursor:pointer !important;
    }

    @media (min-width: 1920px) {
        font-size: 1vw !important;
    }
`