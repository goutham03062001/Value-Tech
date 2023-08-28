import React,{ useEffect } from "react";
import "./left.css";
import AOS from "aos";
const Left = () => {
  useEffect( ()=>{
    AOS.init({
      duration:2000,
      offset:300
    })
  },[]);
  return (
    <div className=" my-3" data-aos="zoom-in-up">
      <div className="">
        <p className="text text-muted text-justify company_desc px-3">
          At Xenicx, We Offer Educational Products along with Software Courses. We develope Apps, Websites for Schools and Colleges.
          We are offering Software Training for Graduation level students. Xenicx also motivated to teach every academic concepts very clearly with animations and 3D renderings.
        </p>
        <div className="quick_links">
        {/* <button className="btn btn-md btn-primary px-5">Quick Links</button> */}
        </div>
        
      </div>
    </div>
  );
};

export default Left;
