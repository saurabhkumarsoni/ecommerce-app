import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white address-text">
                  Radhey Shyam Utsav Garden,
                  <br />
                  Opposite Tanya gas godown, <br />
                  Near-Basant bigha, Amba - Nabi Nagar Rd, more,
                  <br />
                  Nabinagar, Bihar 824301
                </address>
                <a
                  href="tel:+91 9037111757"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 9037111757
                </a>
                <a
                  href="mailto:saurabh.soni119@gmail.com"
                  className="mt-3 d-block mb-0 text-white"
                >
                  saurabh.soni119@gmail.com
                </a>
                <div className="social-icon d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" to="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" to="">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" to="">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" to="">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a className="text-white" to="">
                    <BsFacebook className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white by-2 mb-3">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-white by-2 mb-3">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white by-2 mb-3">Shipping Policy</Link>
                <Link to="/terms-conditions" className="text-white by-2 mb-3">Terms & Conditions</Link>
                <Link to="/blogs" className="text-white by-2 mb-3">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/about" className="text-white by-2 mb-3">About Us</Link>
                <Link to="/faq" className="text-white by-2 mb-3">FAQ</Link>
                <Link to="contact" className="text-white by-2 mb-3">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white by-2 mb-3">Laptops</Link>
                <Link className="text-white by-2 mb-3">Headphones</Link>
                <Link className="text-white by-2 mb-3">Tablets</Link>
                <Link className="text-white by-2 mb-3">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Zaika (A unit of
                Utsav Garden)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
