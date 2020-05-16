import React from "react"
import Layout from "../components/Layout/layout"
import Jumbo from "../components/Jumbo/Jumbo"
import Cardholder from "../components/Cardholder/Cardholder"
import SliderCon from "../components/SliderCon/SliderCon"
import SEO from "../components/SEO/Seo"


export default ({data}) => (
    <Layout>
        <SEO></SEO>
        <Jumbo />
        <Cardholder />
        <SliderCon />
    </Layout>
)

