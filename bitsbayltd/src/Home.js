import React from "react";
import NavbarThree from "./component/Navbar/NavbarThree";



import Banner from "./component/Banner/Banner";
import FrelencerBannerr from './component/Banner/frelencerBanner'


import About from "./component/About";
import Service from "./component/Service";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import TestimonialTwo from "./component/Testimonial/TestimonialTwo";

import Clientslogo from "./component/Clientslogo";
import Blog from "./component/Blog/Blog";
import MapContainer from "./component/Map";
import Contact from "./component/Contact";
import Skill from "./component/Skill/Skill";
import Footer from "./component/Footer";
import jhonData from "./component/jhonData";
import ServiceTwo from "./component/ServiceTwo";
import reactnative from "./image/react-native.png";
import amazon from "./image/cloud-amazon-aws.png";
import firebase from "./image/cloud-firebase.png";
import digitalOcean from "./image/cloud-digital-ocean.png";
import angular from "./image/web-and-hybrid-angular.png";
import ionic from "./image/web-and-hybrid-ionic.png";
import Navbar from "./component/Navbar/Navbar";
import aspnet from "./image/asp-net.png";
import nodejs from "./image/node-js.png";
import PortfolioSlider from "./component/Portfolio/PortfolioSlider";
import SkillTwo from "./component/Skill/SkillTwo";
import Sectiontitle from "./component/Banner/Sectiontitle";
import SectionTitleTwo from "./component/Banner/SectionTitleTwo";
import SectiontitleTech from "./component/Banner/SectionTitleTec";
import NavbarTwo from "./component/Navbar/NavbarTwo";

var data = [
  {
    id: 1,
    image: "./image/react-native.png",
  },
  {
    id: 2,
    image: "./image/react-native.png",
  },
];
export const Home = () => (
  <div className="body_wrapper">
    <Navbar
      mContainer="custome_container"
      mainlogo="Bitsbay_Logo_nav.png"
      stickylogo="Bitsbay_Logo_nav.png"
    />
    
    <FrelencerBannerr jhonData={jhonData} />

    
    <About aClass="about_area" jhonData={jhonData} />
    <Service wClass="work_area" jhonData={jhonData} />
    {/* <PortfolioSlider /> */}
    {/* <SkillTwo /> */}
    <SectiontitleTech
      Title="Technologies"
      TitleP="Welcome to the world of tomorrow, our technical knowledge combined with industry best practices ensure highly Maintainable and Scalable processes with continuous integration, Continuous development and agility."
    />
    <Clientslogo
      data={reactnative}
      data1={angular}
      data2={ionic}
      title="Web & Hybrid"
    />
    <Clientslogo
      data={amazon}
      data1={firebase}
      data2={digitalOcean}
      title="Cloudbased Platforms"
    />
    <Clientslogo data={amazon} data1={aspnet} data2={nodejs} title="Server" />

    {/* <Blog /> */}
    <Testimonial styel={{ paddingTop: 20 }} />

    <Contact jhonData={jhonData} />
    <Footer jhonData={jhonData} />
  </div>
);
