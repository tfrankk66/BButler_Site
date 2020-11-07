import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const StyledBar = styled.div`
    background-color: DarkGray;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    position: fixed;
    top: 0;
    box-shadow: 0px 1px 3px grey;
    border-bottom: 1px solid grey;
    z-index: 1;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0 12px;
    transition: color 0.1s, background-color 0.1s;
    color: white;
    font-size: large;
    margin-top: 13px;

  
    &:hover {
        color: #971B2F;
      }
    &:active {
        color: #971B2F;
      }
    &::after {
        content: '';
        align-self: center;
        display: block;
        height: 3px;
        width: 100%;
        margin-top: 11px;
        background-color: #971B2F;
        -webkit-transform-origin: center bottom;
                transform-origin: center bottom;
        -webkit-transform: scale(0, 1);
                transform: scale(0, 1);
        transition: color 0.1s, -webkit-transform 0.2s ease-out;
        transition: color 0.1s, transform 0.2s ease-out;
        transition: color 0.1s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
      }
      &:active::before {
        background-color: #971B2F;
      }
      &:hover::after,
      &:focus::after {
        -webkit-transform-origin: center bottom;
                transform-origin: center bottom;
        -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
      }
`

const StyledMenuGroup = styled.div`
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: baseline;

`;

const StyledHeader = styled.h2`
      color: #971B2F;
      display: flex;
      padding: 15px;
`;

const StyDash = styled.div`
      background-color: white;
      height: 5px;
      width: 5px;
      display: flex;
      align-self: center;
`;

const StyAnnounce = styled(Link)`
      font-weight: 600;
      font-size: 115%;
      color: #971B2F;
      &:hover {
        color: #691321;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
      }
`

const NavBar = () => {
  const data = useStaticQuery(graphql`
        query Header {
          image: file(relativePath: { eq: "IdentityWorX Logo.png" }) {
            childImageSharp {
              fixed(width: 450, height: 71, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `)

    return(
        <StyledBar>
            <StyledHeader><Img fixed={data.image.childImageSharp.fixed} /></StyledHeader>
            <StyAnnounce to="/services/#test2">**WE ARE NOW SELLING PERSONALIZED MASKS**</StyAnnounce>
            <StyledMenuGroup>
                <StyledLink to="/">Home</StyledLink>
                <StyDash />
                <StyledLink to="/about">About</StyledLink>
                <StyDash />
                <StyledLink to="/services">Services</StyledLink>  
                <StyDash />
                <StyledLink to="/contact">Contact Us</StyledLink> 
            </StyledMenuGroup>
        </StyledBar>
    )
  }

export default NavBar