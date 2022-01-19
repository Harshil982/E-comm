import React, { useEffect } from 'react';
import './Styles/home.css'
import Img2 from './../../require-images/Clean products that deliver better solutions-05.png'
import Faq from 'react-faq-component'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactPlayer from 'react-player';
// import Card from '../Card';
import AdvertisePoster from '../Advertise_poster';
import Footer from '../Footer';
import Testimonials from './Testimonials';
import HomeMainPoster from './HomeMainPoster';
import MostPopular from './MostPopular';
import TopRated from './TopRated';
import InstaHandles from './InstaHandles';
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
    const data = {
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };

    const styles = {
        bgColor: 'rgba(255,0,0,0)',
        titleTextColor: "#354E57",
        rowTitleColor: "Black",
        rowTitlePadding: "10px 20px",
        rowContentColor: 'grey',
        rowContentfontSize: '35px',
        // arrowColor: "red",
    };

    const config = {
        animate: true,
        // arrowIcon: "+",
        tabFocus: true
    };
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
                <InstaHandles />
                <Testimonials />
                <div className="frequent-ask-que">
                    <h2 style={{ textAlign: "center" }} data-aos="fade-left">Frequently Asked Questions</h2>
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                        data-aos="fade-up"
                    /></div>
                {/* <VideoPlayer
                    url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    autoplay
                    width={900}
                    aspectRatio="16:9"
                /> */}
                <div className="video-ad">
                    <ReactPlayer
                        url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                        className="react-player"
                        playing={true}
                        loop={true}
                        controls={false}
                        muted={true}
                        width="50%"
                        height="40vw"
                    />
                    <div className="video-ad-text-content">
                        <div>
                            <h1>Social Media Videos Help to Care</h1>
                            <p>A helthier you from the inside out. We're sourced the cleanest ingrediants to create a line of skin care treatments that leave you feeling your best.</p>
                            <button>View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;