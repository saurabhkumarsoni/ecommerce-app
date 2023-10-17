import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const gridSetter = (i) => {
    setGrid(i);
  };
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0 filter-list">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        id=""
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        id=""
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div className="d-flex flex-wrap">
                  <Color/>
                  </div>

                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        id="color-1"
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        id="color-1"
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        M (12)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        id="color-1"
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        L (22)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        id="color-1"
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        XL (32)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        value=""
                        id="color-1"
                        className="form-check-input"
                      />
                      <label htmlFor="" className="form-check-label">
                        XXL (20)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Samsung Glaxy
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Canon Camera
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Iphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Smart Watch
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Cooktop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Utensils
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-25 mx-3">
                      <img
                        src="images/images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-75">
                      <h5>
                        {" "}
                        kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        classNames="my-2"
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price mt-2">$300</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-25 mx-3">
                      <img
                        src="images/images/headphone.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-75">
                      <h5>
                        {" "}
                        kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        classNames="my-2"
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price mt-2">$300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      {" "}
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="">Featured</option>
                      <option value="">Best Selling</option>
                      <option value="">Alphabetically, A-Z</option>
                      <option value="">Alphabetically, Z-A</option>
                      <option value="">Price, low to high</option>
                      <option value="">Price, high to low</option>
                      <option value="">Date, Old to new</option>
                      <option value="">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="store-product-grid mb-4">
                <div className="products-list pb-5">
                  <div className="d-flex gap-10 flex-wrap">
                    <ProductCard grid={grid} />
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

export default OurStore;
