import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <div className="checkout-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Amazon India</h3>
                <nav style={{ "--bs-breadcrumb": ">" }} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart" href="" className="total-price text-dark">
                        Cart
                      </Link>
                    </li>
                    
                    <li className="breadcrumb-item active total-price" aria-label="page">
                      Information
                    </li>
                    <li className="breadcrumb-item total-price">Shipping</li>
                    <li className="breadcrumb-item active total-price" aria-label="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">
                  saurabh Kumar (saurabh.soni119@gmail.com)
                </p>
                <h3 className="mb-3 pt-5 fw-600">Shipping Address </h3>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between my-5"
                >
                  <div className="w-100">
                    <select
                      name=""
                      className="form-control form-control-lg mb-2 form-select"
                      id=""
                    >
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control form-control-lg mb-2"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control form-control-lg mb-2"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control form-control-lg mb-2"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Appartment"
                      className="form-control form-control-lg mb-2"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control form-control-lg mb-2"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select
                      name=""
                      className="form-control form-control-lg mb-2"
                      id=""
                    >
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="zipcode"
                      className="form-control form-control-lg mb-2"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack />
                        Return to Cart
                      </Link>
                      <Link to="/product" className="button">
                        {" "}
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
               <div className="d-flex gap-30 align-items-center">
               <div className="w-75 d-flex gap-10">
                  <div className="w-50 position-relative">
                    <span style={{top: "2px", right: "2px"}} className="badge bg-secondary text-white rounded-circle p-3 position-absolute">1</span>
                    <img
                      src="images/images/acc.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="title">Hindware 3 L Storage Water Geyser (Immedio, White & Blue)
</div>
                </div>
                <div className="flex-grow-1">
                  <h5>$100.00</h5>
                </div>
               </div>
              
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">SubTotal</p>
                  <p className="total-price">$200.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$200.00</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$200.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
