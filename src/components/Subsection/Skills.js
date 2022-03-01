import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DarkNavContext } from '../DarkNavContext';
import './Skills.css'

function Skills(props) {
    const [context, setContext] = useContext(DarkNavContext);

    useEffect(() => {
        let ScrollTop = (props.ScrollTop);
        var root = document.querySelector(':root');
        root.style.setProperty('--scrollPos', `${ScrollTop}px`);

        if (props.ScrollTop >= 650) {
            setContext("bg-dark");
        } else {
            setContext("bg-transparent");
        }

    }, [props.ScrollTop]);

    return (
        <Container className="container" id="container">
            <Box className="pt-5">
                <SkillsTitle id="title">SKILLS</SkillsTitle>
                <SkillList className="fs-1 d-flex justify-content-evenly mt-5">
                    <div>
                        <div>MongoDB
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongo" />
                        </div>
                        <div>Express.js
                            <img className="ms-1" src="https://img.icons8.com/small/48/000000/nodejs.png" alt="Express" />
                        </div>
                        <div>React
                            <img src="images/logo192.png" alt="react" width="40px" height="40px" className="ms-1" />
                        </div>
                        <div>Node.js
                            <img className="ms-2" src="https://img.icons8.com/color/50/000000/nodejs.png" alt="node" />
                        </div>
                    </div>
                    <div>
                        <div>Responsive Designing
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/web-design.png" alt="Web design" />
                        </div>
                        <div>C++ Programming
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++" />
                        </div>
                        <div>OpenCV with C++
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/opencv.png" alt="OpenCV" />
                        </div>
                        <div>MYSQL
                            <img className="ms-2" src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MYSQL" />
                        </div>
                    </div>
                </SkillList>
            </Box>
            <Box>
                <Tech id="tech">Technologies I've Worked with</Tech>
                <SkillList className="fs-1 d-flex justify-content-evenly mt-5">
                    <div>
                        <div>GitHub
                            <img className="ms-2 mb-1" src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github" />
                        </div>
                        <div>FireBase
                            <img className="ms-2" src="https://img.icons8.com/color/48/000000/firebase.png" alt="firebase" />
                        </div>
                        <div>OAuth Services

                        </div>
                        <div>SendGrid</div>
                    </div>
                </SkillList>
            </Box>
        </Container>
    )
}

export default Skills;

const Container = styled.div`
    color:black;
`

const Box = styled.div`
    height:70vh;
    margin-top:10vh;

    @media (max-width:992px){
        height:60vh !important;
    }

    @media (max-width: 480px){
        height:50vh !important;
    }
`

const SkillsTitle = styled.div`
    color: #EEE;
    position:absolute;
    font-size:14vw;
    top:114vh;
    left:-50%;
    z-index:-1;
    font-weight:600;
    transform: translateX(calc(var(--scrollPos) + 140px));
    transition: transform 0.5s ease-out;

    @media (max-width: 992px){
        top: 130vh;
    }

    @media (max-width: 800px){
        transform: translateX(calc(var(--scrollPos) + 0.5vw));
    }

    @media (max-width: 480px){
        transform: translateX(calc(var(--scrollPos) - 70vw));
    }
`;

const Tech = styled(SkillsTitle)`
    top:200vh;
    font-size:6vw;
    left:0px;
    right:-100%;
    transform: translateX(calc(300px - var(--scrollPos)));
    
    @media (max-width:992px){
        top:195vh;
        transform: translateX(calc(680px - var(--scrollPos)));
    }

    @media (max-width: 800px){
        transform: translateX(calc(100vw - var(--scrollPos)));
    }

    @media (max-width:480px){
        top:180vh;
        transform: translateX(calc(150vw - var(--scrollPos)));
    }
`

const SkillList = styled.div`
    font-family: 'AvenirRoman';
    position:relative;

    @media (max-width: 992px){
        font-size:4.2vh !important;   
    }

    @media (max-width: 480px){
        font-size:2.5vh !important;
    }

    img{
        @media (max-width:480px){
            height:20px;
            width:20px;
        }
    }
`