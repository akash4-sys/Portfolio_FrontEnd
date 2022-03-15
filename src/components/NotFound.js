import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { DarkNavContext } from './DarkNavContext';

function NotFound() {

    // eslint-disable-next-line
    const [context, setContext] = useContext(DarkNavContext);
    useEffect(() => {
        setContext('bg-dark');
    },[])

    return (
        <Page className="d-flex align-items-center justify-content-center container">
            <img src="/images/notfound.gif" alt="under construction" width="50%" height="50%"/>
            <div className="container fs-1 text-center text-black">
            Page Not Found
            </div>
        </Page>
    )
}

export default NotFound;

const Page = styled.div`
    height:100vh;
    flex-direction:column;
`