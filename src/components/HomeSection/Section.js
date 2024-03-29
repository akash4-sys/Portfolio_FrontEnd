import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Skills from '../Subsection/Skills';

function Section(props) {
    const startAnimation = props.startAnimation;
    const [Scroll_Top, setScrollTop] = useState(0);
    const [End_Of_Page, setEnd_Of_Page] = useState(0);
    const [NavColorPos, setNavColorPos] = useState(1);

    function handleScroll() {
        const BACK = document.getElementById('back');
        setScrollTop(BACK.scrollTop);

        var rs = getComputedStyle(BACK);
        var End_of_page = rs.getPropertyValue('--endofpage');
        setEnd_Of_Page(End_of_page);

        var NavColor = rs.getPropertyValue('--changecolor');
        setNavColorPos(NavColor);

        // console.log(BACK.scrollTop/(BACK.scrollHeight - BACK.clientHeight) * 100);
    }

    return (
        <Back id="back" onScroll={handleScroll}>
            <Container id="container">
                {startAnimation &&
                    <Title className="container">
                        <div>&nbsp;Not <span>Your</span></div>
                        <div>&nbsp;Average</div>
                        <div>&nbsp;Software</div>
                        <div>&nbsp;Engineer</div>
                        <SubHeading>Get ready to turn your ideas into reality</SubHeading>
                    </Title>
                }
            </Container>
            <MidSection className="mt-5">
                <Skills ScrollTop={Scroll_Top} EndOfPage={End_Of_Page} ColorPos={NavColorPos} />
            </MidSection>
        </Back>
    )
}

export default Section;

const Back = styled.div`
    overflow-y:scroll;
    overflow-x:hidden !important;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position:absolute;
    height:100vh;
    transform:translateY(-698px) translateZ(-420px) translateX(0px) rotateX(-90deg);

    --changecolor: 650;
    @media (min-width:2000px) {
        --changecolor:1100;
    }

    @media (max-width:800px) {
        --changecolor:900;
    }

    @media (max-width:480px) {
        --changecolor: 650;
    }

    --endofpage: 1770;
    @media (min-width:1600px) {
        --endofpage:2900;
    }

    @media (max-width:1500px) {
        --endofpage:1550;
    }

    @media (max-width:992px) {
        --endofpage:1200;
    }

    @media (max-width: 480px){
        --endofpage:1200;
    }
    
`

const Container = styled.div`
    scroll-snap-align: start;
    background:url('images/bg1.png') center center;
    width:100vw;
    height:100vh;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width:480px) {
        width:100vw;
    }
`

const revealTitle = keyframes`
    0%{
        opacity: 0;
        transform: rotateX(60deg);
    }
    100%{
        opacity: 1;
        transform: rotateX(0deg);
    }
`

const Title = styled.div`
    color:white;
    font-family: 'Playfair Display', serif;
    font-size:9vh;
    letter-spacing:1.5px;
    margin:0px auto;
    text-shadow: 10px 5px rgba(0,0,0,0.7);

    div{
        opacity:0;
        animation: 250ms ease-in forwards ${revealTitle};
    }

    span{
        opacity:0;
        animation: 250ms ease-in forwards ${revealTitle};
        animation-delay:2s;
    }

    div:nth-child(1){
        animation-delay:1.5s;
    }
    div:nth-child(2){
        animation-delay:2.5s;
    }
    div:nth-child(3){
        animation-delay:3s;
    }
    div:nth-child(4){
        animation-delay:3.5s;
    }
    div:nth-child(5){
        animation-delay:4s;
    }

   @media (max-width:480px){
       font-size:6.5vh;
   }
`

const SubHeading = styled.div`
    padding-top:20px;
    font-size:3vh;
    font-family: 'Oswald', sans-serif;

    @media (max-width:480px) {
        margin:1.5vh;
        padding:0px !important;
    }
`
const MidSection = styled.div``