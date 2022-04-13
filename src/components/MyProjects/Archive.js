import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

// TODO: Remove Moment and create your own date function

function Archive() {

    const [repos, setRepo] = useState([]);

    // name, created_at, url, description, languages, stargazers_count

    async function fetchRepositories() {
        try {
            let res = await axios.get('http://localhost/github/archive');
            // console.log(res.data);
            setRepo(res.data);

            // let res = [
            //     { "name": "keyboard", "description": "Toward a more useful keyboard Toward a more useful keyboard Toward a more useful keyboard Toward a more useful keyboard Toward a more useful keyboard", "language":"c++, javascript, java", "url": "https://api.github.com/repos/jasonrudolph/keyboard", "created_at": "2013-03-30T16:01:43Z", "stargazers_count": 235 },
            //     { "name": "keyboard", "description": "Toward a more useful keyboard", "language":"c++, javascript, java", "url": "https://api.github.com/repos/jasonrudolph/keyboard", "created_at": "2013-03-30T16:01:43Z", "stargazers_count": 235 },
            //     { "name": "keyboard", "description": "Toward a more useful keyboard", "language":"c++, javascript, java", "url": "https://api.github.com/repos/jasonrudolph/keyboard", "created_at": "2013-03-30T16:01:43Z", "stargazers_count": 235 },
            //     { "name": "keyboard", "description": "Toward a more useful keyboard", "language":"c++, javascript, java", "url": "https://api.github.com/repos/jasonrudolph/keyboard", "created_at": "2013-03-30T16:01:43Z", "stargazers_count": 235 }
            // ]

            // setRepo(res);

        } catch (err) {
            console.log(err);
        }
    }

    // console.log(apiError)

    useEffect(() => {
        fetchRepositories();
    }, []);

    return (
        <Section>
            <Left>
                <Accounts className="d-flex align-items-center">
                    <Anchor href="/mycertificates">My&nbsp;&nbsp;Certificates</Anchor>
                    <Line></Line>
                </Accounts>
            </Left>
            <Container>
                <PageTitle className="fw-bold mt-5 RevealProjectTitle">Archive</PageTitle>
                <SubTitle className="fs-5 RevealProjectTitle" style={{ color: "#58e2c4" }}>A list of things I've worked on</SubTitle>
                {
                    (repos.length) ?
                        <Table className="mt-5">
                            <thead>
                                <tr>
                                    <th className="headers fs-5">Created At</th>
                                    <th className="headers fs-5">Repository</th>
                                    <th className="headers fs-5">Languages</th>
                                    <th className="headers fs-5">Description</th>
                                    <th className="headers fs-5">Stars</th>
                                    <th className="headers fs-5">Url</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    repos.map((Repo, i) => (
                                        <Row key={i}>
                                            <th className="ps-2">{moment(Repo.created_at).format("MM YYYY")}</th>
                                            <Name>{Repo.name}</Name>
                                            <th>{Repo.language}</th>
                                            <Description>{Repo.description}</Description>
                                            <th>{Repo.stargazers_count}</th>
                                            <th><a href={Repo.url} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a></th>
                                        </Row>
                                    ))
                                }
                            </tbody>
                        </Table>
                        :
                        <Error className="bg-danger bg-gradient container RevealProjectTitle mt-4 text-center">Github Api Limit Reached</Error>
                }
            </Container>
            <Right>
                <Email>
                    <Anchor href="mailto:mishraakashmishra19@gmail.com">mishraakashmishra19@gmail.com</Anchor>
                    <Line></Line>
                </Email>
            </Right>
        </Section>
    )
}

export default Archive

const Section = styled.section`
    background-color:#0a192f;
    overflow-x:hidden;
    height: 100vh;
    width: 100vw;
    display:flex;
`

const Container = styled.div`
    margin: 3rem;
    margin-top:10vh;
    color:#ccd6f6;
    width:80%;
    @media (max-width: 480px) { width: 100%; }
    @media (max-width: 390px) { 
        margin-left:1rem;
        margin-right:1rem;
    }
`

const Left = styled.div`
    width:10%;
    @media (max-width: 480px) { width: 0%; }
`

const Right = styled(Left)``

const Accounts = styled.div`
    gap:25px;
    position: fixed;
    top: 72%;
    left: 6%;
    writing-mode: vertical-rl;

    @media (max-width:480px) { opacity:0; width: 0px; height: 0px};
`

const Anchor = styled.a`
    text-decoration:none;
    color:#ccd6f6;
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
    border: 1px solid #ccd6f6;;
    height: 10vh;
    width: 1px;
    margin-right: 5px;
`

const Email = styled(Accounts)`
    top: 55%;
    right: 6%;
    left:auto;
    display: flex;
    align-items: center;
`

const PageTitle = styled.div`
    display:flex;
    align-items:center;
    font-size:4vw;

    @media (max-width:968px){
        font-size:5.5vw;
    }

    @media (max-width:480px) {
        font-size: 6vw !important;
        margin-bottom:10px !important;
    }

    @media (min-width: 1920px){
        font-size: 3vw !important;
    }
`

const SubTitle = styled.div`
    animation-delay:0.3s;
`

const Table  = styled.table`
    color:white;
    width:100%;

    .headers{
        color:#58e2c4;
    }

    th{ 
        height:55px;
        color:#ccd6f6;
        font-weight:400;
    }

    th:nth-child(4){
        padding:2%;
    }

    a{
        color:#ccd6f6;
        transition:all 250ms;
    }

    a:hover{
        color:#58e2c4;
    }

    @media (max-width:968px) {
        th:nth-child(1){
            width:30%;
        }
        th:nth-child(2){
            width:67%;
            padding-left:5%;
        }
        th:nth-child(3){
            display:none;
        }
        th:nth-child(4){
            display:none;
        }
        th:nth-child(5){
            display:none;
        }
    }

    @media (max-width:390px){
        font-size:1.10rem !important;
    }
`

const Row = styled.tr`
    &:hover{
        background-color:#112240;
    }
`

const Name = styled.th`
    font-weight:800 !important;
`

const Description = styled.th`
    width:45%;
    padding:2%;
`

const Error = styled.div`
    animation-delay:1s;
    font-size:2.5rem;
    border-radius:5px;
    padding:15%;
`