import React from "react"
import styled from "styled-components"

const StyContainer = styled.div`
    width: 25%;
    background-color: #e3e3e3;
    display: flex;
    margin-bottom: 200px;
    justify-content: center;
    border-radius: 5px;
`

const StyForm = styled.form`
    display: flex;
    padding: 5px 0px 5px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
`

const StyInput = styled.input`
    display: flex;
    outline: none;
    justify-content: center;
    margin: 10px 0px 10px 0px;
    width: 97.75%;
    height: 30px;
    border: 1px solid #101820;
    border-radius: 3px;
    padding: 1%;
    &:focus {
        box-shadow: 0 0 5px #971B2F;
        border: 1px solid #971B2F;
    }
`

const StySubBtn = styled.input`
    display: flex;
    justify-content: center;
    margin: 10px 0px 10px 0px;
    padding: 2px;
    font-size: 140%;
    width: 100%;
    height: 40px;
    color: white;
    background-color: #971B2F;
    border-radius: 3px;
    border: 2px solid #454545;
    transition: background-color 0.5s, -webkit-transform 0.5s ease-out;
    &:hover {
        background-color: #691321;
        cursor: pointer;
    }
`

const StyMessage = styled.textarea`
    display: flex;
    resize: vertical;
    font-family:"roboto";
    outline: none;
    justify-content: center;
    margin: 10px 0px 10px 0px;
    width: 97.75%;
    height: 200px;
    border: 1px solid #101820;
    border-radius: 3px;
    padding: 1%;
    &:focus {
        box-shadow: 0 0 5px #971B2F;
        border: 1px solid #971B2F;
    }
`

const StyLabel = styled.p`
    margin: 8px 0px 8px 0px;
    font-size: 150%;
    display: flex;
    text-align: center;
`

export default () => (
    <StyContainer>
        <StyForm method="post" action="https://formspree.io/mnqbpqya">
                <StyLabel>Please leave your infoooooo and well get back to you as soon as possible!</StyLabel>
                <StyInput type="name" name="Name" placeholder="Full Name" required/>
                <StyInput type="tel" name="Phone Number" placeholder="Phone Number" required/>
                <StyInput type="email" name="Email" placeholder="Email Address" required/>
                <StyMessage type="message" name="Message" placeholder="Put your message here! (Optional)"/>
                <StySubBtn type="submit" value="Submit" />
        </StyForm>  
    </StyContainer>
)