import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import validator from 'validator';
import debounce from 'lodash.debounce';
import "./Contact.css";

function ContactMe() {

    const [NextActive, setNextActive] = useState(false);
    const [Alert, setAlert] = useState(0);
    const [CurrentIteration, setCurrentIteration] = useState(0);
    const [XAxis, setXAxis] = useState(0);
    const [credentials, setCredentials] = useState({ name: "", email: "", message: "" });
    const [SentSuccess, setSentSuccess] = useState(false);
    const [UserContact, setUserContact] = useState(false);
    const [Editted, setEditted] = useState(false);
    const [Sending, setSending] = useState();

    useEffect(() => {
        var CF = document.getElementById("contactForm");
        if (CurrentIteration === 1) {
            if (Editted) {
                let OX = getComputedStyle(CF).getPropertyValue('--Xaxis').slice(0, -2);
                let oldXaxis = parseInt(OX);
                let OM = getComputedStyle(CF).getPropertyValue("--MessageXaxis").slice(0, -2);
                let oldMAxis = parseInt(OM);
                oldMAxis = oldMAxis - (oldXaxis - XAxis);
                CF.style.setProperty('--MessageXaxis', oldMAxis + "px");
                setEditted(false);
            }
            CF.style.setProperty('--Xaxis', XAxis + "px");
        }
        else {
            if (document.getElementById("message").style.opacity === 1 || XAxis !== 0) {
                CF.style.setProperty('--MessageXaxis', XAxis + "px");
            }
        }
    }, [XAxis])

    function SwitchIcons(Remove, Add) {
        let icon = document.getElementById('input_icon');
        icon.classList.remove(Remove);
        icon.classList.add(Add);
    }

    function ActivateNextButton() {
        document.getElementById('NextButton').style.backgroundColor = "#58e2c4";
        setNextActive(true);
    }

    function DeactivateNextButton() {
        document.getElementById('NextButton').style.backgroundColor = "darkgray";
        setNextActive(false);
    }

    function SetNextLabel(Class) {
        let input = document.getElementById(Class);
        if (!Editted) {
            setXAxis(XAxis + input.offsetWidth + 10);
        }
        else {
            setXAxis(input.offsetWidth + 10);
        }
        DeactivateNextButton();
        setCurrentIteration(CurrentIteration + 1);
    }

    function changeInputAttributes(Type, Name) {
        let inputArea = document.getElementById('inputArea');
        inputArea.setAttribute("type", Type);
        inputArea.setAttribute("name", Name);
    }

    function NextButtonHandler() {

        let inputArea = document.getElementById('inputArea');
        if (NextActive && CurrentIteration === 0) {

            changeInputAttributes("email", "email");
            SwitchIcons("fa-user", "fa-envelope");

            document.getElementById("Content_Name").innerHTML = inputArea.value;
            inputArea.value = "";

            if (document.getElementById("Content_Email").innerHTML !== "your email address") {
                inputArea.value = credentials.email;
            }

            let input_name = document.getElementById("name");
            input_name.style.transform = "translateY(-2.5rem)";
            input_name.classList.add("fixedInputLabel");
            document.getElementById("email").classList.add("label-visiblity");

            SetNextLabel("name");

            if (document.getElementById("Content_Email").innerHTML === credentials.email) { ActivateNextButton(); }
        }

        if (NextActive && CurrentIteration === 1) {

            changeInputAttributes("text", "message");

            let inputValue = inputArea.value;
            document.getElementById("Content_Email").innerHTML = inputValue;
            inputArea.value = "";

            document.getElementById("email").classList.add("fixedEmailInputLabel");

            SwitchIcons("fa-envelope", "fa-message");
            document.getElementById("message").classList.add("label-visiblity");
            SetNextLabel("email");
        }

        if (NextActive && (credentials.message || credentials.email)) {
            if (inputArea.name === "message") {
                inputArea.value = credentials.message;
                if (credentials.message.length >= 10) {
                    document.getElementById('finalContact').style.backgroundColor = "#58e2c4";
                }
            }
            else if (inputArea.name === "email") {
                inputArea.value = credentials.email;
            }
        }

    }

    function handleInput(event) {
        let input = event.target.value;

        setCredentials({ ...credentials, [event.target.name]: event.target.value });

        if (!CurrentIteration) {
            if (input.length >= 3) { ActivateNextButton(); } else { DeactivateNextButton(); }
        }
        else if (CurrentIteration === 1) {
            if (validator.isEmail(input)) {

                ActivateNextButton();
                document.querySelectorAll(".wrong_email").forEach(tag => tag.classList.remove("indianred"));
                setAlert(0);

            } else {

                setAlert(1);
                document.querySelectorAll(".wrong_email").forEach(tag => tag.classList.add("indianred"));
                DeactivateNextButton();
            }
        }
        else {
            (input.length >= 10) ? document.getElementById('finalContact').style.backgroundColor = "#58e2c4"
                : document.getElementById('finalContact').style.backgroundColor = "darkgray";
        }
    }

    const debouncedOnChange = debounce(handleInput, 500);

    function handleLabelClick(label) {
        let inputArea = document.getElementById('inputArea');
        let currentInput = inputArea.value;
        if (CurrentIteration === 1 && inputArea.name !== "name" && label === "name") {

            if (currentInput) {
                document.getElementById("Content_Email").innerHTML = credentials.email;
                document.getElementById("email").classList.add("fixedEmailInputLabel");
            } else {
                document.getElementById("Content_Email").innerHTML = "your email address";
                document.getElementById("email").classList.remove("fixedEmailInputLabel");
            }

            setXAxis(0);
            inputArea.value = credentials.name;
            SwitchIcons("fa-envelope", "fa-user");
            changeInputAttributes("text", "name");
            setCurrentIteration(CurrentIteration - 1);
            ActivateNextButton();
            document.querySelectorAll(".wrong_email").forEach(tag => tag.classList.remove("indianred"));
            document.getElementById("bootstrap_alert_box").classList.add("fade");

        }

        if (CurrentIteration === 2) {

            if (label === "email" && inputArea.name !== "email") {

                let email_width = document.getElementById("email").offsetWidth;
                setXAxis(XAxis - email_width - 10);

                changeInputAttributes("email", "email");
                SwitchIcons("fa-message", "fa-envelope");
                inputArea.value = credentials.email;
                setCurrentIteration(CurrentIteration - 1);
                ActivateNextButton();

            } else if (label === "name" && inputArea.name !== "name") {

                setEditted(true);
                changeInputAttributes("text", "name");
                SwitchIcons("fa-message", "fa-user");
                inputArea.value = credentials.name;
                setCurrentIteration(CurrentIteration - 2);
                ActivateNextButton();

            }
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (document.getElementById('finalContact').style.backgroundColor !== "darkgray" && credentials?.name && credentials.email && credentials.message) {

            try {
                setSending(true);
                let res = await fetch("https://akash4-server.herokuapp.com/contactform/clientdetails", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: credentials.name, email: credentials.email, message: credentials.message })
                });

                let response = await res.json();

                if (response.success) {
                    setSentSuccess(true);
                    setUserContact(true);
                    setSending(false);
                    document.getElementById("Content_Message").innerHTML = "Send Something again?";
                    document.getElementById('inputArea').value = "";

                    setTimeout(() => {
                        setSentSuccess(false);
                    }, 7000)
                }
            } catch (err) {

                setSending(false);
                setAlert(1);
                document.getElementById("alertMsg").innerHTML = "Internal server error. Please try again."
                document.getElementById("alertMsgIcon").classList.remove("fa-envelope");
                document.getElementById("alertMsgIcon").classList.add("fa-circle-exclamation");

                setTimeout(() => {
                    setAlert(0);
                }, 5000)
            }
        }
    }

    return (
        <Section id="contactForm" className="d-flex justify-content-center align-items-center contact_form_font_size">
            <div className="container container-resize">
                <PageTitle>Get in touch</PageTitle>
                <h5 className="contact_form_font_size">If you wanna get in touch or talk to me about a project collaboration or just say hi,
                    fill up the awesome form below or send an email to
                    <span>
                        <EmailLink href="mailto:mishraakashmishra19@gmail.com">mishraakashmishra19@gmail.com</EmailLink>
                    </span>
                    and ~let's talk.
                </h5>
                <Form onSubmit={handleSubmit}>
                    {Alert === 1 &&
                        <div id="bootstrap_alert_box" className="alert alert-danger d-flex align-items-center bootstrap_alert_custom container-resize" role="alert">
                            <i id="alertMsgIcon" className="fa-solid fa-envelope me-2"></i>
                            <div id="alertMsg">
                                Use a valid Email address
                            </div>
                        </div>
                    }
                    <ul>
                        <li>
                            <InputForm>
                                <input id="inputArea" className="wrong_email" required autoComplete="off" type="text" name="name" placeholder=" " onChange={debouncedOnChange} />
                                <label htmlFor="Name" onClick={() => { handleLabelClick("name"); }}>
                                    <span id="name">
                                        <i className="fa-solid fa-user"></i>
                                        <strong id="Content_Name">Fill with your name</strong>
                                    </span>
                                </label>
                                <label htmlFor="Email" onClick={() => { handleLabelClick("email") }}>
                                    <span id="email" className="wrong_email">
                                        <i id="input_banner_icon" className="fa-solid fa-envelope"></i>
                                        <strong id="Content_Email">your email address</strong>
                                    </span>
                                </label>
                                <label htmlFor="Message"  >
                                    <span id="message">
                                        <i id="input_banner_icon" className="fa-solid fa-message"></i>
                                        <strong id="Content_Message">your message</strong>
                                    </span>
                                </label>
                                <InputIcon id="input_icon" className="fa-solid fa-user wrong_email"></InputIcon>
                            </InputForm>
                        </li>
                        <li>
                            {(Sending) ?
                                <ButtonContainer className="py-4">
                                    <SuccessfulButton type="button" className="d-flex align-items-center">
                                        <ButtonText>
                                            <img src="images/rolling_loader.svg" alt="Sending..." />
                                        </ButtonText>
                                    </SuccessfulButton>
                                </ButtonContainer>
                                :
                                (!SentSuccess) ?
                                    <ButtonContainer className="d-flex py-4">
                                        <button type="button" id="NextButton" onClick={NextButtonHandler}>NEXT</button>
                                        <input type="submit" id="finalContact" value="SEND YOUR MESSAGE" />
                                    </ButtonContainer>
                                    :
                                    (SentSuccess && !Sending) ?
                                        <ButtonContainer className="py-4">
                                            <SuccessfulButton type="button" className="d-flex align-items-center">
                                                <ButtonText className="d-flex">
                                                    <lottie-player src="https://assets1.lottiefiles.com/temp/lf20_5tgmik.json" background="#58e2c4" speed="1" style={{ width: "1.5rem", height: "1.5rem" }} autoplay></lottie-player>
                                                    <div>SENT SUCCESSFULLY</div>
                                                </ButtonText>
                                            </SuccessfulButton>
                                        </ButtonContainer>
                                        : <pre></pre>
                            }
                        </li>
                    </ul>
                </Form>
                {UserContact &&
                    <FinalGreetings>ThankYou for contacting me. Keep an eye on your inbox, I will reach out to you asap!!!</FinalGreetings>
                }
            </div>
        </Section>
    )
}

export default ContactMe;

const Section = styled.section`
    --Xaxis:100px;
    --MessageXaxis:350px;
    background-color:#0a192f;
    height:100vh;
    color:#ccd6f6;    
    overflow: hidden;

    h5{
        display: flex;
        flex-wrap: wrap;
    }
`

const PageTitle = styled.h1`
    font-weight:700;
    font-size:3rem;
    color:#58e2c4;

    @media (min-width:2000px){
        font-size:4rem;
    }
`

const EmailLink = styled.a`
    color:white;
    text-decoration:none;
    margin:0px 5px 0px 0px;
    transition:all 250ms;
    &:hover{
        color:#58e2c4;
    }
`

const Form = styled.form`
    margin-top: 6rem;
    ul{ 
        list-style: none;
        padding:0px;
    }
`

const InputIcon = styled.i`
    position: absolute;
    margin-top: 1.5rem;

    input:not(:focus) ~ &{
        opacity:0;
    }

    input:not(:placeholder-shown) ~ &{
        opacity:1;
    }
`

const InputForm = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    i{
        margin-right: 10px;
    }

    strong{
        font-weight:initial;
    }

    #email{
        opacity:0;
        width:0%;
        height:0%;
        transform:translate(0px);
        font-size:0px;
    }

    input:focus ~ label span[id="email"], input:not(:placeholder-shown) ~ label span[id="email"]{
        transform:translate(var(--Xaxis), -2.5rem) !important;
    }

    #message{
        opacity:0;
        width:0%;
        height:0;
        transform:translate(0px);
        font-size:0px;
    }

    input:focus ~ label span[id="message"], input:not(:placeholder-shown) ~ label span[id="message"]{
        transform:translate(var(--MessageXaxis), -2.5rem) !important;
        @media (max-width:480px){
            opacity:0 !important;
        }
    }

    input{ 
        border: none;
        background-color: transparent;
        outline: none;
        color:#ccd6f6;
        border-bottom: 1px solid;
        z-index: 2;
        height:2rem;
        width:100%;
        padding:2rem 0rem 2rem 1.75rem;
    }

    label{
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:end;
        z-index:1;
    }

    label:hover{
        cursor:pointer;
    }

    span{
        position:absolute;
        bottom:0;
        left:0;
        height:100%;
        padding-top: 1rem;
        transform:translateY(0.1rem);
        transition: transform 250ms ease-in-out;
    }

    label::after{
        content:"";
        position:absolute;
        bottom:0;
        left:0;
        width:0%;
        border:1px solid #58e2c4;
    }

    input:focus, input:not(:placeholder-shown){
        border-bottom:unset;
    }

    input:focus ~ label::after, input:not(:placeholder-shown) ~ label::after{
        width: 100%;
        transition: 250ms;
    }

    input:focus ~ label span, input:not(:placeholder-shown) ~ label span {
        color:#58e2c4;
        font-size:1.1rem;
        transform:translateY(-2.5rem);
        width:fit-content;
        background-color:#112240;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        border-radius:3px;
        padding: 3px 5px 3px 5px;
        height: fit-content !important;
        margin-bottom: 2rem;

        @media (min-width: 2000px) {
            font-size:1.6rem;
        }
    }
`

const SlideUP = keyframes`
    100%{
        transform:translateY(0px);
        filter:blur(0px);
    }
`

const ButtonContainer = styled.div`
    gap:0.5rem;
    font-family:Lato,Helvetica,Arial,sans-serif;
    font-size:1rem;

    button, input{
        border:none;
        color: white;
        background-color: darkgray;
        padding: 10px;
        border-radius: 5px;
        transition:all 250ms;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }

    #NextButton, #finalContact{
        transform:translateY(1.5rem);
        filter:blur(1px);
        animation:500ms ease-in forwards ${SlideUP};
    }

    button:hover, input:hover{
        filter: brightness(0.9) !important;
    }
`

const Sent = keyframes`
    100%{
        width:100%;
    }
`

const SuccessfulButton = styled.button`
    background-color:#58e2c4 !important;
    padding: 1rem !important;
    width:300px;
    animation:200ms ease-in forwards ${Sent};
    justify-content: center;
    font-weight: bold;
    border-radius:10rem !important;

    &:hover{
        filter: brightness(1) !important;
    }
`

const SentCompleted = keyframes`
    100%{
        opacity:1;
    }
`

const ButtonText = styled.span`
    gap:0.5rem;
    opacity:0;
    animation:50ms ease-in 400ms forwards ${SentCompleted};
`

const FinalGreetings = styled.span`
    --n:100;
    margin-top:3rem;
    font-weight:bolder;
    letter-spacing: 0.05em;
    color:#0000;
    background: linear-gradient(-90deg,#58e2c4 5px,#0000 0) 10px 0, linear-gradient(#58e2c4 0 0) 0 0;
    background-size:calc(var(--n)*1ch) 200%;
    -webkit-background-clip:padding-box,text;
    background-clip:padding-box,text;
    background-repeat:no-repeat;
    animation: blinkline .7s infinite steps(1), typing calc(var(--n)*70ms) steps(var(--n)) forwards;
`