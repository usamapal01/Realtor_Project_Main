import React from "react";
import {
  MDBFooter,
} from "mdb-react-ui-kit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ReactNavbar } from "overlay-navbar";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <MDBFooter className="" color="white" bgColor="dark">
      <div className="container-md p-4">
        <section className="">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="mb-5">The Real Estate, Location</h3>
              <h5>Agent Name</h5  >

              <p>
                Real Estate Sales <br /> Professional License# XXXXXXXXX <br />{" "}
                Cell: XXX-XXX-XXXX
              </p>
              <p>
                1234 Abcd Efg <br /> Long Beach, CA 90815 <br />
                XXX-XXX-XXXX
              </p>

              <p>
                Should you require assistance in navigating our website or
                searching for real estate, please contact our offices at
                XXX-XXX-XXXX.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h3 className="mb-5">MLS Disclaimer</h3>
              <p>
                Based on information from California Regional Multiple Listing
                Service, Inc. as of October 16, 2022 5:35 AM UTC This
                information is for your personal, non-commercial use and may not
                be used for any purpose other than to identify prospective
                properties you may be interested in purchasing. Display of MLS
                data is usually deemed reliable but is NOT guaranteed accurate
                by the MLS. Buyers are responsible for verifying the accuracy of
                all information and should investigate the data themselves or
                retain appropriate professionals.
              </p>
              
            </div>
            <div className="col-md-4 mb-4">
              <p className="mb-5">
                <h3>Sign up for our newsletter</h3>
              </p>
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <button className="btn btn-outline-light mt-3" type="button">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="XXX">
          CECS443
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
