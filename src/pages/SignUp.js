import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center fw-bold mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomInput
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    name="name"
                  />

                  <CustomInput
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />

                  <CustomInput
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter Mobile"
                    name="mobile"
                  />

                  <CustomInput
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                  />

                  <div className="mt-3 d-flex justify-content-center gap-15">
                    <button className="button border-0" type="submit">
                      SignUp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
