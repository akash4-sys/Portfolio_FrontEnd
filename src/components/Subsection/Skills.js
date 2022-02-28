import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DarkNavContext } from '../DarkNavContext';

function Skills(props) {

    const [ context, setContext ] = useContext(DarkNavContext);
    
    useEffect(() => {
        let scrollPos = (props.scrollPos) + 140;
        document.getElementById('title').style.transform=`translateX(${scrollPos}px)`;
        scrollPos = -((props.scrollPos) - 300);
        document.getElementById('tech').style.transform=`translateX(${scrollPos}px)`;

        if(props.scrollPos >= 650){
            setContext("bg-dark");   
        }else{
            setContext("bg-transparent");  
        }
    }, [props.scrollPos]);

    return (
        <Container className="container" >
            <Box className="pt-5">
                <SkillsTitle id="title">SKILLS</SkillsTitle>
                <SkillList className="fs-1 d-flex justify-content-evenly mt-5">
                    <div>
                        <div>MongoDB
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongo"/>
                        </div>
                        <div>Express.js
                            <img className="ms-1" src="https://img.icons8.com/small/48/000000/nodejs.png" alt="Express"/>
                        </div>
                        <div>React
                            <img src="images/logo192.png" alt="react" width="40px" height="40px" className="ms-1"/>
                        </div>
                        <div>Node.js
                            <img className="ms-2" src="https://img.icons8.com/color/50/000000/nodejs.png" alt="node"/>
                        </div>
                    </div>
                    <div>
                        <div>Responsive Designing
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/web-design.png" alt="Web design" />
                        </div>
                        <div>C++ Programming
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++"/>
                        </div>
                        <div>OpenCV with C++
                            <img className="ms-1" src="https://img.icons8.com/color/48/000000/opencv.png" alt="OpenCV"/>
                        </div>
                        <div>MYSQL
                            <img className="ms-2" src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MYSQL"/>
                        </div>
                    </div>
                </SkillList>
            </Box>
            <Box>
                <Tech id="tech">Technologies I've Worked with</Tech>
                <SkillList className="fs-1 d-flex justify-content-evenly mt-5">
                    <div>
                        <div>GitHub
                            <img className="ms-2 mb-1" src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github"/>
                        </div>
                        <div>FireBase
                            <img className="ms-2" src="https://img.icons8.com/color/48/000000/firebase.png" alt="firebase"/>
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
`

const SkillsTitle = styled.div`
    transition: transform 0.5s ease-out;
    color: #EEE;
    position:absolute;
    font-size:14vw;
    top:114vh;
    left:-50%;
    z-index:-1;
    font-weight:600;
`;

const Tech = styled(SkillsTitle)`
    top:200vh;
    font-size:6vw;
    left:0px;
    right:-100%;
`

const SkillList = styled.div`
    font-family: 'AvenirRoman';
    position:relative;
`