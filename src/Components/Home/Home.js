import React, { useEffect } from 'react';
import './Styles/home.css'
import Img2 from './../../require-images/Clean products that deliver better solutions-05.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import AdvertisePoster from '../Advertise_poster';
import Footer from '../Footer';
import Testimonials from './Testimonials';
import HomeMainPoster from './HomeMainPoster';
import MostPopular from './MostPopular';
import TopRated from './TopRated';
import InstaHandles from './InstaHandles';
import FAQ from './FAQ';
import VideoAd from './VideoAd';
// import {Link} from 'react-router-dom'

function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Home"
        Aos.init({
            duration: 1400,
            offset: 100,
        })
    })


    return (
        <>
            <div className="home-div">
                <HomeMainPoster />
                <div className="soln-for-all-skin">
                    <h1>Solutions for all skin health</h1>
                    <p>Explore our innovative skincare products</p>
                </div>
                <MostPopular />
                <AdvertisePoster image={Img2} />
                <TopRated />
                <VideoAd />
                <InstaHandles />
                <Testimonials />
                <FAQ />
            </div>
            <Footer />
        </>
    );
}

export default Home;