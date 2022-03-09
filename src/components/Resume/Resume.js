import React from 'react';
import styled from 'styled-components';

function Resume() {
    return (
        <Page>
            <Left>
                <Accounts className="d-flex align-items-center">
                    <BrandAnchor href="https://www.linkedin.com/in/akash-mishra-242964230/" target="_blank"><i className="fa-brands fa-linkedin"></i></BrandAnchor>
                    <BrandAnchor href="https://github.com/akash4-sys" target="_blank"><i className="fa-brands fa-github"></i></BrandAnchor>
                    <Line></Line>
                </Accounts>
            </Left>
            <Container>
                <Mobile><Anchor href="mailto:mishraakashmishra19@gmail.com">mishraakashmishra19@gmail.com</Anchor></Mobile>
                <PdfLink href="Resume.pdf" target="_blank" className="float-end"> &gt;&gt; Checkout the pdf</PdfLink>

                <ResumeImage src="/images/resume.jpg" alt="resume" />

                <Mobile className="d-flex justify-content-between gap-3">
                    <Anchor href="Resume.pdf" target="_blank" className="float-end"> &gt;&gt; Checkout the pdf</Anchor>
                    <div>
                        <BrandAnchor href="https://www.linkedin.com/in/akash-mishra-242964230/" target="_blank"><i className="fa-brands fa-linkedin"></i></BrandAnchor>
                        &nbsp;&nbsp;&nbsp;
                        <BrandAnchor href="https://github.com/akash4-sys" target="_blank"><i className="fa-brands fa-github"></i></BrandAnchor>
                    </div>
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

const Right = styled.div`
    width:20%;
    @media (max-width: 480px) { width: 5%; }
`

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

const ResumeImage = styled.img`
    width:100%;
    height:100%;
`

const Accounts = styled.div`
    gap:25px;
    position: fixed;
    top: 76%;
    left: 10%;
    flex-direction:column;

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

const BrandAnchor = styled(Anchor)`
    font-size:25px;
    @media (max-width: 480px) { font-size:20px}
    @media (min-width: 1920px) { font-size:40px}
`

const Line = styled.div`
    border: 1px solid white;
    height: 10vh;
    width: 1px;
    margin-right: 5px;
`

const Email = styled.div`
    color:white;
    position: fixed;
    top: 55%;
    right: 10%;
    writing-mode: vertical-rl;
    display: flex;
    align-items: center;
    gap: 25px;

    @media (max-width:480px) {display: none};
`

const Mobile = styled.span`
    opacity:0;
    width:0px;
    height: 0px;
    @media (max-width: 480px) { opacity: 1; width:auto; }
`

const PdfLink = styled(Anchor)`
    @media (max-width: 480px) { opacity: 0; width:0px}
`