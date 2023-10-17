import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
function CompareProduct() {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt=""
                />
                <div className="product-card-image">
                  <img
                    src="images/images/hp.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    <strong>You are viewing:</strong> HP Laptop 15s, 11th Gen
                    Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4,
                    512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers
                    (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU
                  </h5>
                  <h6 className="price mt-3">₹36,999</h6>
                  <ReactStars
                    classNames="my-4a"
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="d-flex my-4">
                    <button className="add-to-cart-button btn">
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Brand : </h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Type : </h5>
                      <p>Laptop</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">SKU : </h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Availability : </h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Color : </h5>
                      <div>
                        <Color />
                      </div>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Size : </h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt=""
                />
                <div className="product-card-image">
                  <img
                    src="images/images/tab.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    <strong>You are viewing:</strong> HP Laptop 15s, 11th Gen
                    Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4,
                    512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers
                    (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU
                  </h5>
                  <h6 className="price mt-3">₹36,999</h6>
                  <ReactStars
                    classNames="my-4a"
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="d-flex my-4">
                    <button className="add-to-cart-button btn">
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Brand : </h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Type : </h5>
                      <p>Laptop</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">SKU : </h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Availability : </h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Color : </h5>
                      <div>
                        <Color />
                      </div>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Size : </h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt=""
                />
                <div className="product-card-image">
                  <img
                    src="images/images/tab3.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    <strong>You are viewing:</strong> HP Laptop 15s, 11th Gen
                    Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4,
                    512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers
                    (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU
                  </h5>
                  <h6 className="price mt-3">₹36,999</h6>
                  <ReactStars
                    classNames="my-4a"
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="d-flex my-4">
                    <button className="add-to-cart-button btn">
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Brand : </h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Type : </h5>
                      <p>Laptop</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">SKU : </h5>
                      <p>Apple</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Availability : </h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Color : </h5>
                      <div>
                        <Color />
                      </div>
                    </div>
                    <div className="product-detail">
                      <h5 className="fw-bold">Size : </h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;
