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
// import { Link } from 'react-router-dom'

function Home(props) {
    useEffect(() => {
        // window.scrollTo(0, 0)
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
                <InstaHandles dataCheck = "hello"/>
                <Testimonials />
                <FAQ />
                <div className="company-info-container">
                    <div className="company-info first-company-info-card">
                        <div>
                            <p>General inquiries</p>
                            <a href="mailto:rajputharshilsinh10@gmail.com">info@organicproducts.com</a>
                        </div>
                        <div>
                            <p>Press &amp; Media</p>
                            <a href="mailto:rajputharshilsinh10@gmail.com">info@organicproducts.com</a>
                        </div>
                        <div>
                            <p>Returns</p>
                            <a href="mailto:rajputharshilsinh10@gmail.com">info@organicproducts.com</a>
                        </div>
                    </div>
                    <div className="company-info">
                        <div>
                            <p>Sooth Brand Corporate Headquarters</p>
                        </div>
                        <div>
                            <p>4380 XXXXXXXXXX 300</p>
                            <p>XXXX,XXX 80237</p>
                            <p>Monday - Friday 9am - 4:30pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <Footer />
        </>
    );
}

export default Home;