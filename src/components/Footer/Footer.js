import React from "react"
import styled from "styled-components"
import { FaEnvelope } from "react-icons/fa"

import { MdPhoneInTalk } from "react-icons/md"
import { FaFacebookSquare } from "react-icons/fa"

const StyledFoot = styled.div`
    width: 100%;
    bottom: 0px;
    height: 120px;
    background-color: #101820;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Copyright = styled.h3`
    color: white;
    text-align: center;
    width: 100%;
    font-weight: 200;
    
`;

const ConnectedDiv = styled.div`
    background-color: #101820;
    color: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    width: 250px;

`;

const ConnectHead = styled.h3`
    font-eight:200;
    margin: 0 auto;
    display: flex;
    font-weight: 100;
`;

const ConnectGroup = styled.div`
    display: flex;
    flex-direction: row;
    height: 20px;
    padding: 3px;
    margin: 1px;
    margin-left: 25px;
`;

const IconEvn = styled(FaEnvelope)`
    align-self: center;
    margin: 5px;
    color: white;

    &:hover {
        color: #971B2F;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }
    
`;

const IconPhone = styled(MdPhoneInTalk)`
    align-self: center;
    margin: 5px;
    color: white;
    &:hover {
        color: #971B2F;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }
`;

const IconFB = styled(FaFacebookSquare)`
    align-self: center;
    margin: 5px;
    color: white;
    &:hover {
        color: #971B2F;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
        cursor: pointer;
    }
`;

const ConnectDesc = styled.p`
    font-weight: 200;
    align-self: center;
`;

export default () => (
    <StyledFoot>
        <Copyright>Copyright © 2021 IdentityWorX</Copyright>
        <ConnectedDiv>
            <ConnectHead>Stay Connected!</ConnectHead>
            <ConnectGroup>
                <a href="mailto:Bob@identitywrx.com"><IconEvn /></a>
                <ConnectDesc>Bob@identitywrx.com</ConnectDesc>
            </ConnectGroup>
            <ConnectGroup>
                <a href="tel:1-678-909-8976"><IconPhone /></a>
                <ConnectDesc>678-909-8976</ConnectDesc>
            </ConnectGroup>
            <ConnectGroup>
                <IconFB />
            </ConnectGroup>
        </ConnectedDiv>
    </StyledFoot>
)