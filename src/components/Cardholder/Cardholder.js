import React from "react"
import Card from "../Cardholder/Card"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const StyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #971B2F;
    height: 640px;
    align-items: center;
`;

const StyCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

const StyHead = styled.h1`
    font-size: 225%;
    font-weight: 400;
    color: white;
    font-stretch: extra-expanded;
    margin-bottom: 2px;
`;



const Cardholder = () => {
      const data = useStaticQuery(graphql`
        query Images {
          image: file(relativePath: { eq: "3dogspack.png" }) {
            childImageSharp {
              fixed(width: 190, height: 225, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          image1: file(relativePath: { eq: "Jersey Name & Number.png" }) {
            childImageSharp {
              fixed(width: 375, height: 350, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          image2: file(relativePath: { eq: "1_Front View Black.jpg" }) {
            childImageSharp {
              fixed(width: 150, height: 225, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
    `)


    return(
      <StyContainer>
        <StyHead>Personalized Products</StyHead>
        <StyCardContainer>
          <Card desc={'1'} image={data.image.childImageSharp.fixed} />
          <Card desc={'2'} image={data.image1.childImageSharp.fixed}/>
          <Card desc={'3'} image={data.image2.childImageSharp.fixed}/>
        </StyCardContainer>
      </StyContainer>
    )
}

export default Cardholder




