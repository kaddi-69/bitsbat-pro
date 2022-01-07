import React, { Component } from "react";
import Clientsliders from "react-slick";
import Sectiontitle from "../component/Banner/Sectiontitle";

class Clientslogo extends Component {
  render() {
    var data = this.props.data;
    const settings = {
      autoplay:true,
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed:5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="clients_logo_area" >
        <div className="container">
          <Sectiontitle Title={this.props.title} />
          <Clientsliders {...settings} className="clients_slider">
            <div className="item">
              <a href="./">
                <img src={this.props.data} alt="" style={{ marginRight: 30 }} />
              </a>
            </div>{" "}
            <div className="item">
              <a href="./">
                <img
                  src={this.props.data1}
                  alt=""
                  style={{ marginRight: 30 }}
                />
              </a>
            </div>{" "}
            <div className="item">
              <a href="./">
                <img
                  src={this.props.data2}
                  alt=""
                  style={{ marginRight: 30 }}
                />
              </a>
            </div>
          </Clientsliders>
        </div>
      </section>
    );
  }
}
export default Clientslogo;
