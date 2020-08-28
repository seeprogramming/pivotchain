import React from "react";
import PivochainLogo from "../../assets/pivotchain-logo-1.webp";
import CustomSection from "../Layout/CustomSection";


const Footer = (props) => {
  return (
    <CustomSection bgColor="#041329">
      <div className="footerWrap">
        {/* <div className="dotPatternWrap">
          <img src={DotPatternImage} alt="Dot pattern "/>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="footerColData">
                <div className="logoWrap">
                  <a className="navbar-brand" href="#">
                    <img
                      src={PivochainLogo}
                      width="130"
                      height="auto"
                      alt="PivotChain Logo"
                      loading="lazy"
                      alt="PivotChain Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="footerColData">
                <div className="secTitle">
                  <h6>Contact Us</h6>
                </div>
                <div className="secData">
                  <p> Phone : +91-95035 96860 </p>
                  <p>Email : contact@pivotchain.com</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="footerColData">
                <div className="secTitle">
                  <h6>Explore</h6>
                </div>
                <div className="secData">
                  <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="footerColData">
                <div className="secTitle">
                  <h6>Get in Touch</h6>
                </div>
                <div className="secData">
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Footer;
