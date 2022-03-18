import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TagCloud from 'TagCloud';

function SkillGlobe() {

    const [windowSize, setWindowSize] = useState(0);
    const [prevWindowSize, setPrevWindowSize] = useState(windowSize);
    const [sphereRadius, setSphereRadius] = useState(300);

    const texts = [
        'Html', 'JavaScript',
        'CSS3', 'MYSQL', 'Interactive',
        'Responsive', 'Redux', 'React',
        'C++', 'OpenCV', 'FireBase', 'Stream', 'OAuth',
        'MongoDB', 'ExpressJS', 'Node.JS', 'Git', 'GitHub', 'SendGrid', 'npm', 'JSON'
    ];

    useEffect(() => {
        function updateSize() {
            setWindowSize(window.innerWidth);
                let screen = document.getElementById('sphereContainer');
                let rs = window.getComputedStyle(screen);
                let Radius = rs.getPropertyValue('--radiusOfSphere');
                setSphereRadius(Radius);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    }, [windowSize]);

    const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true
    };

    options.radius = sphereRadius;

    if (document.querySelectorAll('div.tagcloud').length === 0) {
        TagCloud(".globe", texts, options);
    }

    if(prevWindowSize !== windowSize){
        document.getElementById('content').removeChild(document.querySelector('div.tagcloud'));
        TagCloud(".globe", texts, options);
    }

    if(windowSize <= 480 && windowSize !== 0) {document.getElementById('content').removeChild(document.querySelector('div.tagcloud'));}

    return (
        <Container className="container d-flex align-items-center justify-content-center" id="sphereContainer">
            <Content className="globe fs-5" id="content"></Content>
        </Container>
    )
}

export default SkillGlobe;

const Container = styled.div`
    width:50%;
    --radiusOfSphere:300;

    @media (min-width:1920px) { --radiusOfSphere:500; }
    @media (max-width:1200px) { --radiusOfSphere:230; }
    @media (max-width:992px) { --radiusOfSphere:210; }
    @media (max-width:768px) { --radiusOfSphere:180; }
    @media (max-width: 480px) { 
        width:0px;
        height:0px;
        padding: 0px;
    }
`

const Content = styled.div`
    height:600px;
    width:70%;
    font-weight:1000;

    &:hover {
        cursor:pointer;
    }

    span:hover{
        color:#58e2c4;
        font-size:25px !important;
        transition:250ms;
    }

    @media (max-width:1200px) { 
        width:87%;
        height:400px;
    }

    @media (max-width: 992px) { 
        width:110%;
    }

    @media (max-width: 768px) {
        width:100%;
        height:370px;
    }

    @media (min-width:1920px) {
        height:900px;
        font-size:1.5vw !important;
    }
`