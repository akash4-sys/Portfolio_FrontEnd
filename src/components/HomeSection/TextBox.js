import React from 'react';
import styled, { keyframes } from 'styled-components';

function TextBox(props) {
    const start = props.start;
    let FirstArr = "Hi,".split("");
    let SecondArr = "I'm Akash,".split("");
    let secsub = "C++ Programmer".split("");
    let thirdsub = "Web Developer".split("");

    return (
        start &&
        <Section>
            <Header>
                <HiBlock></HiBlock>
                <h1>
                    {FirstArr.map((Char, i) => (<span key={i}>{Char}</span>))}
                </h1>
            </Header>
            <Header>
                <Block></Block>
                <h1>
                    {SecondArr.map((Char, i) => (<span key={i}>{Char}</span>))}
                </h1>
            </Header>        
            <h3>
                {secsub.map((Char, i) => (<span key={i}>{Char}</span>))}
                <br />
                {thirdsub.map((Char, i) => (<span key={i}>{Char}</span>))}
            </h3>
        </Section>
    )
}

export default TextBox;

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

const subtextappear = keyframes`
    0%{
        opacity:0; 
        transform: translateY(30px);
    }
    50%{ 
        opacity:1;
        transform: translateY(15px); 
    }
    100%{
        opacity:1; 
        transform:translateY(0px);
    }
`

const mainFadeIn  = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const glow = keyframes`
    40% {
    	text-shadow: 0 0 8px #fff;
    }
`

const Section = styled.div`
    width: 50%;
    font-family: 'Playfair Display', serif;
    display:inline-block;
    letter-spacing:7px;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
    animation-delay:0.90s;
    text-align: initial;

    h1{
        font-size:5vw;
        animation: ${mainFadeIn} 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        align-items: baseline;
        position: relative;
        span:nth-child(5){ padding-left: 16px;}
		span:nth-child(n+5):not(:last-child){ 
			animation:${glow} 2.5s linear infinite 2s;
		}
		span:nth-child(n+5):not(:last-child):hover{
			animation:${glow} 2.5s linear infinite 2s, ${bounce} 1s cubic-bezier(0.280, 0.840, 0.420, 1);
		}
		span:nth-child(n+5):not(:last-child):not(hover){ 
			animation:${glow} 2.5s linear infinite 2s, ${stopbounce} 1s cubic-bezier(0.280, 0.840, 0.420, 1);
		}
    }

    h3{
        opacity:0;
        animation: ${subtextappear} 500ms ease-out 2s forwards;
        font-size:3.4vw;
        span:nth-child(5), span:nth-child(19){ padding-left: 14px;}
    }

    span{
        animation-duration:1s;
        animation-fill-mode:both;
        transform-origin: bottom;
        display:inline-block;
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

        h1{ font-size: 7vw;}
        h3{
            font-size:4vw;
            span:nth-child(5), span:nth-child(19){ padding-left: 10px;} 
        }
    }

    @media (max-width:480px){
        width:100%;
		text-align:center;
        h1 { font-size: 12.9vw; }
        h3 { font-size: 7.8vw; }
    }

    @media (max-width:400px) {
        h1 { font-size: 11.9vw; }
        h3 { font-size: 6.3vw; }
    }
`

const Header = styled.div`
    display:flex;
    align-items:center;
    position: relative;
    height:100%;
	@media (max-width:480px){
		justify-content:center;
        width:initial;
	}
    width:fit-content;
`

const hiBlock = keyframes`
	0%{
    	width: 0%;
    	left: 0;
	}
	50% {
	  	width:100%;
	 	left: 0;
	}
	100% {
	  	width: 0;
		left:100%;
	}
`

const HiBlock = styled.div`
    width:0%;
    height: inherit;
    background-color:#C8C8C8;
    position:absolute;
    animation: ${hiBlock} 2s cubic-bezier(.74, .06, .4, .92) forwards;
`

const mainBlock = keyframes`
	0%{
		width: 0%;
		right: 0;
	}
	50% {
	  width: 100%;
	  right: 0;
	}
	100% {
	  width: 0;
	  right: 100%;
	}
`

const Block = styled(HiBlock)`
	animation: ${mainBlock} 2s cubic-bezier(.74, .06, .4, .92) forwards;
`