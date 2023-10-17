import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import CustomInput from "../components/CustomInput";
const Login = () => {
  return (
    <>
      <Meta title={"Account"} />
      <BreadCrumb title="Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center fw-bold mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <CustomInput
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />

                  <CustomInput
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                  />

                  <div>
                    <Link to="/forgot-password"> Forgot your Password ?</Link>
                  </div>
                  <div className="mt-3 d-flex justify-content-center gap-15">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
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

export default Login;
