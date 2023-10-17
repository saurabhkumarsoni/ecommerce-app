import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'
const contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.477408619768!2d84.13453377599096!3d24.60722535534282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c51d6d4e221a9%3A0x4a4f3cb4c3de6fb2!2sRadhey%20Shyam%20Utsav%20Garden!5e0!3m2!1sen!2sin!4v1697265869459!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <div>
                        <textarea name="" className="w-100 form-control" id="" cols="30" rows="10" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-2"/>
                        <address className="mb-0">Radhey Shyam Utsav Garden Opposite Tanya gas godown, Near-Basant bigha</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-2"/>
                      <a href="tel:+91 9037111757">+91 9037111757</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-2"/>
                      <a href="mailto:saurabh.soni119@gmail.com">saurabh.soni119@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-2"/>
                      <p className="mb-0">Monday- Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
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

export default contact;
