import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content center;
    align-items: center;
    width: 100%;
`

const StyleServContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin: 20px 20px 20px 20px;
    width: 40%;
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to left, #E93E5A, #6B1321);
}
`
const StyDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 800px;
    height: 200px;
`
const StyImg = styled(Img)`
    margin: 0px 10px 0px 10px;
    width: 200px;
    height: inherit;
`

const StyHead = styled.h1`
    font-weight: 500;
`
 const Servicelist = () => {
    const data = useStaticQuery(graphql`
            query MyQuery {
                allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "shirts"}}) {
                edges {
                    node {
                    base
                    childImageSharp {
                        fluid(maxWidth: 200) {
                        base64
                        aspectRatio
                        sizes
                        src
                        srcSet
                        }
                    }
                    }
                }
                }
            }
    `)


    return(
        <StyContainer>
            <StyGrid>
                <StyleServContainer>
                    <StyHead>Shirts heat</StyHead>
                    <StyDiv>
                        {data.allFile.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                            />
                        ))}
                    </StyDiv>
                </StyleServContainer>  
                <StyleServContainer>
                    <StyHead>Shirts heat</StyHead>
                    <StyDiv>
                        {data.allFile.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                            />
                        ))}
                    </StyDiv>
                </StyleServContainer>       
            </StyGrid>
            <StyGrid>
                <StyleServContainer>
                    <StyHead>Shirts heat</StyHead>
                    <StyDiv>
                        {data.allFile.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                            />
                        ))}
                    </StyDiv>
                </StyleServContainer>  
                <StyleServContainer>
                    <StyHead>Shirts heat</StyHead>
                    <StyDiv>
                        {data.allFile.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                            />
                        ))}
                    </StyDiv>
                </StyleServContainer>       
            </StyGrid>
            
        </StyContainer>
    )
 }

export default Servicelist
 
        
