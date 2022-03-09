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
                    <LeftCol className="text-end my-5 firstProject">
                        <Title>
                            <FeaturedProject className="fs-5">Featured Project</FeaturedProject>
                            <ProjectTitle href="/" className="fs-1">Animezone</ProjectTitle>
                        </Title>
                        <RightProjectDescription className="text-white p-3 rounded shadow-lg">
                            A mongodb and nodejs based website where you can read manga, watch anime and even write your own manga and publish it for community.
                        </RightProjectDescription>
                        <Tech>
                            Node.js &nbsp;&nbsp; Express &nbsp;&nbsp; Heroku &nbsp;&nbsp; CRUD &nbsp;&nbsp; SendGrid &nbsp;&nbsp; MongoDB &nbsp;&nbsp; GoogleAuth
                        </Tech>
                        <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                    </LeftCol>

                    <RightCol className="text-start my-5 content">
                        <Title>
                            <FeaturedProject className="fs-5">Featured Project</FeaturedProject>
                            <ProjectTitle href="/" className="fs-1">UltraChat</ProjectTitle>
                        </Title>
                        <LeftProjectDescription className="text-white p-3 rounded shadow-lg">
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
                    <LeftCol className="text-end my-5 content thirdProject">
                        <Title>
                            <FeaturedProject className="fs-5">Featured Project</FeaturedProject>
                            <ProjectTitle href="/" className="fs-1">Runner</ProjectTitle>
                        </Title>
                        <RightProjectDescription className="text-white p-3 rounded shadow-lg">
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

                <SecondTitle className="fs-1 text-center content fw-bold">Other Noteworthy Projects</SecondTitle>
                <div className="d-flex justify-content-center text-center pb-5">
                    <Archive className="content">
                        <a href="/" className="fs-5">checkout the archive</a>
                    </Archive>
                </div>

                <ProjectFolder>
                    {/* window.location.href to open in same page */}
                    <FolderItems className="content" onClick={() => (window.open('https://github.com/akash4-sys/Disney-clone'))}>
                        <Header className="m-4 d-flex align-items-center justify-content-between">
                            <i className="fa-solid fa-folder fa-2x"></i>
                            <div>
                                <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                            </div>
                        </Header>
                        <span className="fs-3 fw-bold mx-4">Disney Clone</span>
                        <ProjectDescription className="mx-4 mb-4">
                            Building a responsive Disney clone with react, redux toolkit, firebase authentication and firebase database.
                        </ProjectDescription>
                        <Tech className="mx-4 mb-4 text-secondary">
                            Firebase &nbsp;&nbsp; React &nbsp;&nbsp; Redux
                        </Tech>
                    </FolderItems>
                    <FolderItems className="content" onClick={() => (window.open('https://github.com/akash4-sys/Vanilla-JS-GAME'))}>
                        <Header className="m-4 d-flex align-items-center justify-content-between">
                            <i className="fa-solid fa-folder fa-2x"></i>
                            <div>
                                <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                            </div>
                        </Header>
                        <span className="fs-3 fw-bold mx-4">Brick Breaker</span>
                        <ProjectDescription className="mx-4 mb-4">
                            A Simple 2D game using Vanilla Javascript and html canvas.
                        </ProjectDescription>
                        <Tech className="mx-4 mb-4 text-secondary">
                            Javascript
                        </Tech>
                    </FolderItems>
                    <FolderItems className="content" onClick={() => (window.open('https://github.com/akash4-sys/MERN-Stack-Tutorial-1'))}>
                        <Header className="m-4 d-flex align-items-center justify-content-between">
                            <i className="fa-solid fa-folder fa-2x"></i>
                            <div>
                                <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                            </div>
                        </Header>
                        <span className="fs-3 fw-bold mx-4">Todo-List Application</span>
                        <ProjectDescription className="mx-4 mb-4">
                            A Tutorial MERN Stack CRUD Application for reading, writing and saving notes with a simple interface.
                        </ProjectDescription>
                        <Tech className="mx-4 mb-4 text-secondary">
                            Firebase &nbsp;&nbsp; React &nbsp;&nbsp; Redux
                        </Tech>
                    </FolderItems>
                    {/* <FolderItems className="content">
                        <Header className="m-4 d-flex align-items-center justify-content-between">
                            <i className="fa-solid fa-folder fa-2x"></i>
                            <div>
                                <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                            </div>
                        </Header>
                        <span className="fs-3 fw-bold mx-4">Disney Clone</span>
                        <ProjectDescription className="mx-4 mb-4">
                            Building a responsive Disney clone with react, redux toolkit, firebase authentication and firebase database.
                        </ProjectDescription>
                        <Tech className="mx-4 mb-4 text-secondary">
                            Firebase &nbsp;&nbsp; React &nbsp;&nbsp; Redux
                        </Tech>
                    </FolderItems>
                    <FolderItems className="content">
                        <Header className="m-4 d-flex align-items-center justify-content-between">
                            <i className="fa-solid fa-folder fa-2x"></i>
                            <div>
                                <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                            </div>
                        </Header>
                        <span className="fs-3 fw-bold mx-4">Disney Clone</span>
                        <ProjectDescription className="mx-4 mb-4">
                            Building a responsive Disney clone with react, redux toolkit, firebase authentication and firebase database.
                        </ProjectDescription>
                        <Tech className="mx-4 mb-4 text-secondary">
                            Firebase &nbsp;&nbsp; React &nbsp;&nbsp; Redux
                        </Tech>
                    </FolderItems>
                    <FolderItems className="content">
                        <Header className="m-4 d-flex align-items-center justify-content-between">
                            <i className="fa-solid fa-folder fa-2x"></i>
                            <div>
                                <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                            </div>
                        </Header>
                        <span className="fs-3 fw-bold mx-4">Disney Clone</span>
                        <ProjectDescription className="mx-4 mb-4">
                            Building a responsive Disney clone with react, redux toolkit, firebase authentication and firebase database.
                        </ProjectDescription>
                        <Tech className="mx-4 mb-4 text-secondary">
                            Firebase &nbsp;&nbsp; React &nbsp;&nbsp; Redux
                        </Tech>
                    </FolderItems> */}
                </ProjectFolder>

                <ThirdTitle className="text-center content fw-bold">Get In Touch</ThirdTitle>
                <div className="d-flex justify-content-center text-center pb-5">
                    <ContactMe className="w-50 content">
                        Currently I am a student in his 3rd year of Computer Science Engineering
                        with 5 months of experience as a web developer and I am looking for new opportunities.
                        If you want to contact me my inbox is always open.
                    </ContactMe>
                </div>
                <div className="d-flex justify-content-center pb-5 gap-3">
                    <EmailMe className="content" href="mailto:mishraakashmishra19@gmail.com">Email Me</EmailMe>
                    <InbuiltChat className="content" href="/contactme">Say Hello</InbuiltChat>
                </div>
            </CenterContainer>
        </Container>
    )
}

export default Projects;

const Container = styled.section`
    background-color:#0a192f;
    height:100%;
    overflow-x:hidden;
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
    color:#58e2c4;

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
    color:#58e2c4;

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

const LeftProjectImage = styled(ProjectImage)`
    background: url('images/laptop.jpg') center center;
    grid-column: 2/4;
    grid-row: 2/4;
    animation-delay: 250ms;
    opacity:0;

    @media (max-width: 768px) {
        box-shadow: inset 0 0 0 1000px #0a192f98;
        border: 0.2px solid #58e2c4;
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
        color:#58e2c4;
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
        color:#58e2c4 !important;
        cursor:pointer !important;
    }

    @media (min-width: 1920px) {
        font-size: 1vw !important;
    }
`

const SecondTitle = styled.div`
    color:#ccd6f6;
    animation-delay: 0.5s;
    opacity:0;
    margin-top:35vh;
    margin-bottom:2vh;

    @media (min-width: 1920px){
        font-size: 3vw !important;
    }
`

const Archive = styled.div`
    opacity:0;
    animation-delay: 0.8s;
    width:fit-content;
    a{
        text-decoration:none;
        color:#58e2c4;
        @media (min-width: 1920px){
            font-size: 1.25vw !important;
        }
    }

    a::after{
        content: "";
        height: 2px;
        background-color:#58e2c4;
        position:absolute;
        right:0;
        left:0;
        bottom:-2px;
        opacity:0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
    }

    a:hover::after{
        opacity:1;
        transform: scaleY(1);
    }
`

const ProjectFolder = styled.div`
    display:grid;
    grid-gap:2vw;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    color:#ccd6f6;

    @media (max-width:768px) {
        grid-template-columns:1fr;
    }

    div:nth-child(1){ animation-delay:0.5s; }
    div:nth-child(2){ animation-delay:0.6s; }
    div:nth-child(3){ animation-delay:0.7s; }
    div:nth-child(4){ animation-delay:0.5s; }
    div:nth-child(5){ animation-delay:0.6s; }
    div:nth-child(6){ animation-delay:0.7s; }
`

const FolderItems = styled.div`
    border-radius:4px;
    background-color:#112240;
    opacity:0;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        transform:scale(1.05) !important;
        box-shadow: rgba(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color:rgba(249, 249, 249, 0.8);
        span{
            color:#58e2c4;
        }
    }

    span{
        @media (min-width: 1920px){
            font-size: 2vw !important;
        }
    }
`

const Header = styled.div`
    color:#58e2c4;

    @media (min-width: 1920px){
        font-size: 1vw !important;
    }
`

const ProjectDescription = styled.div`
    @media (min-width: 1920px){
        font-size: 1vw !important;
    }
`

const ThirdTitle = styled(SecondTitle)`
    font-size:4vw;
    animation-delay:0.5s;
`

const ContactMe = styled.div`
    color:#ccd6f6;
    opacity:0;
    animation-delay:250ms;

    @media (min-width: 1920px){
        font-size: 1vw !important;
    }
`

const EmailMe = styled.a`
    color:#58e2c4;
    border:0.5px solid #58e2c4;
    padding: 2% 3%;
    border-radius: 4px;
    text-decoration:none;
    opacity:0;
    animation-delay:250ms;

    &:hover{
        background-color:#58e2c430;
        color:#58e2c4;
    }

    @media (min-width: 1920px){
        font-size: 1vw !important;
    }
`

const InbuiltChat = styled(EmailMe)`
    animation-delay:500ms;
`