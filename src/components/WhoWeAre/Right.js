import React,{ useEffect } from "react";
import AOS from "aos"
const Right = ({profile}) => {
  useEffect( ()=>{
    AOS.init({
      duration:2000,
      offset:200
    })
  },[])
  return (
    <div className="col-lg-8  my-3" data-aos="zoom-up">
      <div className="card">
        <div className="card-body">
          <img
            src={profile}
            className="img img-fluid h-50"
            alt="profile"
           
          />
          <p className="text text-muted  my-1 p-2">
            Goutham | Founder
          </p>
        </div>
      </div>
    </div>
  );
};

export default Right;
