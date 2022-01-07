import React, { Component } from "react";
import SectionTitleTwo from "../../component/Banner/SectionTitleTwo";
import Slider from "react-slick";
import { Grid, IconButton, Modal, Typography } from "@material-ui/core";
class PortfolioSlider extends Component {
  state = {
    modal: false,
    data: [],
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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

    const CMS = {
      description:
        "An in-house content management System with hierarchy mechanism implemented in it for access management developed for SUMICO",
      tech: [".NET MVC", "SQL Server"],
      image: require("../../image/portfolio/CMS-Cover.png"),
    };
    const connection = {
      description:
        "A management system for an oil refinary organization to assign tasks to their employess and take sevral serveys and post some news about organization.",
      image: require("../../image/portfolio/connection-main .png"),
      tech: ["React.js", "Firebase", "Material-UI"],
    };
    const dislikr = {
      description:
        "An admin panel for a social media application to monitor the acities, handle users and give them permission for different activities like creating groups, cahtting etc.",
      tech: ["React.js", "Firebase(Firestore)", "Material-UI"],
      image: require("../../image/portfolio/dashboard.png"),
    };
    const UnlockNFT = {
      description:
        "An admin panel for an NFT marketeplace to monitor auctions, daily sales and different activities.",
      tech: ["Web3", "React.js", "Node.js", "Express.js", "mongoDB"],
      image: require("../../image/portfolio/nft.png"),
    };
    var dat = this.state.data;

    return (
      <section className="portfolio_slider_area" id="portfolio">
        <div className="container">
          <SectionTitleTwo
            tCenter="text-center"
            btitle="Our latest projects"
          />
          <Slider {...settings} className="portfolio_slider">
            <div className="p_item" style={{ height: "100%" }}>
              <div className="portfolio_content">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.setState({ modal: true, data: CMS });
                  }}
                >
                  <img
                    src={require("../../image/portfolio/CMS-Cover.png")}
                    alt=""
                    width="95%"
                  />
                </a>
                <div className="text">
                  <a href="./">
                    <h4>CMS</h4>
                  </a>
                  <a href=".#">Web Development</a>
                </div>
              </div>
            </div>
            <div className="p_item">
              <div className="portfolio_content" style={{ height: "450%" }}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.setState({ modal: true, data: connection });
                  }}
                >
                  <img
                    src={require("../../image/portfolio/connection-main .png")}
                    alt=""
                  />
                </a>
                <div className="text">
                  <a href="./">
                    <h4>Connect Team</h4>
                  </a>
                  <a href=".#">Development</a>
                </div>
              </div>
            </div>
            <div className="p_item">
              <div className="portfolio_content">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.setState({ modal: true, data: dislikr });
                  }}
                >
                  <img
                    src={require("../../image/portfolio/dashboard.png")}
                    alt=""
                    width="75%"
                  />
                </a>
                <div className="text">
                  <a href="./">
                    <h4>Creative Design</h4>
                  </a>
                  <a href=".#">App Design</a>
                </div>
              </div>
            </div>
            <div className="p_item">
              <div className="portfolio_content">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.setState({ modal: true, data: UnlockNFT });
                  }}
                >
                 
                  <img
                    src={require("../../image/portfolio/nft.png")}
                    alt=""
                    width="83%"
                  />
                </a>
                <div className="text">
                  <a href="./">
                    <h4>UnlockNFT</h4>
                  </a>
                  <a href=".#">Admin Panel</a>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <Modal
          open={this.state.modal}
          onClose={() => {
            this.setState({ modal: false });
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            justifySelf: "center",
            justifyItems: "center",
            // alignSelf: "center",
            // alignContent: "center",
          }}
        >
          {dat && (
            <Grid
              container
              sm={8}
              style={{
                display: "flex",
                justifyContent: "center",
                justifySelf: "center",
                justifyItems: "center",
                alignSelf: "center",
                alignContent: "center",
                position: "relative",
                backgroundColor: "white",
                padding: 20,
                borderRadius: 20,
                borderColor: "white",
              }}
            >
              <Grid item sm={6} style={{ paddingRight: 50 }}>
                <Typography style={{ color: "black", fontSize: 25 }}>
                  Description:
                </Typography>
                <Typography>{dat.description}</Typography>
                <Typography style={{ color: "black", fontSize: 25 }}>
                  Technologies:
                </Typography>
                <Typography>
                  <ul>
                    {dat.tech?.map((id) => {
                      return <li>{id}</li>;
                    })}
                  </ul>
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <img style={{ width: "100%" }} src={dat.image} />
              </Grid>
            </Grid>
          )}
        </Modal>
      </section>
    );
  }
}

export default PortfolioSlider;
