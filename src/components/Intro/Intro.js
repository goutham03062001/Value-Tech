import React,{ useEffect } from "react";
import "./intro.css";
import welcomeImage from "../../Assets/welcomeImage.png";
import Greetings from "./Greetings";
import AOS from "aos";
import DownArrow from "../../Assets/DownArrow.png"
const Intro = () => {
  useEffect(() => {
    AOS.init({
      offset:200,
      duration: 3000,
    });
  });
  return (
    <>
      <div className="intro_background"></div>
      <div className="container intro_ctn">
        <div className="row">
         <div className="intro">
          <h3 style = {{color:"#071952",letterSpacing:"5px"}} className="title">Welcome To <span style={{color:"#D67BFF"}}>Xenicx</span></h3>
          <small style={{fontWeight:"300",fontFamily:"Roboto",fontSize:"20px"}} className="tagline">Unleashing Innovations</small>
          <img src = {DownArrow} alt="Downarrow" style={{width:"40px",color:"#D67BFF"}}
            className="downarrow"
          />
         </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
