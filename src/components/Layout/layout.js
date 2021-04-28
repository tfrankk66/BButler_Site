import React from "react"
import Navbar from "../Navigation/NavBar"
import styled from "styled-components"
import Footer from "../Footer/Footer"
import "typeface-roboto"

const StyDiv = styled.div`
    font-family: "roboto";
    width: 100%;
    display: flex;
    flex-direction: column;
`

export default ({children}) => (
    <StyDiv>
        <Navbar/>
        {children}
        <Footer/>
    </StyDiv>
)