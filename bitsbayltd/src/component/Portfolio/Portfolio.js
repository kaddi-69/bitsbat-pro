import React, { Component } from "react";
import ItemGrid from "./ItemGrid";
import Sectiontitle from "../../component/Banner/Sectiontitle";
import { Parallax } from "react-parallax/";
import image from "../../image/portfolio/wireperson.jpeg";

class portfolio extends Component {
  render() {
    var { pClass } = this.props;
    return (
      <section className={`portfolio_area ${pClass}`} id="portfolio">
        <Parallax bgImage={image} strength={500} className="banner_area">
          <div className="container">
            <Sectiontitle style={{ color: "white" }} Title="" />
            <ItemGrid />
          </div>
        </Parallax>
      </section>
    );
  }
}

export default portfolio;
