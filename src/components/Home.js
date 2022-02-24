import React, { useState } from 'react';
import styled from 'styled-components';
import TextBox from './TextBox';
import './component_css/home.css'

function Home() {
    const [animation, setAnimation] = useState(0);
    function fader() {
        let intro = document.getElementById('myintro');
        intro.classList.add('fader');
        window.scrollTo(0, 0);
        setAnimation(1)
    }

    return (
        <>
            <Container id="container" >
                <TextBox start={animation}/>
            </Container>
            <MyIntro id="myintro" onClick={fader}/>
        </>
    )
}

export default Home;

const Container = styled.main`
    min-height: 100vh;
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    overflow:hidden;
    
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
    background: url('images/icon.gif') center center;
    background-repeat: no-repeat;
    position:fixed;    
    content:"";
    color:white;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    z-index: 1;
    background-color:rgba(0, 0, 0);
    cursor:pointer;
    overflow:hidden;
`