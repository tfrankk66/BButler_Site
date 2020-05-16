import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyJumbo = styled.div`
    margin-top: 35px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyHead = styled.h1`
    font-size: 225%;
    font-stretch: extra-expanded;
    margin-bottom: 2px;
`;

const ParHolder = styled.div`
    display: flex;
    flex-direction: row;
`;


const StyPar = styled.text`
    color: ${props => props.primary ? "#971B2F" : "black"};
    margin: 0px 3px 0px 3px;
    font-weight: 600;
    font-size: large;
`;

const StyLink = styled(Link)`
    color: white;
    background-color: DarkGray;
    margin-top: 15px;
    font-weight: 400;
    font-stretch: extra;
    height: 40px;
    width: 150px;
    border: 2px solid black;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s, -webkit-transform 0.2s ease-out;
    transition: background-color 0.2s, transform 0.2s ease-out;
    transition: background-color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;

    &:hover {
        background-color: #971B2F;
    }
`;


export default () => (
    <StyJumbo>
        <StyHead>Experienced, Reliable and Affordable</StyHead>
        <ParHolder>
            <StyPar>Learn why</StyPar>
            <StyPar primary>IdentityWorX</StyPar>
            <StyPar>is perfect for any individual or</StyPar>
        </ParHolder>
        <StyPar>company looking for quality Heat Transfer work</StyPar>
        <StyLink to="/about">Learn More</StyLink>
    </StyJumbo>
    
)