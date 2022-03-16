import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: false
    }

    return (
        <Carousel id="carousel" {...settings}>
            <Wrap>
                <img src="/images/GFG_HTML.jpg" alt="SliderImage" />
            </Wrap>
            <Wrap>
                <img src="/images/GFGC++.jpg" alt="SliderImage" />
            </Wrap>
            <Wrap>
                <img src="/images/GFG_Python.jpg" alt="SliderImage" />
            </Wrap>
            <Wrap>
                <img src="/images/React.jpg" alt="SliderImage" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    opacity:0;
    transform:scale(0);
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before{
        color:white;
    }
    
    .slick-list{
        overflow: visible;
    }
    button {
        z-index: 1;
    }

    @media (max-width:576px) {
        margin-top:13vh;
    }
`

const Wrap = styled.div`
    cursor:pointer;
    img {
        border: 4px solid transparent;
        width:100%;
        max-height:70vh;
        min-height:40vh;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        &:hover{
            border:4px solid rgba(249, 249, 249 , 0.8);
        }
    }
`