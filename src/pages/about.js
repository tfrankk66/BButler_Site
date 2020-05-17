import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/SEO"

const StyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    margin-bottom: 35px;
    align-items: center;
    justify-content: center;
`;

const StyHead = styled.h1`
    font-size: 400%;
    font-stretch: extra-expanded;
    margin-top: ${props => props.marg ? "45px" : "0px"};
    margin-bottom: ${props => props.marg ? "-20px" : "0px"};
    color: ${props => props.head? "white" : "black"};
`;

const StyBio = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #971B2F;
    height: 700px;
    width: 80%;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 7px 10px 2px #000000;
`;

const StyPar = styled.p`
    color: white;
    width: 95%;
    font-weight: 500;
    font-size: 130%;
`;

const StyPoints = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    Justify-content: center;
    margin: -10px 0px 25px 0px;
`;

const StyDot = styled.div`
    height: 10px;
    width: 10px;
    background-color: black;
    border-radius: 3px;
    margin: 0px 35px 0px 35px;

`;

const StyRedLetter = styled.p`
    color: #971B2F;
    font-weight: 500;
    font-size: 250%;
    font-stretch: extra-expanded;
`;

const StyDesc = styled.p`
    color: black;
    font-size: 250%;
    font-stretch: extra-expanded;

`;

export default () => (
    <Layout>
        <SEO title="About Us" />
        <StyContainer>
           <StyHead marg>About Us</StyHead>
           <StyPoints>
               <StyRedLetter>A</StyRedLetter><StyDesc>tlanta-based</StyDesc>
               <StyDot />
               <StyRedLetter>R</StyRedLetter><StyDesc>eliable</StyDesc>
               <StyDot />
               <StyRedLetter>E</StyRedLetter><StyDesc>xperienced</StyDesc>
           </StyPoints>
            <StyBio>
                <StyHead head>Who is Bob?</StyHead>
                <StyPar>
                        A So-Called “Army Brat”, Bob Butler was born in San Francisco CA but was not there long. Being raised in an army family saw him move from state to state venturing through California, Kentucky, Florida and then 
                    finally landing in Georgia. Being one of six children, Bob grew up in a household that instilled a strong sense of work ethic and pride in everything you do. Bob learned early from his father to never give up on 
                    any work or project no matter how difficult. Bob used these ethics when attaining a degree in Fine Art at Albany Junior College and again at the Art Institute of Atlanta where he gained a degree in Commercial Art.
                    Anyone you ask will tell you that Bob is a dedicated worker, and nothing exemplifies this better than his work history. As a student, Bob worked in multiple restaurants where he would learn key skills in customer 
                    relations and anticipating customer needs. He also gained valuable experience working for a Glassware and Garment printer learning about all kinds of creative printing techniques. 
                    Bob did all of this while raising a young daughter and supporting a family, his wife recalls numerous times waking him from his art table after a 16-hour day filled with two jobs and multiple classes. After completing 
                    his formal education, Bob went straight to work at a publishing company as an Entry-Level Graphic Designer. He would quickly rise to Commercial Printing Supervisor where he managed many different artists and projects. 
                    This work would get him recruited to spearhead a newly created Pre-Press Department at a large Atlanta based screen printer, here he would oversee preparation of files and artwork for everything from business 
                    cards to 10-foot outdoor banners. After 16 years in the Pre-Press business Bob moved on to his true passion, garment printing. After years in garment printing, Bob quickly realized a need for personalized products and other items that simply
                    could not economically be printed or the nature of the product would not allow it. This realization would lead to the creation of his own business, IdentityWorX. As a 30-year veteran of the commercial printing industry, 
                    Bob Butler is a knowledgeable and hardworking Father, Husband and Business Owner whose dedicated to  creating beautiful and stunning products personalized to the customers every expectation. Let IdentityWorX personalize your garment or 
                    other product perfect for companies, groups, sports teams, events or individuals. Personalized garments are also great for samples, prototypes, movie props, gifts and many others!
                </StyPar>
            </StyBio>
        </StyContainer>
        
    </Layout>
)