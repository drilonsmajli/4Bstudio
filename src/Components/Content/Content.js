import React from "react";
import { NavLink } from "react-router-dom";
import './Content.scss';
import img1 from "../../assets/123.jpg";
import img2 from "../../assets/4BStudio.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Content() {
    AOS.init();
  return (
    <div className="container-fluid Content">
        <img src={img1} alt="1.jpg"/>
            <div className="row logo__wrapper">
            <div className="col-lg-12 col-md-12 col-sm-12 logo" data-aos="fade-right"
     data-aos-offset="10"
     data-aos-easing="ease-in-sine">
                <div className="col-lg-2 col-md-2 col-sm-2 logo__img">
                    <img src={img2} alt="2.jgp"/>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Project</a></li>
                        <li><a href="/">Contact</a></li>
                        
                    </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 social-media">
               
            <a href="https://www.facebook.com/4Bstudio.eu/"><i className="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/4Bstudio.eu/"><i className="fa fa-instagram"> </i></a>
                    
                </div>
            </div>
            </div>
            <div className="row coming-soon" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500">
                
                <h3>WAIT FOR IT</h3>
                <h1>Coming soon</h1>
            </div>


    </div>
  );
}

export default Content;
