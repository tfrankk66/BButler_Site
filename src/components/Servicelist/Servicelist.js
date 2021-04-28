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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const StyleServContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    height: 650px;
    margin: 85px 20px 20px 20px;
    width: 85%;
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
    width: 90%;
    height: 90%;
`
const StyImg = styled(Img)`
    margin: 0px 20px 0px 20px;
    width: 40%;
    height: inherit;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
    
`

const StyHead = styled.h1`
    margin-top: 20px;
    font-weight: 600;
    font-size: 275%
`

const StyDescDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px 0px 10px;
`

const StyDescript = styled.p`
    font-weight: 400;
    font-size: 150%;
    text-align: center;
`

const StyTarg = styled.div`
    height: 10px;
    width: 1px;
`


const Servicelist = () => {
    const data = useStaticQuery(graphql`
            query {
                sports: allFile(skip: 3, limit: 3
                                filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                                sort: {fields: name, order: ASC}
                ) {
                edges {
                    node {
                    base
                    childImageSharp {
                        fluid(maxWidth: 300, maxHeight: 270, cropFocus: CENTER, fit: CONTAIN, quality: 100, background: "rgba(0, 0, 0, 0)") {
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
                vinyl: allFile(skip: 6, limit: 3
                    filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                    sort: {fields: name, order: ASC}
                ) {
                edges {
                    node {
                    base
                    childImageSharp {
                        fluid(maxWidth: 300, maxHeight: 265, cropFocus: CENTER, fit: CONTAIN, quality: 100, background: "rgba(0, 0, 0, 0)") {
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
                mask: allFile(limit: 3
                    filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                    sort: {fields: name, order: ASC}
                ) {
                edges {
                    node {
                    base
                    childImageSharp {
                        fluid(maxWidth: 300, maxHeight: 300, cropFocus: CENTER, fit: CONTAIN, quality: 100, background: "rgba(0, 0, 0, 0)") {
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
                other: allFile(skip: 8, limit: 3
                    filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clothes"}}
                    sort: {fields: name, order: ASC}
                ) {
                edges {
                    node {
                    base
                    childImageSharp {
                        fluid(maxWidth: 300, maxHeight: 270, cropFocus: CENTER, fit: CONTAIN, quality: 100, background: "rgba(0, 0, 0, 0)") {
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
                <StyTarg id='service1'/>
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
                    <StyDescript>All types of sports related items can be personalized with a name, number, logo or all of the above. Uniforms, gear bags, backpacks, tote bags or any team related items make great personalized items. Any of these items individualized for each member of your team.</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>  
                <StyTarg id='service2'/>
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
                        <StyDescript>Masks can be printed or decorated with heat transfers. Can be positioned in the center or the left or right cheek. Put your logo on one cheek and your employees name on the other cheek. Lets your customers know who your employees are and helps employee know which mask is theirs.</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>      
            </StyGrid>
            <StyGrid>
                <StyTarg id='service3'/>
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
                        <StyDescript>An Inexpensive way to decorate small quantities of items. Vinyl cut transfers adhere to cotton, polyester, nylons and most other materials. Great for individuals, groups, organizations or company needs. Can be used to create prop prototypes or one of a kind items!</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>       
                <StyleServContainer id='service4'>
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
                        <StyDescript>Detailed art items that cannot be produced in vinyl cut transfers or require specific colors can be screen printed. Screen printing is normally a more economical option for larger quantities of garments and other printable items as well.</StyDescript>
                    </StyDescDiv>
                </StyleServContainer>       
            </StyGrid>
        </StyContainer>
    )
 }

export default Servicelist
 
        
