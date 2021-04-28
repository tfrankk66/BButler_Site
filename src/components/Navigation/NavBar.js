import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import '../../styles/mainPage.scss';

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    margin: 0em .5em 0em .5em;
    transition: color 0.1s, background-color 0.1s;
    color: white;
    font-size: large;
    width: 45%;
    height: 50%;

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

const StyDash = styled.div`
      background-color: white;
      margin: 0em .3em 0em .3em;
      height: 10%;
      width: 3.5%;
      display: flex;
`;

const StyAnnounce = styled(Link)`
      font-weight: 600;
      font-size: 115%;
      margin: 0;
      color: #971B2F;
      &:hover {
        color: #691321;
        transition: color 0.2s, -webkit-transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out;
        transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
      }
`

const NavBar = () => {
  const [hamToggle, setHamToggle] = useState(false);

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
        <div className="NavBar">
            <div className="Logo"><Img fixed={data.image.childImageSharp.fixed} /></div>
            <div className="Announcement"><StyAnnounce to="/contact">**CALL OR EMAIL FOR A FREE QUOTE!**</StyAnnounce></div>
            <div className="LinkGroup">
                <StyledLink to="/">Home</StyledLink>
                <StyDash />
                <StyledLink to="/about">About</StyledLink>
                <StyDash />
                <StyledLink to="/services">Services</StyledLink>  
                <StyDash />
                <StyledLink to="/contact">Contact Us</StyledLink>     
            </div>
            <FaBars className="HamMenu"  />
        </div>
        
    )
  }

export default NavBar