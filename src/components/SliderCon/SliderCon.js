import React from "react"
import Slider from "react-animated-slider"
import 'react-animated-slider/build/horizontal.css'
import styled from "styled-components"

const slides = [
    { body: '"These guys are great! Great pricing! Fast service! Bob even delivered to me because' +
            'it was on his way home from work.  He even gave me a few free hats with my logo on them.' +
            'I would highly recommend this company."',
      author: '-J.J. with Attic Kings'},

    { body: '"Extreme Accuracy! Bob at IdentityWorX has numbered over 250 jerseys for my company over the' +
            'past three years and we have yet to run into an issue! The jerseys were completed quickly and' + 
            ' correctly each year, and our customers couldn’t be happier with the final product. I would recommend' + 
            ' IdentityWorX to anyone that needs quality heat transfer naming and numbering."',
      author: '-Mitch Bloom, Bloom Marketing Cocepts'},

    { body: '"I have had the pleasure of working with at IdentityWorX for at least the last 10 years,.throughout that time, he has always gone the extra mile for us.  He has always produced proofs for approval, and once approved, is meticulous in the quality of his production work.  Our customers have been pleased...especially by the fact that if he promised to do the order by a certain date, he follows through with his word.  Whether one or a hundred, Bob has always been easy to work with.  We would recommend him to anyone!!"',
      author: '-Margot Morris Dawkins, C.A.S. Atlanta Advertising Novelty'},

    {body: 'Customer Service A+. Decoration Quality A+. Turnaround Time A+. So far Bob has done a few jobs for me and I’m very impressed with the great service and quality I have received.  The shirts and jerseys came out perfect!  Bob went out of his way to help me and he’s been a tremendous asset to my own business.',
     author: '-Matt Fairchild, CEO/President of SportsCrack LLC'},

     {body: 'My business has worked with IdentityWorX for several different heat seal projects over the past 7 years.  The work is done quick, clean, and everything is always done on time!  IdentityWorX is competitively priced and offers a high quality finished product that you can trust to last for years to come. I feel confident when partnering with IdentityWorX on any project and will definitely use their services again in the future!',
      author: '-John Fallon'}
  ];

const StyDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`;

const StyInner = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #101820;
    font-style: italic;
    font-size: 150%;
    font-weight: 300;
    width: 1500px;
`;




const SliderCon = () => {

    return(
            <Slider autoplay={5000}>
                {slides.map((slide, index) => (
                    <StyDiv 
                    key={index}
                    >
                        <StyInner>{slide.body}<br/><br/>{slide.author}</StyInner>
                </StyDiv>))}
            </Slider>
    )
}

export default SliderCon