import React from "react"
import Layout from "../components/Layout/layout"
import Jumbo from "../components/Jumbo/Jumbo"
import Cardholder from "../components/Cardholder/Cardholder"
import SliderCon from "../components/SliderCon/SliderCon"
import SEO from "../components/SEO/SEO"


export default ({data}) => (
    <Layout>
        <SEO title="Home" />
        <Jumbo />
        <Cardholder />
        <SliderCon />
    </Layout>
)

