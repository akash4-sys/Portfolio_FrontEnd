import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './Home';
import Section from './Section';
import '../component_css/home_section.css'

function HomeSection() {
    const [backAnimation, setBackAnimation] = useState(0);
    const [scrollDir, setScrollDir] = useState("");

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        var element = document.getElementById('inner');
        if(scrollDir === 'scrolling down'){
            element.classList.remove('animateDown');
            element.classList.add('animateUp');
            setBackAnimation(1);
        }
        if(scrollDir === 'scrolling up'){
            element.classList.remove('animateUp');
            element.classList.add('animateDown');
            setBackAnimation(0);
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <Container id="container" className="cube-container">
            <Inner className="inner" id="inner" >
                <Home className="front" />
                <Section className="back" startAnimation={backAnimation} />
                <Empty></Empty>
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
    overflow-x:hidden;
    overflow-y:scroll !important;
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

const Empty = styled.div`
    padding:1px;
`