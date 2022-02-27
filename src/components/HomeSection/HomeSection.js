import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Section from './Section';
import '../component_css/home_section.css'

function rotate() {
    var element = document.getElementById('inner');
    element.classList.remove('animateDown');
    element.classList.add('animateUp');
}

function HomeSection() {
    return (
        <Container id="container" className="cube-container">
            <Inner className="inner" id="inner" onWheel={rotate}>
                <Home className="front" />
                <Section className="back"/>
            </Inner>
        </Container>
    )
}

export default HomeSection;

const Container = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    perspective: 3200px;
    overflow:hidden;
    // scroll-snap-type: y mandatory;
`

const Inner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`