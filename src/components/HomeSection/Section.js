import React from 'react';
import styled, { keyframes } from 'styled-components';

function Section(props) {

    const startAnimation = props.startAnimation;

    return (
        <Back >
            <Container id="container">
               { startAnimation &&
                <Title>
                    <div>&nbsp;&nbsp;Not <span>Your</span></div>
                    <div>&nbsp;&nbsp;&nbsp;Average</div>
                    <div>&nbsp;&nbsp;Software</div>
                    <div>&nbsp;&nbsp;Engineer</div>
                    <SubHeading>Get ready to turn your ideas into reality</SubHeading>
                </Title>}
            </Container>
            <MidSection>
                <Test>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non, laboriosam, laborum suscipit error natus voluptates repellat quasi, perspiciatis dolor voluptate rerum exercitationem voluptatum adipisci? Quam nostrum nihil ut iusto? lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error amet ut! Iste dolor iusto tempora aliquid modi. Numquam ex deleniti dolorum aliquam officia provident aliquid delectus ullam eaque modi! lorem conv lorem. Lorem ipsum dolor lorem sit amet consectetur adipisicing elit. Quibusdam voluptate quas ratione amet deleniti distinctio quae repellendus, est similique iste tenetur corrupti sunt. Nam dolores debitis possimus magni libero vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita id porro commodi quia, tempora laudantium, quos autem, quam quasi magnam reiciendis ullam. Cupiditate rerum reprehenderit dolores illum esse autem voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quia voluptas ut sint tempora error aperiam earum, molestias vel laboriosam dolor in mollitia harum labore vitae veniam et sapiente culpa?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, optio eos. Libero rerum adipisci nostrum eius omnis molestiae, natus eaque dolor voluptatem deserunt quidem quod id labore totam, debitis non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, ratione velit distinctio ex odit cupiditate ullam. Vitae ducimus corporis aliquid modi neque, aliquam, excepturi nam rerum aspernatur autem corrupti voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, suscipit magnam! Doloremque enim odio eveniet, repudiandae delectus ex unde itaque sapiente quasi accusantium! Vel laudantium culpa, delectus aperiam quibusdam placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ipsam illo aut. Voluptates, illum velit sed dicta id harum placeat unde! Voluptate nulla cupiditate modi maxime tempore vel sint quaerat? lorem lorem</Test>
            </MidSection>
        </Back>
    )
}

export default Section;

const Back = styled.div`
    overflow-y:scroll;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position:absolute;
    height:100vh;
    // transform: translateY(-140px) translateZ(-90px) rotateX(-90deg);
    transform:translateY(-698px) translateZ(-420px) translateX(0px) rotateX(-90deg);
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
`

const SubHeading = styled.div`
    padding-top:20px;
    font-size:3vh;
    font-family: 'Oswald', sans-serif;
`
const MidSection = styled.div`
    color:black;
`

const Test = styled.div`
    display:block;
`