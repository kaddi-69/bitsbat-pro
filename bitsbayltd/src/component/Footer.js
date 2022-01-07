import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax/";
const  image = require('../image/background/2.jpg');
class Footer extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section style={{backgroundColor:'0db3c7'}}>
        <div className="footer-area" style={{backgroundColor:'0db3c7'}}>
          <div className="footer-content">
            {/* <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../image/logo.napng')}  alt="" style={{borderRadius:38}}/>
                        </Link> */}
            <Fade top cascade>
              <ul className="list_style">
                {jhonData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Fade>

            <p>© 2022 All Rights Reserved Bitsbay ltd.</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
