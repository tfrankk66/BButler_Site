import React from "react"
import styled from "styled-components"

const Stycontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 0px 45px 0px 45px;
`

const StyDash = styled.div`
    width: 15px;
    background-color: #971B2F;
    height: 6px;
    margin: 0px 10px 0px 10px;
`

const StyHead = styled.h1`
    font-size: 300%;
`

export default () => (

    <Stycontainer>
        <StyDash />
        <StyHead>OR</StyHead>
        <StyDash />
    </Stycontainer>
    
)