import React from 'react';
import styled from 'styled-components';

function Section() {
    return (
        <Container>
            <Title>
                <div>&nbsp;&nbsp;Not Your</div>
                <div>&nbsp;&nbsp;&nbsp;Average</div>
                <div>&nbsp;&nbsp;Software</div>
                <div>&nbsp;&nbsp;Engineer</div>
                <SubHeading>Get ready to turn your ideas into reality</SubHeading>
            </Title>
        </Container>
    )
}

export default Section;

const Container = styled.div`

    scroll-snap-align: start;
    background:url('images/bg1.png') center center;
    width:100vw;
    height:85vh;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position:absolute;
    transform: translateY(-140px) translateZ(-90px) rotateX(-90deg);
`

const Title = styled.div`
    color:white;
    font-family: 'Playfair Display', serif;
    font-size:9vh;
    letter-spacing:1.5px;
    margin:0px;
    text-shadow: 10px 5px rgba(0,0,0,0.7);
    // font-family: 'Oswald', sans-serif;
`

const SubHeading = styled.div`
    font-size:3vh;
    font-family: 'Oswald', sans-serif;
`
