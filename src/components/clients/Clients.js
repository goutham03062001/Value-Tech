import React, {useEffect} from "react";

import "./clients.css";
import Aos from "aos";
const Clients = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000,
      offset:200
    })
  })
  return (
    <div className="container my-1">
      <div className="row py-1">
        <h3 className="text text-center text-muted my-5" id= "our-clients" data-aos="fade-up" data-aos-anchor-placement="top-bottom">OUR CLIENTS</h3>
        <div className="row">
          <div className="col-lg-4 col-sm-10 col-6 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">Triveni High School</p>
               
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-10 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">Ravindra Bharathi High School</p>

              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-10 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">SPRK High School</p>

              
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-10 col-md-4 my-5 mobile_clients" data-aos="fade-up">
            <div className="card client">
              <div className="card-inner">
                <p className="text text-muted">Spring Fields High School</p>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
