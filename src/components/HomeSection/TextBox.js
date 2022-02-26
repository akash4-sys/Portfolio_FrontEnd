import React from 'react';
import styled, { keyframes } from 'styled-components';

function TextBox(props) {
    const start = props.start;
    return (
        start &&
        <Section>
            <h1 style={{fontSize:"4vw"}}>My <br /> Protfolio</h1>
            <h3 style={{fontSize: "2.9vw"}}>Self-Taught C++ Programmer <br /> And <br /> Web Developer</h3>
            <h5 style={{fontSize: "1.7vw"}}>I like to code and design websites,<br /> and I love what I do.</h5>
        </Section>
    )
}

export default TextBox;

const animation = keyframes`
    0%{
        opacity: 0; transform: translateX(-100px);
        filter: blur(15px);
    }
    100%{ 
        opacity: 1; 
        transform: translateY(0px) ;
        filter: blur(0px);
    }
`
// const animation = keyframes`
//     0%{
//         opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
//         filter: blur(15px);
//     }
//     100%{ 
//         opacity: 1; 
//         transform: translateY(0px) ;
//         filter: blur(0px);
//     }
// `

const Section = styled.div`
    // font-family: 'Oswald', sans-serif;
    font-family: 'Playfair Display', serif;
    display:inline-block;
    // background: linear-gradient(to right, #fc466b, #3f5efb);
    color:white;
    background-color:white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity:0;
    letter-spacing:2px;
    line-height:2;
    animation-name: ${animation};
    animation-duration: 250ms;
    animation-fill-mode:forwards;
    position:relative;
    top: calc(30px + 18vh);
    width: 900px;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
    animation-delay:0.90s;
    text-align: initial;
    // animation-iteration-count: infinite;
`