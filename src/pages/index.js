import React from "react"
import Layout from "../components/Layout/layout"
import Jumbo from "../components/Jumbo/Jumbo"
import Cardholder from "../components/Cardholder/Cardholder"
import SliderCon from "../components/SliderCon/SliderCon"


export default ({data}) => (
    <Layout>
        <Jumbo />
        <Cardholder />
        <SliderCon />
    </Layout>
)

