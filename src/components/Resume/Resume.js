import React from 'react';
import styled, { keyframes } from 'styled-components';

function Resume() {
    return (
        <Page>
            <Left>
                <Accounts className="d-flex align-items-center">
                    <Anchor href="/mycertificates">My&nbsp;&nbsp;Certificates</Anchor>
                    <Line></Line>
                </Accounts>
            </Left>
            <Container>
                <Mobile><Anchor href="mailto:mishraakashmishra19@gmail.com">mishraakashmishra19@gmail.com</Anchor></Mobile>
                <PdfLink href="Resume.pdf" target="_blank" className="float-end"> &gt;&gt; Checkout the pdf</PdfLink>

                <ResumeImage src="/images/Resume.png" alt="resume" />

                <Mobile className="d-flex justify-content-between gap-3">
                    <Anchor href="Resume.pdf" target="_blank" className="float-end"> &gt;&gt; Checkout the pdf</Anchor>
                    <Anchor href="/mycertificates">My Certificates</Anchor>
                </Mobile>
            </Container>
            <Right>
                <Email>
                    <Anchor href="mailto:mishraakashmishra19@gmail.com">mishraakashmishra19@gmail.com</Anchor>
                    <Line></Line>
                </Email>
            </Right>
        </Page>
    )
}

export default Resume;

const Page = styled.div`
    background-color:#0a192f;
    overflow-x:scroll;
    height: 100%;
    width: 100%;
    display:flex;
`

const Left = styled.div`
    width:20%;
    @media (max-width: 480px) { width: 5%; }
`

const Right = styled(Left)``

const Container = styled.div`
    width:60%;
    margin-top:15vh;
    margin-bottom:10vh;
    padding:0px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    @media (max-width: 480px) {
        width: 90%;
        height: 73vh;
        margin-bottom:15vh;
    }
`

const ResumeAnimation = keyframes`
    0%{
        transform:scale(0);
    }
    100%{
        transform:scale(1);
    }
`

const ResumeImage = styled.img`
    width:100%;
    height:100%;
    animation: ${ResumeAnimation} 500ms ease-in forwards;
`

const Accounts = styled.div`
    gap:25px;
    position: fixed;
    top: 72%;
    left: 10%;
    writing-mode: vertical-rl;

    @media (max-width:480px) { opacity:0; width: 0px; height: 0px};
`

const Anchor = styled.a`
    text-decoration:none;
    color:white;
    transition:transform 250ms ease-in;

    &:hover{
        cursor:pointer;
        color:#58e2c4;
        transform:translateY(-5px);
    }

    &:active{
        transform:scale(0.95);
    }

    @media (min-width: 1920px) { font-size:30px}
`

const Line = styled.div`
    border: 1px solid white;
    height: 10vh;
    width: 1px;
    margin-right: 5px;
`

const Email = styled(Accounts)`
    top: 55%;
    right: 10%;
    left:auto;
    display: flex;
    align-items: center;
`

const Mobile = styled.span`
    opacity:0;
    width:0px;
    height: 0px;
    @media (max-width: 480px) { opacity: 1; width:auto; }
`


const LinkAnimations = keyframes`
    0%{
        transform:translateX(-900px);
    }
    100%{
        transform:translateX(0px);
    }
`

const PdfLink = styled(Anchor)`
    animation: ${LinkAnimations} 500ms ease-in;
    @media (max-width: 480px) { opacity: 0; width:0px}
`