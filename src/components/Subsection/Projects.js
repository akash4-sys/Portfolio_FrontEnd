import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DarkNavContext } from '../DarkNavContext';

function Projects() {

    const [context, setContext] = useContext(DarkNavContext);
    useEffect(()=>{
        setContext('bg-transparent');
    })

    return (
        <Mega className="p-5">
            <Container className="container">
                {/* <div className="row"> */}
                <ProjectImage className="rounded-3  bg-dark">
                    {/* <ProjectImage src="images/main.jpg" /> */}
                </ProjectImage>
                <Col className="text-success text-end my-4">
                    <Title>
                        <div className="fs-5">Featured Project</div>
                        <ProjectTitle className="fs-1">Animezone</ProjectTitle>
                    </Title>
                    <ProjectDescription className="text-white bg-dark p-3 rounded">
                        A minimal, dark blue theme for VS Code,
                        Sublime Text, Atom, iTerm, and more. Available on
                        Visual Studio Marketplace, Package Control, Atom
                        Package Manager, and npm.
                    </ProjectDescription>
                    <div className="text-secondary">
                        Node.js &nbsp;&nbsp; GoogleAuth &nbsp;&nbsp; Express &nbsp;&nbsp; Heroku &nbsp;&nbsp; CRUD
                    </div>
                    <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                </Col>
                {/* </div> */}
            </Container>
        </Mega>
    )
}

export default Projects;

const Mega = styled.div`
    background: url('images/bg.png') center center;
    background-size:cover;
    // z-index-1;
`

const Container = styled.div`
    display:grid;
    grid-template: repeat(2, [col] 1fr);
    grid-gap:20px;
`

const ProjectImage = styled.div`
    background: url('images/main.jpg') center center;
    background-size: cover;
    background-repeat: no-repeat;
    // height:45vh;
    content:"";
    grid-column:col 1 / span 2;
    grid-row:1;
`

const Title = styled.div`
    font-family:"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
`

const ProjectTitle = styled.div`
    font-family:"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    color:#696969;
`

const Col = styled.div`
    grid-column: col 2/span 2;
    grid-row:1;
    z-index:100;
`

const ProjectDescription = styled.div`
    background-color:#112240;
    font-family: 'Montserrat', sans-serif;
    margin-left:43%;
`

const ProjectLink = styled.a`
    text-decoration: none;
    color:#696969;

    &:hover{
        color:green !important;
        cursor:pointer !important;
    }
`