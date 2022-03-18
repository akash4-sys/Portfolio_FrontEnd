import React, { useState } from 'react';
import styled from 'styled-components';
import TextBox from './TextBox';
import SkillGlobe from './SkillGlobe';
import '../component_css/home.css'
import '../component_css/home_background.css'

function Home() {

    const [animation, setAnimation] = useState(0);

    function fader() {
        let left = document.getElementById('left');
        let right = document.getElementById('right');
        document.getElementById('userImg').classList.add('collapser');
        left.classList.add('leftOpen');
        right.classList.add('rightOpen');
        window.scrollTo(0, 0);
        setAnimation(1);
        
        setInterval(() => {
            document.getElementById('myintro').classList.add('selfdestruct');
        }, 1500);

        document.getElementById('mainscreen').classList.add('mainscreen');
    };

    return (
        <>
            <Front>
                <Container id="mainscreen">
                    <div id="stars"></div>
                    <TextBox start={animation}/>
                    <SkillGlobe />
                </Container>
                <MyIntro id="myintro">
                    <Triangle id="left" className="left"/>
                    <Triangle id="right" className="right"/>
                    <UserImg src="images/icon.gif" className="shadow-lg mainbackground" id="userImg" onClick={fader}/>
                </MyIntro>
            </Front>
        </>
    )
}

export default Home;

const Front = styled.div`
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`

const Container = styled.main`
    flex:none;
    flex-shrink:0;
    scroll-snap-align: start;
    min-height: 100vh;
    min-width:100vw;
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow:hidden;
    display:flex;
    transform:scale(0);
    align-items:center;
    color:white;
    background: radial-gradient(ellipse, #1b2735 0%, #090a0f 100%);
`

const MyIntro = styled.div`
    position:fixed;    
    content:"";
    color:white;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    z-index: 1;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
`

const UserImg = styled.img`
    border-radius:50%;
    padding:2%;
    width:30%;
    cursor:pointer;
    z-index:10;
    transition: all 500ms ease-in-out;
    &:hover{
        box-shadow:0 0 0 0 rgba(#000, 0.5);
        padding:3%;
        width:34%;
        background-color:#58e2c4;
    }

    &:active{
        padding:1%;
        width:28%;
    }

    @media (max-width:768px){
        width:48%;

        &:active{
            width:44%;
        }
    }
`

const Triangle = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    transition:all .8s cubic-bezier(0.645, 0.045, 0.355, 1);
`