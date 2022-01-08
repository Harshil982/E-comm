import React, { useEffect } from 'react';
import './Styles/home.css'
import Img2 from './../../require-images/Clean products that deliver better solutions-05.png'
import InstaIMG from './../../require-images/logo-instagram.png'
import Faq from 'react-faq-component'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../Card';
import AdvertisePoster from '../Advertise_poster';
import Footer from '../Footer';

function Home(props) {
    useEffect(() => {
        document.title = "Home"
    })
    const data = {
        title: "Frequently Asked Question",
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
        titleTextColor: "blue",
        rowTitleColor: "Black",
        rowTitlePadding: "10px 20px",
        rowContentColor: 'grey',
        rowContentfontSize: '35px',
        // arrowColor: "red",
    };

    const cardData = [
        {
            item: "Vitamin C Night Serum",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        },
        {
            item: "Hyaluronic Acid",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        },
        {
            item: "Sun Damage & Dark Circle Corrector",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        },
        {
            item: "Sunburn Ointment",
            ingrediants: "All Natural Ingrediants",
            Price: 24.99,
            discount: 18
        }
    ]
    const arrayR = [1, 2, 3, 4, 5, 6, 7, 8]
    const config = {
        animate: true,
        // arrowIcon: "+",
        tabFocus: true
    };
    return (
        <>
            <h1>Home</h1>
            <div className="home-div">
                <div className="home-most-popular-container">
                    {cardData.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
                <AdvertisePoster image={Img2} />
                <div className="home-most-popular-container">
                    {cardData.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                    {cardData.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
                <div className="insta">
                    <img src={InstaIMG} alt="insta" />
                    <h3>Connect With Instagram Account</h3>
                </div>
                <div className="insta-handles-container">
                    {arrayR.map((i, ind) => (
                        <div key={ind} className="any-Insta">
                        </div>
                    ))}
                </div>
                <div className="frequent-ask-que">
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    /></div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    rewind={true}
                    effect="fade"
                >
                    <SwiperSlide ><h1>Welcome to Bgmi</h1></SwiperSlide>
                    <SwiperSlide><h1>Harshil</h1></SwiperSlide>
                    <SwiperSlide><h1>Again</h1></SwiperSlide>
                    <SwiperSlide><h1>Do clutches & get Fuc*ing WWCD</h1></SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </>
    );
}

export default Home;