import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import ReactImageMagnify from "react-image-magnify";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import { BiGitCompare } from "react-icons/bi";
import { BsFillBagHeartFill } from "react-icons/bs";
var product =
  "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70";
const SingleProduct = () => {
  const imageProps = {
    enlargedImageContainerDimensions:{
         width: '160%', height: '100%' },
    smallImage: {
      alt: "Phasellus laoreet",
      isFluidWidth: true,
      src: product,
      width: 200,
      height: 200,
      zoomWidth: 600
    },
    largeImage: {
      src: product,
      width: 1200,
      height: 1800,
      zoomWidth: 600
    },
    enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
  };
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70",
  };
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"product name"} />
      <BreadCrumb title="Product name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="main-product-image">
                <div>
                  <ReactImageMagnify {...imageProps} className="img-fluid" />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 parent">
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/j/v/-original-imagtnqjwpw6cgxt.jpeg?q=70"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/j/v/-original-imagtnqjwpw6cgxt.jpeg?q=70"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/j/v/-original-imagtnqjwpw6cgxt.jpeg?q=70"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/j/v/-original-imagtnqjwpw6cgxt.jpeg?q=70"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/j/v/-original-imagtnqjwpw6cgxt.jpeg?q=70"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/j/v/-original-imagtnqjwpw6cgxt.jpeg?q=70"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/j/v/-original-imagtnqjwpw6cgxt.jpeg?q=70"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 bg-white p-4">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    SAMSUNG Galaxy F14 5G (OMG Black, 128 GB) (6 GB
                    RAM)#JustHere
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price mt-4">$100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      classNames="my-2"
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 review-text">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="py-3 review-btn">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading fw-bold">Type :</h3>
                    <p className="product-data">samrt phone</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading fw-bold">Brand :</h3>
                    <p className="product-data">Samsung</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading fw-bold">Categories :</h3>
                    <p className="product-data">
                      Handset, Type-C Data Cable, Quick Start Guide, Sim
                      Ejection Pin
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading fw-bold">Tags :</h3>
                    <p className="product-data">
                      Headphone, camera, smartphone, xyz, abc
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading fw-bold">Featured :</h3>
                    <p className="product-data">
                      Dual Camera Setup: 50MP Main Camera + 2MP Camera, Camera
                      Features: Deco Pic, Food, Macro, Panorama
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading fw-bold">Availability :</h3>
                    <p className="product-data">541 In Stocks</p>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-2 mb-2">
                    <h3 className="product-heading fw-bold">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 mt-3 mb-2">
                    <h3 className="product-heading fw-bold">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center flex-row gap-15 my-2">
                    <h3 className="product-heading fw-bold">Qunatity :</h3>
                    <div>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        style={{ width: "50px" }}
                        className="form-control"
                      />
                    </div>
                    <button className='button border-0'>Add to Cart</button>
                    <button className='button signup'>Buy Now</button>
                  </div>
                  <div className="d-flex align-items-center gap-15 my-4">
                    <div>
                        <a href=""><BiGitCompare className="fs-5 me-2"/>Add to compare</a>
                    </div>
                    <div>
                        <a href=""><BsFillBagHeartFill className="fs-5 me-2"/>Add to wishlist</a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10 my-3">
                    <h3 className="product-heading fw-bold">Shipping & Returns :</h3>
                    <p className="product-data">
                      Handset, Type-C Data Cable, Quick Start Guide, Sim<br/>
                      Ejection Pin
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Sunt facilis ipsam tempora sit harum labore porro velit rem sequi ducimus a sapiente, in odio. Adipisci aut velit soluta amet vero!
                        <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading fw-bold">Copy Product Link :</h3>
                    <a href="javascript:void(0)" onClick={() =>{
                        copyToClipboard("https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70")
                    }}>Copy product link</a>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="desc-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Description</h3>

              <div className="desc-inner-wrapper">
                <div className="desc-head">
                  <div className="bg-white p-3">
                    <p>
                      In a world where speed is king, the Samsung Galaxy S21 FE
                      reigns supreme, offering a seamless blend of power,
                      storage, and style that's sure to delight even the most
                      demanding smartphone aficionados. With its lightning-fast
                      processor, spacious storage, stunning camera capabilities,
                      and long-lasting battery, it's a device that elevates
                      every aspect of your mobile experience. Say hello to a
                      world where fast doesn't just get faster; it gets
                      phenomenal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="review" className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>

              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customers Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        classNames="my-2"
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Write a Reviews</h4>

                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        classNames="my-2"
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Saurabh Kumar</h6>
                      <ReactStars
                        classNames="my-2"
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Obcaecati, quam! Voluptatem commodi eaque laudantium
                      labore consequuntur cupiditate corporis vitae sit, totam
                      velit adipisci dolor minima expedita sapiente illo earum.
                      Officia!
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
