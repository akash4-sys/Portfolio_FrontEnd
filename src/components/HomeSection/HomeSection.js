import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Section from './Section';
import '../component_css/home_section.css'

//TODO: fix twice the up scroll and down scroll , improve timing if possible

var scrollPos = 0;

function rotate() {
    if ((document.getElementById('inner').getBoundingClientRect()).top > scrollPos) {
        console.log('up');
        document.getElementById('inner').classList.remove('animateUp');
        document.getElementById('inner').classList.add('animateDown');
        // document.getElementById('inner').style.transform = "translateY(0px) rotateX(0deg)";
    }
    else {
        console.log('down');
        document.getElementById('inner').classList.remove('animateDown');
        document.getElementById('inner').classList.add('animateUp');
        // document.getElementById('inner').style.transform="scale(0.7) translateY(-100px) rotateX(90deg)";
    }
    scrollPos = (document.getElementById('inner').getBoundingClientRect()).top;
}

// function rotate() {
//     var st = document.documentElement.scrollTop;
//     if (st > lastScrollTop){
//         console.log(st);
//         document.getElementById('inner').style.transform="translateY(0px) rotateX(0deg)"
//     } else {
//         console.log(st);
//         document.getElementById('inner').style.transform="scale(0.8) translateY(-100px) rotateX(90deg)";
//         // document.getElementById('inner').classList.add('animate');
//    }
//    lastScrollTop =( st <= 0 ) ? 0 : st;
// }

function HomeSection() {

    return (
        <Container id="container" className="cube-container" onWheel={rotate}>
            <Inner className="inner" id="inner">
                <Home className="front" />
                <Section className="back" />
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