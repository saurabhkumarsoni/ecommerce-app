import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              {" "}
              <img src="images/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/images/watch.jpg"
              className="img-fluid"
              alt="product-image"
            />
            <img
              src="images/images/watch-01.jpg"
              className="img-fluid"
              alt="product-image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              classNames="my-2"
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              beatXP Marv Raze 1.96" HD Display, Advanced Bluetooth Calling
              Smart Watch, Smart AI Voice Assistant, 60 Hz Refresh Rate, Health,
              SpO2 & Stress Monitoring, Fast Charging (Black)
            </p>
            <p className="price mt-2"> $100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/images/prodcompare.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/images/view.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              {" "}
              <img src="images/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/images/watch.jpg"
              className="img-fluid"
              alt="product-image"
            />
            <img
              src="images/images/watch-01.jpg"
              className="img-fluid"
              alt="product-image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              classNames="my-2"
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              beatXP Marv Raze 1.96" HD Display, Advanced Bluetooth Calling
              Smart Watch, Smart AI Voice Assistant, 60 Hz Refresh Rate, Health,
              SpO2 & Stress Monitoring, Fast Charging (Black)
            </p>

            <p className="price mt-2"> $100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/images/prodcompare.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/images/view.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
