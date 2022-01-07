import React, { Component } from "react";
import { Parallax } from "react-parallax/";
import { Fade, Reveal } from "react-reveal/";
// const image = require("../../image/background/2.jpg");
const image = require("../../image/background/4.jpg");

// import BannerBackground from './Bannerbackground'

class Banner extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section id="home">
        <Parallax bgImage={image} strength={500} className="banner_area" >
          <div className="container">
            <div className="banner_content">
              <Reveal>
                <img
                   style={{width:"50%"}}
                  src={require("../../image/logo/Bitsbay_Logoss.png")}
                  
                  alt=""
                />
              </Reveal>
              <Reveal effect="fadeInUp" duration={1500} >
                <h3 >
                  Impacting{" "}
                  <b className="future_markete">
                    Future Markets
                  </b>{" "}
                  by inventing top-notch solutions.
                  {/* <b style={{ fontSize: 40,}}>.</b> */}
                </h3>
              </Reveal>

              <h4 className="wow fadeInUp animated" >
                We take pride in enabling Future Markets with state-of-the-art
                digital solutions.
                {/* <b style={{ fontSize: 40, color: "#5ec0f2" }}>.</b>{" "} */}
              </h4>
              <Fade bottom cascade duration={1000} >
                <ul className="list_style social_icon">
                  {jhonData.socialLinks &&
                    jhonData.socialLinks.map((item) => {
                      return (
                        <li key={item.name}>
                          <a href={item.url} target="_blank">
                            <i className={item.className} ></i>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </Fade>
              {/* <span style={{marginBottom:60}}></span> */}
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default Banner;
