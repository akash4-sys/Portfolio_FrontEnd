import React, { useState } from 'react';
import styled from 'styled-components';
import TextBox from './TextBox';
import '../component_css/home.css'

function Home() {
    const [animation, setAnimation] = useState(0);
    function fader() {
        // let intro = document.getElementById('myintro');
        let left = document.getElementById('left');
        let right = document.getElementById('right');
        // document.getElementById('userImg').style.transform="scale(0.14) translate(-625vh, -140vw) rotate(360deg)";
        document.getElementById('userImg').classList.add('collapser');
        left.classList.add('leftOpen');
        right.classList.add('rightOpen');
        window.scrollTo(0, 0);
        setAnimation(1);
    };

    return (
        <>
            <Front>
                <Container id="container" >
                    <TextBox start={animation}/>
                </Container>
                <MyIntro id="myintro">
                    <Triangle id="left" className="left"/>
                    <Triangle id="right" className="right"/>
                    <UserImg src="images/icon.gif" className="shadow-lg" id="userImg" onClick={fader}/>
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
    
    &:before{
        background: url("images/main.jpg") center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:fixed;    
        position:absolute;
        content:"";
        top:0;
        left:0;
        right:0;
        bottom: 0;
        z-index: -1;
    }
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
    transition:all .8s cubic-bezier(0.645, 0.045, 0.355, 1),
                transform .3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
                box-shadow .3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    &:hover{
        box-shadow:0 0 0 0 rgba(#000, 0.5);
        padding:3%;
        width:34%;
    }

    &:active{
        padding:1%;
        width:28%;
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