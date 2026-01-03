import React from 'react'
import { Nav } from '../part/nav/Nav'
import PageOne from '../part/home/PageOne'
import PageTwo from '../part/home/PageTwo'
import PageThree from '../part/home/PageThree'
import PageFour from '../part/home/PageFour'
import PageFive from '../part/home/PageFive'
import PageSix from '../part/home/PageSix'
import PageSeven from '../part/home/PageSeven'
import PageEight from '../part/home/PageEight'
import PageNine from '../part/home/PageNine'
import PageTen from '../part/home/PageTen'
import PageEleven from '../part/home/PageEleven'
import Footer from '../part/footer/Footer'
import Layout from '../layout/Layout'
import PageTwelve from '../part/home/PageTwelve'
import Reel from '../part/home/Reel'

const Home = () => {
    return (
        <Layout>
            <PageOne />
            <PageTwo />
            <PageThree />
            <PageFour />
            <PageFive />
            <PageSix />
            <PageSeven />
            <PageEight />
            <Reel />
            <PageNine />
            <PageTen />
            <PageEleven />
            <PageTwelve />
        </Layout>
    )
}

export default Home