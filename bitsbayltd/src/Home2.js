import React from 'react';
import Navbar from './component/Navbar/Navbar';
import TypeBanner from './component/Banner/TypeBanner';
import RippleBanner from './component/Banner/DeveloperBanner';

import About from './component/About';

import Service from './component/Service';
import ServiceTwo from './component/ServiceTwo';

import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import TestimonialSliderTwo from './component/Testimonial/TestimonialSliderTwo';

import Clientslogo from './component/Clientslogo';
import Blog from './component/Blog/Blog';
import MapContainer from './component/Map';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import jhonData from './component/jhonData';
import TestimonialSlider from './component/Testimonial/TestimonialSlider';


export const Home2 = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container"  mainlogo="Bitsbay_Logo_nav.png"
      stickylogo="Bitsbay_Logo_nav.png"/>
      <TypeBanner jhonData={jhonData}/>
      <About aClass="about_area" jhonData={jhonData}/>
      <ServiceTwo wClass="work_area" jhonData={jhonData}/>
      <Portfolio/>
      <Skill/>
      <Testimonial/>
      <Clientslogo/>  
      <Blog/>
      <MapContainer/>
      <Contact jhonData={jhonData}/>
      <Footer jhonData={jhonData}/>
  </div>
)


