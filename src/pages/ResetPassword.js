import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center fw-bold mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomInput
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                  />
                  <CustomInput
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                  />

                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Ok
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

export default ResetPassword;
