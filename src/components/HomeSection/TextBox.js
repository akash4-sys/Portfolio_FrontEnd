import React from 'react';
import styled, { keyframes } from 'styled-components';

function TextBox(props) {
    const start = props.start;
    let FirstArr = "My Portfolio".split("");
    let SecondArr = "I'm C++ Programmer".split("");
    let secsub = "And".split("");
    let thirdsub = "Web Developer".split("");

    return (
        start &&
        <Section>
            <h1>
                { FirstArr.map((Char, i) => ( <span key={i}>{Char}</span> ))}
            </h1>
            <h3>
                { SecondArr.map((Char, i) => ( <span key={i}>{Char}</span> ))}
                <br/>
                { secsub.map((Char, i) => ( <span key={i}>{Char}</span> ))}
                <br/>
                { thirdsub.map((Char, i) => ( <span key={i}>{Char}</span> ))}
            </h3>
        </Section>
    )
}

export default TextBox;

const animation = keyframes`
    0%{
        opacity: 0; transform: translateX(-100px);
        filter: blur(5px);
    }
    100%{ 
        opacity: 1; 
        transform: translateY(0px) ;
        filter: blur(0px);
    }
`

const bounce = keyframes`
    0%   { transform: scale(1,1)       }
    10%  { transform: scale(1.15,.85)    }
    30%  { transform: scale(.8,1.15)   translateY(-5px)}
    50%  { transform: scale(1.05,.95)  }
    57%  { transform: scale(1,1)       }
    64%  { transform: scale(1,1)       }
    100% { transform: scale(1,1)       }
`

const stopbounce = keyframes`
    100%   { transform: scale(1,1)       }
    64%  { transform: scale(1.15,.85)    }
    57%  { transform: scale(.8,1.15)   translateY(-5px)}
    50%  { transform: scale(1.05,.95)  }
    30%  { transform: scale(1,1)       }
    10%  { transform: scale(1,1)       }
    0% { transform: scale(1,1)       }
`

const Section = styled.div`
    width: 50%;
    font-family: 'Playfair Display', serif;
    display:inline-block;
    color:#ccd6f6;
    opacity:0;
    letter-spacing:7px;
    animation-name: ${animation};
    animation-duration: 250ms;
    animation-fill-mode:forwards;
    // position:relative;
    // top: calc(30px + 27vh);
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
    animation-delay:0.90s;
    text-align: initial;

    h1{
        font-size:5vw;
        span:nth-child(3){ padding-left: 14px;}
    }

    h3{
        font-size:3.4vw;
        span:nth-child(4), span:nth-child(8), span:nth-child(27){ padding-left: 14px;}
    }

    span{
        display:inline-block;
        animation-duration:1s;
        animation-fill-mode:both;
        transform-origin: bottom;
        padding-top:7px;
    }
    
    span:hover{
        animation-name: ${bounce};
        color:#58e2c4;
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }

    span:not(:hover){
        animation-name: ${stopbounce};
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
    }

    @media (max-width:992px) {
        letter-spacing:3px;
        h1{ font-size: 7.1vw;}
        h3 { font-size: 3.8vw;}
    }

    @media (max-width:768px)
    {
        letter-spacing:4px;

        h1{ font-size: 5.9vw;}
        h3{
            font-size:3.65vw;
            span:nth-child(4), span:nth-child(8), span:nth-child(27){ padding-left: 10px;} 
        }
    }

    @media (max-width:480px){
        width:100%;
        h1 { font-size: 9.9vw; }
        h3 { font-size: 6.8vw; }
    }

    @media (max-width:400px) {
        h1 { font-size: 11.9vw; }
        h3 { font-size: 6.3vw; }
    }
`