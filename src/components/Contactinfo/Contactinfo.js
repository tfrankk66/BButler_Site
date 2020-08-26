import React from "react"
import styled from "styled-components"
import { FaEnvelope } from "react-icons/fa"
import { MdPhoneInTalk } from "react-icons/md"
import { FaFacebookSquare } from "react-icons/fa"


const ConnectedDiv = styled.div`
    color: white;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
`;

const ConnectHead = styled.h3`
    font-weight: 400;
    font-size: 180%;
    display: flex;
    color: black;
`;

const StyLine = styled.div`
    margin: -5px 0px 5px 0px;    
    width: 95%;
    height: 2px;
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(left, #ffffff 0%, #971B2F 20%, #971B2F 80%, #e5e5e5 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #ffffff 0%,#971B2F 20%,#971B2F 80%,#e5e5e5 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #ffffff 0%,#971B2F 20%,#971B2F 80%,#e5e5e5 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */background-color: #101820;
`

const ConnectGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 20px;
    padding: 5px 5px 0px 5px;
    margin: 10px 0px 30px 0px;
`;

const IconEvn = styled(FaEnvelope)`
    font-size: 300%;
    color: #971B2F;
    &:hover {
        color: #691321;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }
    
`;

const IconPhone = styled(MdPhoneInTalk)`
    font-size: 300%;
    color: #971B2F;
    &:hover {
        color: #691321;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }
`;

const IconFB = styled(FaFacebookSquare)`
    font-size: 300%;
    color: #971B2F;
    &:hover {
        color: #691321;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }
`;

const ConnectDesc = styled.p`
    font-weight: 500;
    font-size: 120%;
    margin: 0px 0px 0px 7px;
    color: black;
`;

const StyInfo = styled.div`
    display: flex;
    flex-direction: column;
    width 90%;
    margin: 20px; 0px 0px 0px;
`

export default () => (
        <ConnectedDiv>
            <ConnectHead>Contact Directly!</ConnectHead>
            <StyLine />
            <StyInfo>
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
            </StyInfo>
        </ConnectedDiv>

)