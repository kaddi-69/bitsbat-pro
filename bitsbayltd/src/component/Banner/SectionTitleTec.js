import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
class SectiontitleTech extends Component {
  render() {
    var { Title, TitleP } = this.props;
    return (
      <div
        className="section_title text-center mb_60"
        // style={{ marginBottom: -10 }}
        id={"technologies"}
      >
        <Reveal effect="fadeInUp">
          <h2 style={{color:"#0db3c7"}} className="mb_0 title_h2 t_color">{Title}</h2>
        </Reveal>
        <Reveal effect="fadeInUp" duration={1500}>
          <p className="mb_0 title_p">{TitleP}</p>
        </Reveal>
        <Reveal effect="fadeInLeft" duration={2000}>
          <span className="bottom_line"></span>
        </Reveal>
      </div>
    );
  }
}
export default SectiontitleTech;
