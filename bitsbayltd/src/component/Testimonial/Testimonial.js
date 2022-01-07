import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { Parallax } from "react-parallax";
import Devider from "@material-ui/core/Divider";
import Sectiontitle from "../Banner/Sectiontitle";

const Testimonial = () => {
  return (
    <section id="testimonial">
      {/* <h2
        className="t_color"
        style={{
          textAlign: "center",

          fontWeight: "bold",
          marginTop: -20,
        }}
      >
        Meet Our Team
      </h2>
      <Devider style={{ width: "100%",  }} /> */}
      {/* <Sectiontitle
        Title="Meet Our Team"
        TitleP="Meet our dynamic team of young and experienced technologists."
      /> */}

      {/* <Parallax
        bgImage={require("../../image/background/3.jpg")}
        strength={280}
        className="testimonial_area"
      >
        <div className="container">
          <TestimonialSlider />
        </div>
      </Parallax> */}
    </section>
  );
};
export default Testimonial;
