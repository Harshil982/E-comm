import React from "react";
import './About.css'
import img1 from "./ABOUT PAGE HEADER-02.png";
import img2 from "./ABOUT US 01.png";
import img3 from "./ABOUT US 02.png";
// import img4 from "./#547665.png";
import img5 from "./Recent news - 3.png";
import img6 from "./Recent news - 4.png";
import img7 from "./Recent news - 2.png";
import img8 from "./Recent news - 1.png";
import RecentNewsData from './RecentNews.json'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { Link, Redirect } from "react-router-dom";
// import Products from "../Products/Products";
import AdvertisePoster from "../Advertise_poster";
import InstaHandles from './../Home/InstaHandles';
import BlogCard from "./BlogCard";

const About = () => {
  return (
    <>
      <div className="container-fluid back-image">
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 margin-our">
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
              <div className="col-8 col-sm-8 col-md-9 col-lg-8 col-xl-8">
                <p className="text-start mw-our fs-1 fw-bold color-1">
                  Our mission is a healthier you
                </p>
              </div>
              <div className="col-2 col-sm-2 col-md-1 col-lg-2 col-xl-2"></div>

              <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
              <div className="col-8 col-sm-7 col-md-7 col-lg-6 col-xl-6">
                <p className="text-start p-health mt-2">
                  A healthier you from the inside out.We have sourced the
                  cleanest ingredients to create a line of clean skin care
                  treatments that leave you feeling your best.
                </p>
              </div>
              <div className="col-2 col-sm-3 col-md-3 col-lg-4 col-xl-4"></div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <img src={img1} className="img-fluid" alt="..."></img>
          </div>
        </div>
      </div>

      <div class="container-fluid my-5">
        <div class="row">
          <div className="col-2"></div>
          <div className="col-8">
            <p className="fs-1 fw-bold text-center">
              The cleanest ingredients on earth
            </p>
          </div>
          <div className="col-2"></div>

          <div className="col-2"></div>
          <div className="col-8">
            <p className="text-center">
              Our misson back then was simple, and it remains the same
              today.When in doubt, turn to food first.Nothing works better.When
              you can't, take our supplements.
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="card">
          <div className="row g-0 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
              <img
                src={img2}
                className="img-fluid card-img height-img"
                alt="..."
              ></img>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="card-body back-org padding1 text-light text-start ">
                <div className="container-fluid height-p parent">
                  <div className="row margin-inside child">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                      <p className="card-title fs-1 fw-bold">
                        All organic ingredients.
                      </p>
                      <p className="card-text my-3">
                        A healthier you from the inside out.We have sourced the
                        cleanest ingredients to create a line of clean skin care
                        treatments that leave you feeling your best.
                      </p>
                      <Link to={`/Products/${item.category}`}>
                        <button className="back-org text-light border-button py-2 px-5 fw-bold">
                          Shop more
                        </button>
                      </Link>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="about-image2-3">
        <AdvertisePoster image={img2} /> 
        <AdvertisePoster image={img3} />
      </div>

      {/* <div className="container-fluid">
        <div className="card">
          <div className="row g-0 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="card-body back-clean padding1 text-light text-start ">
                <div className="container-fluid height-p parent">
                  <div className="row margin-inside child">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                      <p className="card-title fs-1 fw-bold">
                        Clean products that deliver better solutions.
                      </p>
                      <p className="card-text my-3">
                        A healthier you from the inside out.We have sourced the
                        cleanest ingredients to create a line of clean skin care
                        treatments that leave you feeling your best.
                      </p>
                      <Link to={`/Products/${item.category}`}> 
                        <button className="back-clean text-light border-button py-2 px-5 fw-bold">
                          Shop more
                        </button>
                       </Link> 
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
              <img
                src={img3}
                className="img-fluid card-img height-img"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-fluid back-image">
        {/* <div className="container-fluid">
          <FontAwesomeIcon
            icon={faInstagram}
            className="margin-insta"
            color="#8a3ab9"
            size="3x"
          />
          <p className="text-center my-3 fw-bold">
            Connect With Instagram Account
          </p>
          <p className="text-center ">|</p>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-2">
              <img src={img4} className="img-fluid" alt="..."></img>
            </div>
          </div>
        </div> */}

        <div className="insta-handles-about-page">
          <InstaHandles />
        </div>
        <div className="container">
          <p className="text-center fs-1 fw-bold mt-5 pt-5 color-1">
            Recent News
          </p>
          <p className="text-center">
            Explore our innovative skincare products
          </p>
        </div>
        <div className="blog-cards-container">
          {RecentNewsData.map((item,index)=> (
            <BlogCard data={item}/>
          ))}
        </div>
        {/* <div className="container my-5">
          <div className="row gx-5">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-5">
              <div class="card">
                <img src={img5} class="card-img-top" alt="..."></img>
                <div class="card-body text-start">
                  <p class="card-title fs-5 fw-bold">Lorem ipsum dolor sit</p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, alias modi a sit fuga tempore, quo possimus
                    voluptas.
                  </p>
                  <a href="/" class="card-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-5">
              <div class="card">
                <img src={img6} class="card-img-top" alt="..."></img>
                <div class="card-body text-start">
                  <p class="card-title fs-5 fw-bold">Lorem ipsum dolor sit</p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, alias modi a sit fuga tempore, quo possimus
                    voluptas.
                  </p>
                  <a href="/" class="card-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-5">
              <div class="card">
                <img src={img7} class="card-img-top" alt="..."></img>
                <div class="card-body text-start">
                  <p class="card-title fs-5 fw-bold">Lorem ipsum dolor sit</p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, alias modi a sit fuga tempore, quo possimus
                    voluptas.
                  </p>
                  <a href="/" class="card-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-5">
              <div class="card">
                <img src={img8} class="card-img-top" alt="..."></img>
                <div class="card-body text-start">
                  <p class="card-title fs-5 fw-bold">Lorem ipsum dolor sit</p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, alias modi a sit fuga tempore, quo possimus
                    voluptas.
                  </p>
                  <a href="/" class="card-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
