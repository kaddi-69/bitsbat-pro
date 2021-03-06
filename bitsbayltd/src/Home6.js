import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Clientslogo from './component/Clientslogo';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import jhonData from './component/jhonData';

export const Home6 = () => (
  <div className="body_wrapper red_color">
    <Navbar mainlogo="logo.png" stickylogo="logo.png"/>  
    <RBanner jhonData={jhonData} bClass="banner_shap_two" imag="man.jpg" textLeft="text-left"/>
    <About aClass="about_area" jhonData={jhonData}/> 
    <Service wClass="work_area" jhonData={jhonData}/>
    <Portfolio/>
    <Skill/>
    <Testimonial/>
    <Clientslogo/>
    <Blog/>
    <Contact jhonData={jhonData}/>
    <Footer jhonData={jhonData}/>
  </div>
)

