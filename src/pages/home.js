import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FRO PROS.</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between-align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE.</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699.00 <br /> or $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $599.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>50% OFF</h4>
                    <h5>Smart Watches</h5>
                    <p>
                      Shop the latest band <br />
                      styles and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback <br /> & utra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-02.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Daily Surprise Offers</h6>
                    <p className="mb-0"> Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-03.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Support 24/7</h6>
                    <p className="mb-0">Shop with expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-04.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Affordable Prices</h6>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/images/service-05.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/speaker.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/speaker.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6 className="fw-bold">Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Famous Product</h3>
            </div>
            <div className="col-3">
                <div className="famous-card position-relative">
                    <img src="images/images/smartwatch.avif" className="img-fluid" alt="" />
                   <div className="famous-content position-absolute">
                   <h5>Big Screen</h5>
                    <h6>Smart Watch Series 7</h6>
                    <p>From $399 or $16.62/mo. for 24 mo. *</p>
                   </div>
                </div>
            </div>
            <div className="col-3">
                <div className="famous-card position-relative">
                    <img src="images/images/laptop.avif" className="img-fluid" alt="" />
                   <div className="famous-content position-absolute">
                   <h5 className="text-dark">Apple Product</h5>
                    <h6 className="text-dark">APPLE 2020 Macbook Air</h6>
                    <p className="text-dark">8 GB/256 GB 14 inc Gray color</p>
                   </div>
                </div>
            </div><div className="col-3">
                <div className="famous-card position-relative">
                    <img src="images/images/oneplusavif.avif" className="img-fluid" alt="" />
                   <div className="famous-content position-absolute">
                   <h5 className="text-dark">Big Screen</h5>
                    <h6 className="text-dark">Smart Watch Series 7</h6>
                    <p className="text-dark">From $399 or $16.62/mo. for 24 mo. *</p>
                   </div>
                </div>
            </div><div className="col-3">
                <div className="famous-card position-relative">
                    <img src="images/images/smartwatch.avif" className="img-fluid" alt="" />
                   <div className="famous-content position-absolute">
                   <h5>Big Screen</h5>
                    <h6>Smart Watch Series 7</h6>
                    <p>From $399 or $16.62/mo. for 24 mo. *</p>
                   </div>
                </div>
            </div>
            </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
                <SpecialProduct/>
                <SpecialProduct/>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-01.png" alt="brands-image" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-02.png" alt="brands-image" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-03.png" alt="brands-image" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-04.png" alt="brands-image" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-05.png" alt="brands-image" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-06.png" alt="brands-image" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-07.png" alt="brands-image" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/images/brand-08.png" alt="brands-image" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
              <div className="row">
                <div className="col-3">
                <BlogCard />
                </div>
                <div className="col-3">
                <BlogCard />
                </div>
                <div className="col-3">
                <BlogCard />
                </div>
                <div className="col-3">
                <BlogCard />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
