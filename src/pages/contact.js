import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import Contactform from "../components/Contactform/Contactform"

const StyContainer = styled.div`
    display: flex;
    margin-top: 85px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyHead = styled.h1`
    font-size: 400%;
    font-stretch: extra-expanded;
    margin-top: ${props => props.marg ? "75px" : "0px"};
    margin-bottom: ${props => props.marg ? "-20px" : "0px"};
    color: ${props => props.head? "white" : "black"};
`

const StyLine = styled.div`
    margin: 20px 0px 30px 0px;    
    width: 75%;
    height: 1px;
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(left, #ffffff 0%, #971B2F 20%, #971B2F 80%, #e5e5e5 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #ffffff 0%,#971B2F 20%,#971B2F 80%,#e5e5e5 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #ffffff 0%,#971B2F 20%,#971B2F 80%,#e5e5e5 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */background-color: #101820;

`
export default () => (
    <Layout>
        <StyContainer>
            <StyHead>Contact Us</StyHead>
            <StyLine />
            <Contactform />
        </StyContainer>
    </Layout>
)