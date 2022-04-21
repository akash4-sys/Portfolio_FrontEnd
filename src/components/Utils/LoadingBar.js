import React from 'react';

function LoadingBar() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <figure>
                <img src="images/loader.svg" alt="Loading..." className="mt-5"/>
                <figcaption className="text-center fs-5">Searching the Github...</figcaption>
            </figure>
        </div>
    )
}

export default LoadingBar;