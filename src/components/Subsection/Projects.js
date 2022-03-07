import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DarkNavContext } from '../DarkNavContext';

function Projects() {

    const [context, setContext] = useContext(DarkNavContext);
    useEffect(() => {
        setContext('bg-transparent');
    })

    return (
        <Container className="p-5">
            <CenterContainer className="container">
                <PageTitle className="fs-1 fw-bold my-5 ms-2">Some Things I've Built</PageTitle>
                <Grid>

                    <ProjectImage className="rounded-3" />
                    <LeftCol className="text-success text-end my-4">
                        <Title>
                            <div className="fs-5">Featured Project</div>
                            <ProjectTitle className="fs-1">Animezone</ProjectTitle>
                        </Title>
                        <RightProjectDescription className="text-white p-3 rounded shadow">
                            A minimal, dark blue theme for VS Code,
                            Sublime Text, Atom, iTerm, and more. Available on
                            Visual Studio Marketplace, Package Control, Atom
                            Package Manager, and npm.
                        </RightProjectDescription>
                        <Tech>
                            Node.js &nbsp;&nbsp; GoogleAuth &nbsp;&nbsp; Express &nbsp;&nbsp; Heroku &nbsp;&nbsp; CRUD
                        </Tech>
                        <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                    </LeftCol>

                    <RightCol className="text-success text-start my-4">
                        <Title>
                            <div className="fs-5">Featured Project</div>
                            <ProjectTitle className="fs-1">Animezone</ProjectTitle>
                        </Title>
                        <LeftProjectDescription className="text-white p-3 rounded shadow">
                            A minimal, dark blue theme for VS Code,
                            Sublime Text, Atom, iTerm, and more. Available on
                            Visual Studio Marketplace, Package Control, Atom
                            Package Manager, and npm.
                        </LeftProjectDescription>
                        <Tech>
                            Node.js &nbsp;&nbsp; GoogleAuth &nbsp;&nbsp; Express &nbsp;&nbsp; Heroku &nbsp;&nbsp; CRUD
                        </Tech>
                        <ProjectLink href="/" id="ProjectLink"><i className="fa-brands fa-github"></i></ProjectLink>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <ProjectLink href="/"><i className="fa-solid fa-up-right-from-square"></i></ProjectLink>
                    </RightCol>
                    <LeftProjectImage className="rounded-3" />

                    <ProjectImage2 className="rounded-3" />
                    <LeftCol className="text-success text-end my-4">
                        <Title>
                            <div className="fs-5">Featured Project</div>
                            <ProjectTitle className="fs-1">Animezone</ProjectTitle>
                        </Title>
                        <RightProjectDescription className="text-white p-3 rounded shadow">
                            A minimal, dark blue theme for VS Code,
                            Sublime Text, Atom, iTerm, and more. Available on
                            Visual Studio Marketplace, Package Control, Atom
                            Package Manager, and npm.
                        </RightProjectDescription>
                        <Tech>
                            Node.js &nbsp;&nbsp; GoogleAuth &nbsp;&nbsp; Express &nbsp;&nbsp; Heroku &nbsp;&nbsp; CRUD
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

const CenterContainer = styled.div``

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:auto;
    row-gap:5rem;
`

const LeftCol = styled.div`
    grid-column: 2/2;
`

const RightCol = styled.div`
    grid-column: 1/3;   //column start / column end
    grid-row: 2/4;
    z-index:2;
`

const ProjectImage = styled.div`
    background: url('images/coding2.jpg') center center;
    background-size: cover;
    background-repeat: no-repeat;
    // height:45vh;
    content:"";
`

const ProjectImage2 = styled(ProjectImage)`
    grid-row:4;
`

const LeftProjectImage= styled(ProjectImage)`
    background: url('images/laptop.jpg') center center;
    grid-column: 2/4;
    grid-row: 2/4;
`

const PageTitle = styled.div`
    color:#ccd6f6;
    display:flex;
    align-items:center;

    &::after{
        content: "";
        display: block;
        width: 300px;
        height: 1px;
        margin-left: 20px;
        margin-top:4px;
        background-color: #4e4e4e;
    }
`

const Title = styled.div`
    font-family:"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
`

const ProjectTitle = styled.div`
    font-family:"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    color:#ccd6f6;
`

const Tech = styled.div`
    color:#ccd6f6;
`
const RightProjectDescription = styled.div`
    background-color:#29636d;
    font-family: 'Montserrat', sans-serif;
    margin-left:-13%;
`

const LeftProjectDescription = styled(RightProjectDescription)`
    margin-left:0px;
    width:57%;
`

const ProjectLink = styled.a`
    text-decoration: none;
    color:#ccd6f6;

    &:hover{
        color:green !important;
        cursor:pointer !important;
    }
`