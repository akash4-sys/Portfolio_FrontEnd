import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { DarkNavContext } from '../DarkNavContext';
import './Skills.css'

function Skills(props) {
    const [context, setContext] = useContext(DarkNavContext);
    let navigate = useNavigate();

    useEffect(() => {
        let ScrollTop = (props.ScrollTop);
        var root = document.querySelector(':root');
        root.style.setProperty('--scrollPos', `${ScrollTop}px`);

        if (props.ScrollTop >= 650) {
            setContext("bg-dark");
        } else {
            setContext("bg-transparent");
        }

        var downArrow = document.getElementsByClassName('downarrow');
        (props.ScrollTop > props.EndOfPage - 500 ) ? downArrow[0].classList.add("visible") : downArrow[0].classList.remove("visible");
        (props.ScrollTop > props.EndOfPage - 400 ) ? downArrow[1].classList.add("visible") : downArrow[1].classList.remove("visible");
        (props.ScrollTop > props.EndOfPage - 300 ) ? downArrow[2].classList.add("visible") : downArrow[2].classList.remove("visible");
        (props.ScrollTop > props.EndOfPage - 200 ) ? downArrow[3].classList.add("visible") : downArrow[3].classList.remove("visible");
        (props.ScrollTop > props.EndOfPage - 100 ) ? downArrow[4].classList.add("visible") : downArrow[4].classList.remove("visible");
        if(props.ScrollTop > props.EndOfPage ){
            downArrow[5].classList.add("visible");
            setTimeout(() => navigate('/myprojects'), 750);
        }else{
            downArrow[5].classList.remove("visible");
        }

        // console.log(props.EndOfPage)
        // if (props.ScrollTop > props.EndOfPage) {
        //     setTimeout(() => navigate('/myprojects'), 1500);
        // }

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
            <Box>
                <Messages>Scroll Down to check my Projects</Messages>
                <NextPageLoader>
                    <i className="fa-solid fa-caret-down downarrow"></i>
                    <i className="fa-solid fa-caret-down downarrow"></i>
                    <i className="fa-solid fa-caret-down downarrow"></i>
                    <i className="fa-solid fa-caret-down downarrow"></i>
                    <i className="fa-solid fa-caret-down downarrow"></i>
                    <i className="fa-solid fa-caret-down downarrow"></i>
                </NextPageLoader>
            </Box>
        </Container>
    )
}

export default Skills;

const Container = styled.div`
    // margin-bottom:35vh !important;
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
    font-weight:800;
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

const Messages = styled(SkillsTitle)`
    font-size:5vw;
    top: 250vh;
    left: -100%;
    font-weight:900;
`

const NextPageLoader = styled.div`
   display:flex;
   flex-direction:column;
   font-size:10vw;

   i{
       height: 9vh;
       opacity:0;
   }

   i:nth-child(0){
        color:#7CB9E8;
    }
    i:nth-child(1){
       color:#F0F8FF;
   }
   i:nth-child(2){
        color:#89CFF0;
   }
   i:nth-child(3){
        color:#6CB4EE;
   }
   i:nth-child(4){
        color:#72A0C1;
   }
   i:nth-child(5){
        color:#0066b2;
   }
   i:nth-child(6){
        color:#0039a6;
   }
`