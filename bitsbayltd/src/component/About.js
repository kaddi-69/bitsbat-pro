import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade, Reveal } from "react-reveal/";
import SectionTitleTwo from "./Banner/SectionTitleTwo";

class About extends Component {
  render() {
    let jhonData = this.props.jhonData;
    var { aClass } = this.props;
    return (
      <section className={`${aClass}`} id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <Fade bottom cascade duration={1000}>
                <div className="about_content">
                  <SectionTitleTwo
            tCenter="text-center"
            btitle="About Us"
          /> 

                  <p style={{ textAlign: "justify" }}>
                  Founded in 2020, we are a technology service provider company for small & medium enterprises in retail, manufacturing, healthcare, and other sectors. Our approach to software development is unique, we go beyond and above by continuous improvement, anticipating challenges and fast paced problem resolution. Our biggest strength is in the collaborative nature of our services, we partner with the clients and build relationships to understand their business needs and goals. We optimize as much as we can to deliver a product that is as close to perfection as possible.
                  </p>
                  {/* <Link to="/" className="theme_btn active">
                    Hire Me
                  </Link>
                  <Link to="/" className="theme_btn">
                    Download CV
                  </Link> */}
                </div>
              </Fade>
            </div>
            <div className="col-lg-5">
              <div className="about_img">
                <Reveal effect="fadeInRight" duration={1500}>
                  <img src={require("../image/mobile.svg")} alt="" />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
