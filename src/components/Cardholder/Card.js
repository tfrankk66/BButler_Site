import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"


const StyCard = styled.div`
    background-color: white;
    height: ${props => props.large ? "500px" : "375px"};
    width: ${props => props.large ? "450px" : "350px"};
    display: flex;
    flex-direction: column;
    justify-content: space-round;
    align-items: center;
    margin: 1em 2em 1em 1em;
    border-radius: 10px;
    box-shadow: 0px 7px 10px 2px #000000;
`
const CardH = styled.div`
    width: 90%;
    height: ${props => props.large ? "70%" : "60%"};
    display: flex;
    Justify-content: center;
`

const StyLink = styled(Link)`
    color: white;
    background-color: DarkGray;
    margin-top: 20px;
    font-weight: 400;
    height: 35px;
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
`

const StyHead = styled.h2`
    color: #101820;
`


const Card = (props) => {
    const head = props.desc;

    switch(head){
      case '1':
        return(
          <StyCard >
            <StyHead>Heat Transfers</StyHead>
            <CardH>
              <Img fixed={props.image} />
            </CardH>
            <StyLink to="/services/#service3">Learn More</StyLink>
          </StyCard>
        )
      case '2':
          return(
            <StyCard large>
              <StyHead>Sportswear Named and Numbered</StyHead>
              <CardH large>
                <Img fixed={props.image} />
              </CardH>
              <StyLink to="/services/#service1">Learn More</StyLink>
            </StyCard>
          )
      case '3':
        return(
          <StyCard>
            <StyHead>Personalized Masks</StyHead>
            <CardH>
              <Img fixed={props.image} />
            </CardH>
            <StyLink to="/services/#service2">Learn More</StyLink>
          </StyCard>
        )
      default:
        return(
          <StyCard>
            <CardH>
              <Img fixed={props.image} />
            </CardH>
          </StyCard>
        )
    }

}

export default Card