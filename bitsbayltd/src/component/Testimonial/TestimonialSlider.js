import React, { Component } from "react";
import Slider from "react-slick";

class TestimonialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings} className="testimonial_slider">
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/sahalProfile.jpg")} alt="" />
            </div>
            <h6>Abdul Rehman Sahal</h6>
            <span>Founder & CEO</span>
            <p>
              Innovator and entrepreneur with years of experience in business
              Development in eCommerce & Software Development. Experienced in
              all aspects of business formation, operation, finance, and
              management. Visionary product developer with deep knowledge in
              research and analytics. Effective communicator and motivator who
              identifies and leverages assets in teammates to reach
              organizational goals. A relentless optimist who believes there is
              no failure, only feedback.
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/profilepic.jpg")} alt="" />
            </div>
            <h6>Nashit Farooq</h6>
            <span>Co-Founder & Dev Manager</span>
            <p>
              Enthusiastic Software Engineer eager to establish an organization
              that provides opportunities to enhance digitalization, because
              every industry and every organization will have to transform
              itself in the next few years. What is coming at us is bigger than
              the original internet, and you need to understand it, get on board
              with it, and figure out how to transform your business.
            </p>
          </div>
          <div className="item">
            <div className="author_img">
              <img src={require("../../image/javedProfile.jpg")} alt="" />
            </div>
            <h6>Javaid Alam</h6>
            <span>Project Manager</span>
            <p>
              A technology enthusiast having experience in providing solutions
              to various Multinationals, SMEs and financial technology service
              providers and adding value to their organization. My core areas of
              competencies are: Project Management, Business Analysis, Agile
              Implementation, Customer Relationship Management and Product
              Development. My Proactive and Can-do approach leads to efficient
              and in time delivery to create customer delight.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
export default TestimonialSlider;
