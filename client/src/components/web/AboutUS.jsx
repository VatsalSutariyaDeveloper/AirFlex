import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const AboutUS = () => {
  return (
    <>
      <div className="page-banner about-us-page-banner">
        <div className="container-fluid pl-60 pr-60">
          <div className="page-banner-content">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="active">
                <NavLink to="/about-us">About Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="about-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 p-0">
              <div className="about-img">
                <img src="images/about-us/1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-content text-center">
                <h2 className="about-us-title">Welcome to AirFlex —where every step is a
                  stylish adventure.</h2>
                <p className="about-us-para">
                  At AirFlex, we're more than just a shoe retailer; we're
                  passionate advocates for style, comfort, and quality
                  craftsmanship. With years of experience in the industry, we've
                  cultivated a deep understanding of what our customers desire:
                  footwear that not only looks great but feels amazing too. Our
                  journey began with a simple vision—to provide a platform where
                  shoe lovers of all walks of life could find their perfect
                  pair, whether they're exploring city streets or conquering
                  rugged terrain. Every shoe in our collection is carefully
                  curated, ensuring that each pair meets our high standards of
                  durability, style, and affordability. But beyond offering
                  exceptional products, we're dedicated to fostering a community
                  built on trust, reliability, and exceptional customer service.
                  We're here to guide you through your footwear journey, from
                  finding the right fit to making your purchase, and beyond.
                  Join us as we step into the future of footwear fashion
                  together.
                </p>
                <div className="about-us-btn">
                  <a href="#">View Work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counterup-area">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6">
              <div className="raavin-counter white-smoke-bg">
                <div className="container">
                  <div className="counter-img">
                    <img src="images/about-us/icon/1.png" alt="" />
                  </div>
                  <div className="counter-info">
                    <div className="counter-number">
                      <h3 className="counter">2169</h3>
                    </div>
                    <div className="counter-text">
                      <span>HAPPY CUSTOMERS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="raavin-counter gray-bg">
                <div className="counter-img">
                  <img src="images/about-us/icon/2.png" alt="" />
                </div>
                <div className="counter-info">
                  <div className="counter-number">
                    <h3 className="counter">869</h3>
                  </div>
                  <div className="counter-text">
                    <span>AWARDS WINNED</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="raavin-counter white-smoke-bg">
                <div className="counter-img">
                  <img src="images/about-us/icon/3.png" alt="" />
                </div>
                <div className="counter-info">
                  <div className="counter-number">
                    <h3 className="counter">689</h3>
                  </div>
                  <div className="counter-text">
                    <span>HOURS WORKED</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="raavin-counter gray-bg">
                <div className="counter-img">
                  <img src="images/about-us/icon/4.png" alt="" />
                </div>
                <div className="counter-info">
                  <div className="counter-number">
                    <h3 className="counter">2169</h3>
                  </div>
                  <div className="counter-text">
                    <span>TOTAL PRODUCTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-area">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6">
              <div className="skill-here">
                <h2>WE HAVE SKILLS TO SHOW</h2>

                <div className="rv-single-progres">
                  <div className="skill-bar">
                    <div className="skill-bar-item">
                      <span>Customer Service</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-progress="70%"
                          style={{
                            width: "70%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "1.2s",
                            animationName: "fadeInLeft",
                          }}
                          data-wow-duration="1.5s"
                          data-wow-delay="1.2s"
                        >
                          <span className="text-top">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rv-single-progres">
                  <div className="skill-bar">
                    <div className="skill-bar-item">
                      <span>Innovative Design</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-progress="80%"
                          style={{
                            width: "90%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "1.2s",
                            animationName: "fadeInLeft",
                          }}
                          data-wow-duration="1.5s"
                          data-wow-delay="1.2s"
                        >
                          <span className="text-top">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rv-single-progres">
                  <div className="skill-bar">
                    <div className="skill-bar-item">
                      <span>Comfort Engineering</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-progress="80%"
                          style={{
                            width: "80%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "1.2s",
                            animationName: "fadeInLeft",
                          }}
                          data-wow-duration="1.5s"
                          data-wow-delay="1.2s"
                        >
                          <span className="text-top">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rv-single-progres">
                  <div className="skill-bar">
                    <div className="skill-bar-item">
                      <span>Quality Control</span>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-progress="80%"
                          style={{
                            width: "96%",
                            visibility: "visible",
                            animationDuration: "1.5s",
                            animationDelay: "1.2s",
                            animationName: "fadeInLeft",
                          }}
                          data-wow-duration="1.5s"
                          data-wow-delay="1.2s"
                        >
                          <span className="text-top">96%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skill-img img-full">
                <img src="images/about-us/2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUS;
