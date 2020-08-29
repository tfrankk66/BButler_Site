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
    justify-content: space-between;
    height: 450px;
    margin: 20px 20px 20px 20px;
    width: 45%;
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
    height: 250px;
`
const StyImg = styled(Img)`
    margin: 0px 20px 0px 20px;
    width: 40%;
    height: inherit;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`

const StyHead = styled.h1`
    font-weight: 500;
`

const StyDescDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px 0px 10px;
`

const StyDescript = styled.p`
    font-weight: 500;
    font-size: 120%;
    text-align: center;
`


const Servicelist = () => {
    const data = useStaticQuery(graphql`
            query {
                sports: allFile(limit: 3
                                filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                                sort: {fields: name, order: ASC}
                ) {
                edges {
                    node {
                    base
                    childImageSharp {
                        fluid(maxHeight: 200) {
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
                vinyl: allFile(skip: 3, limit: 3
                    filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                    sort: {fields: name, order: ASC}
                ) {
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
                mask: allFile(skip: 6, limit: 3
                    filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                    sort: {fields: name, order: ASC}
                ) {
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
                other: allFile(skip: 6, limit: 3
                    filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                    sort: {fields: name, order: ASC}
                ) {
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
                    <StyHead>Sportswear Named and Numbered</StyHead>
                    <StyDiv>
                        {data.sports.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} 
                            />
                        ))}
                    </StyDiv>
                    <StyDescDiv>
                    <StyDescript>All types of sports related items can be personalized with a name or number or both. In addition to team logos. Uniforms, gear bags, back pakcs, tote bags or any team related items. Individualized for each member of your crew.</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>  
                <StyleServContainer>
                    <StyHead>Personalized Masks</StyHead>
                    <StyDiv>
                        {data.mask.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} 
                            />
                        ))}
                    </StyDiv>
                    <StyDescDiv>
                        <StyDescript>Lorem ipsum dolor sit amet, nec nibh justo nihil ea, choro voluptua euripidis sit eu. Qui diam eruditi graecis an. Quas nostrud consulatu ea pri. In mea officiis consulatu, usu et virtute dolorem qualisque.</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>      
            </StyGrid>
            <StyGrid>
                <StyleServContainer>
                    <StyHead>Vinyl Cut Heat Transfers</StyHead>
                    <StyDiv>
                        {data.vinyl.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} 
                            />
                        ))}
                    </StyDiv>
                    <StyDescDiv>
                        <StyDescript>An Inexpensive way to decorate small quantities of items. Vinyl cut transfers adhere to cotton, polyester, nylons and other materials. Great for individuals, groups, organizations or company needs. Can be used to create prop prototypes or one of a kind items!</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>       
                <StyleServContainer>
                    <StyHead>Other Options</StyHead>
                    <StyDiv>
                        {data.other.edges.map(image => (
                            <StyImg
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]} 
                            />
                        ))}
                    </StyDiv>
                    <StyDescDiv>
                        <StyDescript>Detailed art items that cannot be produced in vinyl cut transfers or require specific colors can be screen printed. Also a more economical option for larger quantities of garments and other printable items.</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>       
            </StyGrid>
        </StyContainer>
    )
 }

export default Servicelist
 
        
