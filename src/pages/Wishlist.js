import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
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
                    src="images/images/tab1.jpg"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
