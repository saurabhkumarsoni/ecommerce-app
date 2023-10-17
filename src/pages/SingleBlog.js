import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"dynamic Single Blog"} />
      <BreadCrumb title="Dynamic Single Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <BiArrowBack className="fs-5" />
                  Go back to blogs
                </Link>
                <div className="blog-card py-5 px-5">
                  <h3 className="title">
                    Meet Pixel 8 and Pixel 8 Pro, our newest phones
                  </h3>
                  <div className="card-image">
                    <img
                      src="images/images/blog-1.jpg"
                      className="img-fluid w-100"
                      alt="blog"
                    />
                  </div>
                  <div className="blog-content">
                    <p className="date">1 Oct, 2023</p>
                    <h5 className="subtitle">
                      A beautiful sunday morning renaissance
                    </h5>
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
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

export default SingleBlog;
