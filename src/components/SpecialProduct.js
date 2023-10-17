import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-md-6 col-sm-12 mb-3">
      <div className="special-product-card d-flex flex-column flex-md-row justify-content-between">
        <div className="mb-3 mb-md-0">
          <img
            src="images/images/watch-01.jpg"
            className="img-fluid"
            alt="watch"
          />
        </div>
        <div className="special-product-content">
          <h5 className="brand">Samsung</h5>
          <h6 className="title">
            SAMSUNG 189 L Direct Cool Single Door 5 Star Refrigerator
          </h6>
          <ReactStars
            classNames="my-2"
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">
            <span className="text-danger">$100</span> &nbsp;{" "}
            <del className="text-secondary">$400</del>
          </p>
          <div className="discount-till d-flex align-items-center gap-2 gap-md-3">
            <p className="mb-0">
              <b>5 days</b>
            </p>
            <div className="d-flex gap-2 gap-md-3 align-items-center">
              <span className="badge bg-danger p-3">1</span>:
              <span className="badge bg-danger p-3">1</span>:
              <span className="badge bg-danger p-3">1</span>
            </div>
          </div>
          <div className="product-count my-3">
            <p>Products: 5</p>
            <div className="progress h-5">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <Link className="button">Add to Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
