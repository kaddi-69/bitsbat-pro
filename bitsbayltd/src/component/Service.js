import React, { Component } from "react";
import Sectiontitle from "../component/Banner/Sectiontitle";
import Fade from "react-reveal/Fade";

class Service extends Component {
  render() {
    let jhonData = this.props.jhonData;
    var { wClass } = this.props;
    return (
      <section className={`${wClass}`} id="service">
        <div className="container">
          <Sectiontitle
            Title="What we are Doing"
            TitleP="We love what we do. we take pride in going beyond and above."
          />
          <Fade bottom cascade duration={1000}>
            <div className="row">
              {jhonData.service &&
                jhonData.service.map((item) => {
                  return (
                    <div className="col-lg-4 col-sm-6" key={item.id}>
                      <div
                        style={{ height: "90%" }}
                        className="work_item wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <img
                          style={{
                            color: "#F24423",
                            // boxShadow:
                            //   "0px 0px 0px black, 0 0 10px #5ec0f2   , 0 0 5px #5ec0f2",
                            // backgroundColor: "#5ec0f2",
                            
                            height: "25%",
                            width: "20%",
                           
                          }}
                          src={require("../image/icons/" + item.img)}
                        />
                        <a href="#">
                          <h2 className="t_color">{item.serviceTitle}</h2>
                        </a>
                        <p>{item.sDetails}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Service;
