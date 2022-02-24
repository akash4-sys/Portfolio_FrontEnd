import React from 'react';
import styled, { keyframes } from 'styled-components';

function TextBox(props) {
    // const reactArray = "My Protfolio Self Taught Programmer".split(" ");
    const start = props.start;
    return (
        start &&
        <Section>
            {/* {reactArray.map((item, index) => (
                <span key={index} > {item}</span>)
            )} */}
            <h1>My <br /> Protfolio</h1>
            <h3>Self-Taught C++ Programmer <br /> And <br /> Web Developer</h3>
            <h5>Checkout all my projects here <br /> with Source code.</h5>
        </Section>
    )
}

export default TextBox;

const animation = keyframes`
    0%{
        opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg);
        filter: blur(15px);
    }
    100%{ 
        opacity: 1; 
        transform: translateY(0px) ;
        filter: blur(0px);
    }
`

const Section = styled.div`
    font-family: 'Oswald', sans-serif;
    display:inline-block;
    background: linear-gradient(to right, #fc466b, #3f5efb);
    background-color:white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:40px;
    display:inlinte-block;  
    opacity:0;
    letter-spacing:2px;
    line-height:2;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-fill-mode:forwards;
    position:relative;
    top: calc(30px + 30vh);
    width: 400px;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
    animation-delay:1.5s;
    // animation-iteration-count: infinite;
`