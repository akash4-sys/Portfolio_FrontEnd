import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DarkNavContext } from './DarkNavContext';

function ContactMe() {

    // eslint-disable-next-line
    const [context, setContext] = useContext(DarkNavContext);
    useEffect(() => {
        setContext('bg-dark');
    }, [])

    return (
        <Page className="d-flex align-items-center justify-content-center container">
            <img src="/images/underconstruction.gif" alt="under construction" width="50%" height="50%"/>
            <div className="container fs-1 text-center text-black">
            This page is under construction. Sorry, for inconvenience.
            </div>
        </Page>
    )
}

export default ContactMe;

const Page = styled.div`
    height:100vh;
    flex-direction:column;
`